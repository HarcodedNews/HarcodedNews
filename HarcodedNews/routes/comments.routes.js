const express = require('express')
const router = express.Router()
const axios = require('axios')

const axiosApp = axios.create({ baseURL: "https://api.currentsapi.services/v1" })

router.get('/create-comments/:id', (req, res, next) => {
    console.log(req.params.id)
    axiosApp.get(`/search?apiKey=${process.env.apiKey}&id=${req.params.id}`)

        // .then(news => console.log(news.data.news))


        // .then(news => news.data.news.forEach(elm => {
        //     elm.id === req.params.id ? elm.title : null
        // }))


        .then(news => res.render('./comments/create-comments', { news: news.data.news }))
        .catch(err => console.log("Ha habido un error: ", err))
})

module.exports = router