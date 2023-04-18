const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    res.status(400).send('Invalid input. Please enter valid values for height and weight.');
  } else {
    const bmi = calculateBMI(height, weight);
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = { name: data.meas[0].strMeal, thumbnail: data.meal[0].strMealThumb };
        res.send(`
          <h1>BMI Calculator</h1>
          <p>Your BMI is ${bmi.toFixed(1)}</p>
          <h2>Meal Recommendation:</h2>
          <p>${meal.name}</p>
          <img src="${meal.thumbnail}" alt="${meal.name}">
        `);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('An error occurred while fetching data from the Meal DB API.');
      });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

function calculateBMI(height, weight) {
  return weight / ((height / 100) ** 2);
}