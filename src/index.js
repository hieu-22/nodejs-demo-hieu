// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World! - about <a href="/about">me</a> </h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>Hello World!</h1><p>My name is <b>Hieu</b></p>')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})