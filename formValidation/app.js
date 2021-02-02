const form =document.getElementById("form")
const username =document.getElementById("username")
const email =document.getElementById("email")
const password =document.getElementById("password")
const password2 =document.getElementById("password2")

function showError(name,msg){
    const parentElement= name.parentElement;
    parentElement.className="form-control error";
    const small=parentElement.querySelector('small');
    small.innerText="*"+msg
}
function showSuccess(name){
    const parentElement=name.parentElement;
    parentElement.className="form-control success";

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   
     if(username.value ===''){
        showError(username,"Username not valid");
     }else{
         showSuccess(username)
     }

     if(email.value ===''){
        showError(email,"email not valid");
     }else{
         showSuccess(email)
     }

     if(password.value ===''){
        showError(password,"password not valid");
     }else{
         showSuccess(password)
     }

     if(password2.value ===''){
        showError(password2,"Username not valid");
     }else{
         showSuccess(password2)
     }
   

 
})


