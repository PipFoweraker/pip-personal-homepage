const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("src/assets/");

  // String startsWith filter for navigation highlighting
  eleventyConfig.addFilter("startsWith", (str, prefix) => {
    if (!str || !prefix) return false;
    return str.startsWith(prefix);
  });

  // Slugify filter
  eleventyConfig.addFilter("slugify", (str) => {
    if (!str) return "";
    return str.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
  });

  // Date formatting filter
  eleventyConfig.addFilter("date", (dateObj, format = "YYYY-MM-DD") => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    if (format === "YYYY-MM-DD") {
      return d.toISOString().split('T')[0];
    }
    if (format === "readable") {
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return d.toISOString();
  });

  // Published essays collection (excludes drafts subfolder)
  eleventyConfig.addCollection("essays", (collection) => {
    return collection.getFilteredByGlob("src/essays/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Draft essays collection (for unlisted preview URLs)
  eleventyConfig.addCollection("drafts", (collection) => {
    return collection.getFilteredByGlob("src/essays/drafts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Notes collection
  eleventyConfig.addCollection("notes", (collection) => {
    return collection.getFilteredByGlob("src/notes/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Combined feed collection (essays + notes, most recent 20)
  eleventyConfig.addCollection("feed", (collection) => {
    const essays = collection.getFilteredByGlob("src/essays/*.md");
    const notes = collection.getFilteredByGlob("src/notes/*.md");
    return [...essays, ...notes]
      .sort((a, b) => b.date - a.date)
      .slice(0, 20);
  });

  // Markdown configuration with sidenotes
  let markdownIt = require("markdown-it");
  let footnotePlugin = require("markdown-it-footnote");

  let md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true
  });

  md.use(footnotePlugin);

  // Override footnote rendering to produce sidenote markup
  // Sidenote ref: superscript number inline
  let sidenoteIndex = 0;

  md.renderer.rules.footnote_ref = function(tokens, idx, options, env) {
    let id = tokens[idx].meta.id;
    let n = id + 1;
    return '<sup class="sidenote-ref" id="fnref' + id + '">' + n + '</sup>';
  };

  // Sidenote block open: start the sidenote container
  md.renderer.rules.footnote_block_open = function() {
    return '<div class="sidenotes-footer">\n';
  };

  md.renderer.rules.footnote_block_close = function() {
    return '</div>\n';
  };

  md.renderer.rules.footnote_open = function(tokens, idx, options, env) {
    let id = tokens[idx].meta.id;
    let n = id + 1;
    return '<aside class="sidenote" id="fn' + id + '"><sup>' + n + '</sup> ';
  };

  md.renderer.rules.footnote_close = function() {
    return '</aside>\n';
  };

  md.renderer.rules.footnote_anchor = function() {
    // No back-arrow needed for sidenotes
    return '';
  };

  eleventyConfig.setLibrary("md", md);

  // Transform: move sidenotes from footer to inline after their references
  eleventyConfig.addTransform("inlineSidenotes", function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    if (!content.includes("sidenotes-footer")) return content;

    // Extract each sidenote from the footer
    const sidenoteRegex = /<aside class="sidenote" id="fn(\d+)">([\s\S]*?)<\/aside>/g;
    const sidenotes = {};
    let match;
    while ((match = sidenoteRegex.exec(content)) !== null) {
      sidenotes[match[1]] = match[0];
    }

    // Remove the sidenotes footer block
    content = content.replace(/<div class="sidenotes-footer">[\s\S]*?<\/div>\n?/, '');

    // Insert each sidenote right after the paragraph containing its reference
    for (const [id, sidenoteHtml] of Object.entries(sidenotes)) {
      const refPattern = new RegExp(
        '(<sup class="sidenote-ref" id="fnref' + id + '">[\\s\\S]*?</p>)'
      );
      content = content.replace(refPattern, '$1\n' + sidenoteHtml);
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
