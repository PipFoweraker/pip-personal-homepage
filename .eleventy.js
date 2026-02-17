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

  // Markdown configuration for sidenotes
  let markdownIt = require("markdown-it");
  let md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true
  });

  // Custom sidenote syntax: [^note] becomes sidenote
  // We'll enhance this later with proper sidenote support
  eleventyConfig.setLibrary("md", md);

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
