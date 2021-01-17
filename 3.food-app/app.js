const searchForm=document.querySelector("form")
const  searchResultDiv=document.querySelector(".search-result")
const container=document.querySelector(".container")
const APP_ID="884343c5";
const APP_KEY="9e98853b5dd89825f90779f797c2b08f";
const baseURL=`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
let searchQurey="";
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    searchQurey=e.target.querySelector("input").value;
    fetchAPI();

})
async function fetchAPI(){
    const baseURL=`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response=await fetch(baseURL)
    const data=await response.json();
    console.log(data.hits)
    generateHtml(data.hits);
     
    

}

async function generateHtml(results){
    let  generatedHTML='';
    results.map(result =>{
        generatedHTML+=
        `
        <div class="item">
                    <img src="${result.recipe.image}" alt="">
                    <div class="flex-container">
                        <h1 class="title">${result.recipe.label}</h1>
                        <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a>
                    </div>
                    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
                    <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p>
                    <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
                </div>
        `
    })
    searchResultDiv.innerHTML=generatedHTML
}

