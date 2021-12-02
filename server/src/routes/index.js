const express = require('express')
const mongoose = require('mongoose')
const router = express()

// Routes
const getVideos = require('./getVideos');
const shareVideo = require('./shareVideo');
const { register, login } = require('./auth');

// Constants
const uri = 'mongodb://localhost:27017'
const dbName = 'funny-movies-db'

mongoose.connect(`${uri}/${dbName}`)

router.get('/api/videos', getVideos)
router.post('/api/sharevideo', shareVideo)
router.post('/api/auth/register', register)
router.post('/api/auth/login', login)

module.exports = router
