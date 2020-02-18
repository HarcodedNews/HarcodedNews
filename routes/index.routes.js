const express = require('express')
const router = express.Router()
const axios = require('axios')

const User = require('../models/User.model')

const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const axios_ = require('axios')

const axiosApi = axios_.create({ baseURL: "https://api.currentsapi.services/v1" })

router.get('/', (req, res, next) => {
  axiosApi.get(`/search?apiKey=${process.env.apiKey}`)
    .then(news => {
      if (req.user)
      {
        req.user.favNews.forEach(elm => {
          news.data.news.forEach(elm_ => {
            if (elm === elm_.id) elm.favorite = true
          })
        })
      }
      res.render('index', { news: news.data.news })
    })
    .catch(err => console.log("Ha habido un error: ", err))
})

router.put('/add-favorite?', ensureLoggedIn('/auth/login'), (req, res) => {

  req.user.favNews.forEach(elm => {
    if (elm === req.query.id)
    {
      res.json('')
      return
    }
  })

  User.findByIdAndUpdate(req.user._id, { $push: { favNews: req.query.id } })
    .then(updated => res.status(200).json(updated))
    .catch(err => console.log("Ha ocrurrido un error: ", err))
})

router.delete('/delete-favorite?', ensureLoggedIn('/auth/login'), (req, res) => {

  req.user.favNews.forEach((elm, idx) => {
    if (elm === req.query.id)
    {
      req.user.favNews.splice(idx, 1)

      User.findByIdAndUpdate(req.user._id, { favNews: req.user.favNews })
        .then(user => res.status(200).json("okay"))
        .catch(err => console.log(err))
      return
    }
  })
})

// router.get('/', (req, res, next) => { })
// router.post('addNew', (req, res) => {
//   const { id, title, description, url, image,} = req.body
// })


module.exports = router
