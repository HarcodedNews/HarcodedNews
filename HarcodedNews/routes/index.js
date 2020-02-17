const express = require('express');
const router = express.Router();
const Userpic = require('../models/UserPicture.model.js');
const uploadCloud = require('../config/cloudinary.config');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
