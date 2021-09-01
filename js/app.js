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
  meals.forEach(meal => {
  const searchid = document.getElementById('searchid');
  const searchdiv = document.createElement('div');
  searchdiv.classList.add('col');
  searchdiv.innerHTML =`
         <div onclick="dispalyid(${meal.idMeal})" class="card">
           <img src="${meal.strMealThumb}" class="card-img-top w-100 h-25" alt="...">
             <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
             </div>
         </div>
  `;
  searchid.appendChild(searchdiv);
  });
}

const dispalyid = (mealid) =>{
  // console.log(meal);
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
  fetch(url)
  .then(res => res.json())
  .then(data => mealdetail(data.meals[0]));
}

const mealdetail = (meal) =>{
  const divcard = document.getElementById('divcard');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML =`
  <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Youtube link</a>
        </div>
  </div>
  `;
  divcard.appendChild(div);
}