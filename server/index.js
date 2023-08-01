require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT

app.post('valheim', (req, res) => {
  // create valheim server
  res.status(200).send()
})

app.delete('valheim', (req, res) => {
  // stop server
  res.status(200).send()
})

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})