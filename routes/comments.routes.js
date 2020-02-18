const express = require('express')
const router = express.Router()
const axios = require('axios')
const News = require('../models/News.model')
const axiosApp = axios.create({ baseURL: "https://api.currentsapi.services/v1" })

router.get('/create-comments/:id', (req, res, next) => {
    console.log(req.params.id)
    const paramsId = req.params.id

    // if ()


    axiosApp.get(`/search?apiKey=${process.env.apiKey}`)
        .then(news => {






            //////////////////------------------------------------/////////////////////////////////////

            // const matchingNew = new.filter(news => news.id != paramsId)
            // matchingNew[0]

            //////////////////------------------------------------/////////////////////////////////////












            console.log(news)
            for (let i = 0; i < news.data.news.length; i++) {
                //console.log(news.data.news[i].paramsId)
                if (news.data.news[i].id == paramsId) {
                    console.log(`Entrando: ${paramsId}`)
                    const id = news.data.news[i].id
                    const title = news.data.news[i].title
                    const description = news.data.news[i].description
                    const url = news.data.news[i].url
                    const image = news.data.news[i].image
                    // const { id, title, description, url, image } = news.data.news[i]

                    //upsert: Update and insert (Inserta un nuevo objeto en BD si no lo encuentra.
                    News.findOneAndUpdate({ id: paramsId }, { id, title, description, url, image }, { upsert: true, new: true })
                        .then(() => {
                            res.render('comments/create-comments', { id, title, description, url, image })
                            console.log("entra en base de datos")
                        })
                        .catch(err => console.log(err))
                }

            }

        })
        .catch(err => console.log("Ha habido un error: ", err))
})

module.exports = router