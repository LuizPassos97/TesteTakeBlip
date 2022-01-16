const axios = require("axios")

const api = axios.create({
    baseURL: "https://api.github.com/orgs/takenet/repos?per_page=100&type=owner"
})
module.exports = api();