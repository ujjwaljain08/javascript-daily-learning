var count=0;
var v1=document.getElementById("inc");
var v2=document.getElementById("dec");
var v3=document.getElementById("reset");
var value=document.getElementById("number")
v1.addEventListener("click",function(){
    count+=1;
    value.innerHTML=count;
     
});
v2.addEventListener("click",function(){
    count-=1;
    value.innerHTML=count;
    
});
v3.addEventListener("click",function(){
    count=0;
    value.innerHTML=count;
});

 

 