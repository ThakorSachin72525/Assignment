
const express = require('express')

// Create an Express application
const app = express()

// Initialize the counter
let counter = 0


// API endpoint to get the counter value
app.get('/', (req, res) => {
  res.send({counter})
})

// API endpoint to increment the counter
app.get('/increment', (req, res) => {
  counter++
  res.send({counter})
})

// API endpoint to decrement the counter
app.get('/decrement', (req, res) => {
  counter--
  res.json({counter})
})

// Start the server
app.listen(4000, () => {
  console.log("Server is running on port 4000")
})