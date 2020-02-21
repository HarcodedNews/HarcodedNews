const express = require('express')
const router = express.Router()
const axios = require('axios')
const News = require('../models/News.model')
const Comment = require('../models/Comment.model')

router.get('/create-comments/:id', (req, res) => {
    News.findById({ _id: req.params.id })
        .populate('comments')
        .then(notice => {
            if (req.user) {
                notice.user = true
                req.user.favNews.forEach(elm => {
                    if (elm._id == req.params.id) {
                        notice.favorite = true
                    }
                })
            }
            if (!notice.image.includes('https://')) {
                notice.image = undefined
            }
            return notice
        })
        .then(notice => res.render('comments/create-comments', notice))
        .catch(err => res.render('error'))
})

router.post('/create-comments/comments/', (req, res) => {
    Comment.create({
        comment: req.body.commentInfo,
        iauthorName: req.user.username,
        idNews: req.body.id
    }).then(createdComment => {
        News.findByIdAndUpdate(req.body.id, { $push: { comments: createdComment._id } })
            .then(updated => res.json({ status: "ok", path: `/comments/create-comments/${updated._id}` }))
            .catch(err => console.log("este es el error", err))
    })
        .catch(err => err)
})


module.exports = router