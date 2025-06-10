const client = require("./sanityClient");
const imageUrlBuilder = require("@sanity/image-url");

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

module.exports = urlFor;