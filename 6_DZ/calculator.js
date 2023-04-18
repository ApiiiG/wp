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
    const response = await fetch('www.themealdb.com/api/json/v1/1/randomselection.php');
    const json = await response.json();
    const meal1 = json.meals[0];
    const meal2 = json.meals[1];

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