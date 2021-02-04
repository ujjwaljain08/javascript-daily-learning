const quizdata=[
    {
        question:"how old u are ?",
        a:"10",
        b:"20",
        c:"30",
        d:"40",
        correct:"c",
    },
    {
        question:"what is best ?",
        a: "java",
        b:"python",
        c:"js",
        d:"ruby",
        correct:"c",
    },
    {
    question:"which is a part of computer ?",
    a:"apple",
    b:"orange",
    c:"table",
    d:"CPU",
    correct:"d",
    },

];
 const quiz=document.getElementById("quiz");
 const question=document.getElementById("question");
 const allque=document.querySelectorAll(".answer");
 const a_text=document.getElementById("a_text");
 const b_text=document.getElementById("b_text");
 const c_text=document.getElementById("c_text");
 const d_text=document.getElementById("d_text");
 const submitbtn=document.getElementById("submitbtn");


 var score=0;
 var currentquiz=0;

 loadquiz();
  

 function loadquiz(){
     deselect();
     var currentQuizData=quizdata[currentquiz];
    question.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
 }

function getAnswer(){
    let answer=undefined;
    allque.forEach((q)=>{
        if(q.checked){
            answer=q.id;
        }  
    });
    return answer;
   
}
function deselect(){
    allque.forEach((q)=>{
        q.checked=false;
    });
}


 submitbtn.addEventListener("click",()=>{
    const answer=getAnswer();
   
    if(answer){
        if(answer===quizdata[currentquiz].correct){
            score++;
        }
        currentquiz++;
        if(currentquiz<quizdata.length){
            loadquiz();
        }else{
            quiz.innerHTML=`<h2>Your Score Is ${score}/${quizdata.length}</h2>
            <button  onclick="location.reload()">Reload</button>`;
            
        }
       
    }
    
 });

 
