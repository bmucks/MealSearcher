const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEL = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');

//Search Meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    //Clear Single Meal
    single_mealEl.innerHTML = '';

    //get search term
    const term = search.value;

    //check for empty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Search Results for '${term}':</h2>`;

                if (data.meals === null) {
                    resultHeading.innerHTML = `<p>There are no search results. Try again! <p>`;
                } else {
                    meals.innerHTML = data.meals.map(meal => `
                    <div class = "meal">
                      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                      <div class= "meal-info" data-mealID = "$(meal.idMeal}">
                        <h3>${meal.strMeal}</h3>

                 </div>
                 </div>
                `
                    )
                        .join('');
                }


            });
        //clear search text
        search.value = '';

    } else {
        alert('Enter Search Term');
    }
    
}


//Event Listeners
submit.addEventListener('submit', searchMeal);