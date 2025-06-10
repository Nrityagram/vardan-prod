const createClient = require("@sanity/client")

const client = createClient({
    projectId: 'a81875ul',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03',
})

module.exports = client;