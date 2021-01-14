const hr=document.querySelector(".hr")
const min=document.querySelector(".min")
const sec=document.querySelector(".sec")
const day=document.querySelector(".day")
sec.innerHTML=10
 
 const newYr="1 jan 2022"

 function countDown(){
    const newYrDate=new Date(newYr)
    const currentDate=new Date();

    const seconds=(newYrDate-currentDate)/1000
    day.innerHTML=Math.floor(seconds/3600/24)
    hr.innerHTML=Math.floor(seconds/3600/24)%24;
    min.innerHTML=Math.floor(seconds/3600)%60;
    sec.innerHTML=Math.floor(seconds%60)
    
 

 } 
 
 setInterval(countDown,1000)
 