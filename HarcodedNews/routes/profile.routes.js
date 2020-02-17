const express = require('express')
const router = express.Router()
const User = require("../models/User.model");


router.get('/profile', (req, res) => res.render('/auth/profile'))


router.post('/upload-cloud', uploadCloud.single('phototoupload'), (req, res, next) => {
    console.log("Y esto es lo que hace multer cuando colabora con Cloudinary", req.file)

    User.findByIdAndUpdate



//     Picture.create({
//         description: req.body.description,
//         path: req.file.secure_url,
//         name: req.file.originalname
//     })
//         .then(() => res.redirect('/files/gallery'))
//         .catch(err => next(err))
// })