const Image = require("@11ty/eleventy-img");

// Adds custom generated image shortcode
// Referenced from: https://www.11ty.dev/docs/plugins/image/
// defaults to the webp and jpeg formats
async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [500, null],
        outputDir: './generated/img'
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(config) {
    config.addWatchTarget("./src/scss/");
    config.addWatchTarget("./src/js/");
    config.setWatchThrottleWaitTime(500);
    // create nunjucks image short code
    config.addNunjucksAsyncShortcode("image", imageShortcode);

    return {
        dir: {
            input: "./src",
            output: "./generated"
        }
    };
}
