const express = require('express')
const router = express.Router()
const axios = require('axios')

const axiosApp = axios.create({ baseURL: "https://api.currentsapi.services/v1" })

router.get('/', (req, res, next) => {
  axiosApp.get(`/search?apiKey=${process.env.apiKey}`)
    .then(news => res.render('index', { news: news.data.news }))
    .catch(err => console.log("Ha habido un error: ", err))
});

module.exports = router;
