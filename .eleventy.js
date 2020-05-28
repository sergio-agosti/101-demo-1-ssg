module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      data: `../data/${process.env.DATA_CONTEXT}`
    }
  };

};
