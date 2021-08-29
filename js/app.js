const searchButton = () =>{
  const searchFild = document.getElementById('searchFild');
  const searchText = searchFild.value;
  searchFild.value = '';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => dispaly(data.meals));
}

const dispaly = (meals) =>{
  console.log(meals)
  meals.forEach(meal => {
    console.log(meal);
  const searchid = document.getElementById('searchid');
  const searchdiv = document.createElement('div');
  searchdiv.classList.add('col');
  searchdiv.innerHTML =`
         <div class="card">
           <img src="${meal.strMealThumb}" class="card-img-top w-100 h-25" alt="...">
             <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             </div>
         </div>
  `;
  searchid.appendChild(searchdiv);
  });
}