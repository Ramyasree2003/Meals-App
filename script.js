document.addEventListener('DOMContentLoaded', function() {
    const addMealBtn = document.getElementById('addMealBtn');
    const searchBtn = document.getElementById('searchBtn');
    const mealList = document.getElementById('mealList');
  
    const meals = [];
  
    addMealBtn.addEventListener('click', function() {
      const mealName = document.getElementById('mealName').value;
      const ingredients = document.getElementById('ingredients').value;
      const instructions = document.getElementById('instructions').value;
  
      const meal = {
        name: mealName,
        ingredients: ingredients,
        instructions: instructions
      };
  
      meals.push(meal);
      displayMeals();
  
      document.getElementById('mealName').value = '';
      document.getElementById('ingredients').value = '';
      document.getElementById('instructions').value = '';
    });
  
    searchBtn.addEventListener('click', function() {
      const searchValue = document.getElementById('search').value.toLowerCase();
      const filteredMeals = meals.filter(function(meal) {
        return meal.name.toLowerCase().includes(searchValue);
      });
  
      displayMeals(filteredMeals);
    });
  
    function displayMeals(mealsArray = meals) {
      mealList.innerHTML = '';
  
      if (mealsArray.length === 0) {
        mealList.innerHTML = '<p>No meals found.</p>';
      } else {
        mealsArray.forEach(function(meal) {
          const mealCard = document.createElement('div');
          mealCard.classList.add('card', 'mb-2');
  
          const mealCardBody = document.createElement('div');
          mealCardBody.classList.add('card-body');
  
          const mealName = document.createElement('h5');
          mealName.classList.add('card-title');
          mealName.textContent = meal.name;
  
          const ingredients = document.createElement('p');
          ingredients.classList.add('card-text');
          ingredients.textContent = 'Ingredients: ' + meal.ingredients;
  
          const instructions = document.createElement('p');
          instructions.classList.add('card-text');
          instructions.textContent = 'Instructions: ' + meal.instructions;
  
          mealCardBody.appendChild(mealName);
          mealCardBody.appendChild(ingredients);
          mealCardBody.appendChild(instructions);
  
          mealCard.appendChild(mealCardBody);
          mealList.appendChild(mealCard);
        });
      }
    }
  });