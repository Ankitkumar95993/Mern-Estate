const express = require('express');

const router = express.Router()

const {signup} = require('../controllers/auth.controller')
const {signin} = require('../controllers/auth.controller')
const {google} = require('../controllers/auth.controller')
const {signOut} = require('../controllers/auth.controller');

router.post("/signup",signup)
router.post('/signin',signin)
router.post('/google',google)
router.get('/signout',signOut);
module.exports = router;