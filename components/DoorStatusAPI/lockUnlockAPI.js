const express = require('express')
const app = express()

let car = {
  locked: true
}

app.post('/lock', (req, res) => {
  car.locked = true
  res.json(car)
})

app.post('/unlock', (req, res) => {
  car.locked = false
  res.json(car)
})

app.get('/lockstatus', (req, res) => {
  res.json({ locked: car.locked });
})

app.listen(3000, () => {
  console.log('API server listening on port 3000')
})
