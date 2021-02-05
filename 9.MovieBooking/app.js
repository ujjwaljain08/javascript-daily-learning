//const seat = document.querySelectorAll(".seat:not(.occupied)");
const count =document.getElementById("count")
const container = document.querySelector(".container");
const total =document.getElementById("total")
const movieSelet =document.getElementById("movie")
let ticketPrice=movieSelet.value
 
function updateStatement(){
    const selectedSeats=document.querySelectorAll(".row .seat.selected");
     count.innerHTML=selectedSeats.length;
     total.innerHTML=selectedSeats.length*ticketPrice;

}
 
//when we change the movie option:
movieSelet.addEventListener('change',(e)=>{
   ticketPrice= e.target.value;
   updateStatement()
})

container.addEventListener("click",(e)=>{
     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');   
        updateStatement();
     }
    
})