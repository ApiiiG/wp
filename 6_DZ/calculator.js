const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', async (req, res) => {
  try {
    // Fetch two random meals from MealDB API
    const response1 = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const json1 = await response1.json();
    const meal1 = json1.meals[0];

    const response2 = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const json2 = await response2.json();
    const meal2 = json2.meals[0];

    // Extract name and thumbnail of meals
    const meal1Name = meal1.strMeal;
    const meal1Thumbnail = meal1.strMealThumb;
    const meal2Name = meal2.strMeal;
    const meal2Thumbnail = meal2.strMealThumb;

    // Send data to client-side JavaScript
    res.send({
      meal1Name,
      meal1Thumbnail,
      meal2Name,
      meal2Thumbnail,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching meals');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});