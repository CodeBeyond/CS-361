const express = require('express');
const app = express();

app.get('/recipes', (req, res) => {
  const recipes = [
    {
        "recipeID": "1",
        "name": "Whole chicken",
        "time": "3 hrs",
        "temp": "350 F",
        "ingredients": "whole chicken, SPG rub, olive oil",
        "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  nisi ut aliquip ex ea commodo consequat.",
    },
    {
        "recipeID": "2",
        "name": "Beef Brisket",
        "time": "13 hrs",
        "temp": "225 F",
        "ingredients": "beef brisket, SPG rub, Worcestershire sauce",
        "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  nisi ut aliquip ex ea commodo consequat.",
    },
    {
        "recipeID": "3",
        "name": "Chicken leg lollipops",
        "time": "1.5 hrs",
        "temp": "400 F",
        "ingredients": "chicken drumsticks, bbq sauce, honey, SPG rub, hot bbq rub",
        "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  nisi ut aliquip ex ea commodo consequat.",
    },
    {
        "recipeID": "4",
        "name": "Teriyaki flank steak",
        "time": "1 hr",
        "temp": "400 F",
        "ingredients": "flank steak, ter",
        "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  nisi ut aliquip ex ea commodo consequat.",
    },
    {
        "recipeID": "5",
        "name": "Pulled pork",
        "time": "13 hrs",
        "temp": "225 F",
        "ingredients": "pork shoulder, SPG rub, mustard",
        "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  nisi ut aliquip ex ea commodo consequat.",
    },
    {
        "recipeID": "6",
        "name": "Beer brats",
        "time": "2 hrs",
        "temp": "325 F",
        "ingredients": "brats, pilsner beer, onions",
        "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  nisi ut aliquip ex ea commodo consequat.",
    },
    {
        "recipeID": "7",
        "name": "Dino ribs",
        "time": "6 hrs",
        "temp": "225 F",
        "ingredients": "beef plate ribs, SPG rub, olive oil",
        "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  nisi ut aliquip ex ea commodo consequat.",
    }
];
  console.log('Received request. Responding with recipes...');
  res.json({ recipes });
});

app.get('/tips', (req, res) => {
  const tips = [
    {
        "tipID": "1",
        "protein": "Chicken",
        "tipText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "tipID": "2",
        "protein": "Beef",
        "tipText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "tipID": "3",
        "protein": "Lamb",
        "tipText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "tipID": "4",
        "protein": "Beef",
        "tipText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "tipID": "5",
        "protein": "Pork",
        "tipText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "tipID": "6",
        "protein": "Fish",
        "tipText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }
];
  console.log('Received request. Responding with tips...');
  res.json({ tips });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});