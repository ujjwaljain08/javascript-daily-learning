 

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

function checkRequired(input){
    input.forEach((val)=>{
        if(val.value===''){
            showError(val,`${val.id.toUpperCase()} Not Valid`)
        }else{
            showSuccess(val)
        }
    })
}

function checkLength(input,num){
    if(input.value.length<num){
        showError(input,'Must be 3 Character')
    }
}

function checkPassword(password,password2,num){
    if(password.length<num){
            showError(password,"Not Valid length")
    }else if(password.value!==password2.value){
        showError(password2,'password not Match')
    }else{
        showSuccess(password);
        showSuccess(password2);
    }

    
}
function checkEmail(email){
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        showSuccess(email)
    }else{
        showError(email,"Not a valid Email")
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
   
   /*
    method 1
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
   
*/
//Method 2:
checkRequired([username,email,password,password2])
checkLength(username,3);
checkEmail(email)
checkLength(password,3);
checkPassword(password,confirm,3)

})


