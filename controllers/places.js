const express = require('express')
const router = require('express').Router()
const app = express()
// GET /places
app.get('/', (req, res) => {
  res.render('places/index')
})

module.exports = router