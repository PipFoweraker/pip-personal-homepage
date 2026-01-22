module.exports = function(eleventyConfig) {
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
