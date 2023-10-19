let displayedMeals = []; // Store the currently displayed meals.

const searchAllData = () => {
    const inputField = document.getElementById('search-field');
    const inputValue = inputField.value;
    // console.log(inputValue);

    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            displayedMeals = data.meals.slice(0, 6); // Display the first 6 items from the search results.
            showMealsData(displayedMeals);
            showAllItems = data.meals;
        })
        .catch(error => console.error(error));
}

const showMealsData = meals => {
    const divContainer = document.getElementById('container');
    divContainer.innerHTML = "";
    console.log(meals)
    meals.forEach(meal => {
        console.log(meal);

        const { strMealThumb, strMeal, strInstructions, strTags } = meal;
        const div = document.createElement('div');

        div.innerHTML = `
        <div class="card mb-3 container mx-auto">
            <div class="row">
                <div class="col-md-6">
                <img src="${strMealThumb}" class="img-fluid rounded-start" alt="${strMeal}">
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title">${strMeal}</h5>
                    <p class="card-text">${strInstructions.slice(0,100)}</p>
                    <p class="card-text"><small class="text-muted">Tags: ${strTags}</small></p>
                </div>
                </div>
            </div>
        </div>
        `;
        divContainer.appendChild(div);
    });
};

const showAllDataTogether = () => {
    // Display all the currently displayed meals (6 items).
    showMealsData(showAllItems);
}

// Initially, you may want to show some default data or an empty list.
// To do that, you can call searchAllData() with an empty input initially.
searchAllData();