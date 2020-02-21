const express = require('express')
const router = express.Router()
const axios = require('axios')

const User = require('../models/User.model')
const News = require('../models/News.model')

//const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const axios_ = require('axios')

// const isLogged = (req, res, next) => {
//   if (req.isAuthenticated()) return next()
//   return res.status(304).json('/auth/login')
// }

const axiosApi = axios_.create({ baseURL: "https://api.currentsapi.services/v1" })

router.get('/', (req, res) => {
  let response = {}
  axiosApi.get(`/search?apiKey=${process.env.apiKey}`)
    .then(news => {
      response.news = news.data.news
      if (req.user)
      {
        response.user = true

        return User.findById(req.user._id)
          .populate("favNews")
      }
    })
    .then(userAndNews => {
      response.news.forEach(elm => {
        userAndNews.favNews.forEach(elm_ => {
          if (elm.id == elm_.idNew)
          {
            console.log("FAVORITOOOOOO")
            elm.favorite = true
          }
        })
      })
    }).catch(err => err)
    .then(() => res.render('index', response))
    .catch(err => console.log("Ha habido un error: ", err))
})

router.put('/add-favorite?', (req, res) => {
  if (!req.user)
  {
    res.json({ status: "redirect", path: "/auth/login" })
    return
  }
  if (req.user.favNews.includes(req.query.id))
  {
    res.json({ status: "indb" })
    return
  }

  User.findByIdAndUpdate(req.user._id, { $push: { favNews: req.query.id } })
    .then(() => res.status(200).json({ status: "ok" }))
    .catch(err => console.log("Ha ocrurrido un error: ", err))
})

router.delete('/delete-favorite?', (req, res) => {
  if (!req.user)
  {
    res.json({ status: "redirect", path: "/auth/login" })
    return
  }

  News.findOne({ idNew: req.query.id })
    .then(notice => {
      req.user.favNews.splice(req.user.favNews.indexOf(notice._id), 1)

      User.findByIdAndUpdate(req.user._id, { favNews: req.user.favNews })
        .then(user => res.status(200).json({ status: "ok" }))
        .catch(err => console.log(err))
    }).catch(err => err)

})


router.put('/add-news', (req, res) => {

  News.findOne({ idNew: req.body.new.idNew })
    .then(dbnew => {
      if (dbnew)
      {
        res.json({ status: "ko", id: dbnew._id })
        return
      }
      News.create(req.body.new)
        .then(newNew => res.status(200).json({ status: "ok", id: newNew._id }))
        .catch(err => console.log("ha habido un error: ", err))
    })
    .catch(err => console.log("ERROR WEEE: ", err))


})

router.post('/search?', (req, res) => res.redirect(`/search?keywords=${req.body.keywords}`))

router.get('/search?', (req, res) => {
  let response = {}
  axiosApi.get(`/search?keywords=${req.query.keywords}&apiKey=${process.env.apiKey}`)
    .then(news => {
      response.news = news.data.news
      if (req.user)
      {
        response.user = true
        return User.findById(req.user._id)
          .populate("favNews")

      }
    }).then(userAndNews => {
      news.data.news.forEach(elm => {
        userAndNews.favNews.forEach(elm_ => {
          if (elm.id == elm_.idNew)
          {
            elm.favorite = true
          }
        })
      })
    }).catch(err => err)
    .then(() => res.render('index', response))
    .catch(err => res.render('index'))
})


module.exports = router
