const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let car = {
  locked: true,
  climateOn: true,
  temperature: 18,
  climateTimeRemaining: 10,
  range: 50,
};

app.post('/lock', (req, res) => {
  car.locked = true;
  res.json(car);
});

app.post('/unlock', (req, res) => {
  car.locked = false;
  res.json(car);
});

app.get('/lockstatus', (req, res) => {
  res.json({ locked: car.locked });
});

app.post('/climatestart', (req, res) => {
  car.climateOn = true;
  res.json(car.climateOn, car.temperature, car.climateTimeRemaining);
});

app.post('/climatestop', (req, res) => {
  car.climateOn = false;
  car.temperature = null;
  car.climateTimeRemaining = null;
  res.json(car.climateOn, car.temperature, car.climateTimeRemaining);
});

app.get('/climatestatus', (req, res) => {
  res.json({ climateOn: car.climateOn, temperature: car.temperature, climateTimeRemaining: car.climateTimeRemaining });
});

app.post('/settemperature', (req, res) => {
  const newTemperature = req.body.temperature;
  if (typeof newTemperature === 'number') {
    car.temperature = newTemperature;
    res.json({ success: true, temperature: car.temperature });
  } else {
    res.status(400).json({ success: false, message: 'Invalid temperature value' });
  }
});

// Add a new endpoint to set the climateTimeRemaining value
app.post('/setClimateTime', (req, res) => {
  const newTime = req.body.climateTimeRemaining;
  if ([10, 20, 30].includes(newTime)) {
    car.climateTimeRemaining = newTime;
    res.json({ success: true, climateTimeRemaining: car.climateTimeRemaining });
  } else {
    res.status(400).json({ success: false, message: 'Invalid climate time value. Allowed values are 10, 20, or 30.' });
  }
});

// Timer for climateTimeRemaining
setInterval(() => {
  if (car.climateOn && car.climateTimeRemaining > 0) {
    car.climateTimeRemaining -= 1;
    if (car.climateTimeRemaining === 0) {
      // Call the climateStop function when the climateTimeRemaining reaches 0
      climateStop();
    }
  }
  //60*1000 for 10 minutes, 60*100 for 1 minute, allows for debugging stop functionality
}, 60 * 100);

function climateStop() {
  car.climateOn = false;
  car.temperature = null;
  car.climateTimeRemaining = null;
}

app.post('/climatestop', (req, res) => {
  climateStop();
  res.json(car);
});

const getRandomRange = () => Math.floor(Math.random() * 121);

app.get('/range', (req, res) => {
  car.range = getRandomRange();
  res.json({ range: car.range });
});

app.post('/setRange', (req, res) => {
  const newRange = req.body.range;
  if (typeof newRange === 'number' && newRange >= 0 && newRange <= 120) {
    car.range = newRange;
    res.json({ success: true, range: car.range });
  } else {
    res.status(400).json({ success: false, message: 'Invalid range value. Allowed values are between 0 and 120.' });
  }
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});

