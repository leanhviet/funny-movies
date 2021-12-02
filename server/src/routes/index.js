const express = require('express')
const mongoose = require('mongoose')
const router = express()

// Routes
const getVideos = require('./getVideos');
const shareVideo = require('./shareVideo');

// Constants
const uri = 'mongodb://localhost:27017'
const dbName = 'funny-movies-db'

mongoose.connect(`${uri}/${dbName}`)

router.get('/api/videos', getVideos)
router.post('/api/sharevideo', shareVideo)

module.exports = router
