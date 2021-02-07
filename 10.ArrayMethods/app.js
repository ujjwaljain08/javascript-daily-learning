 

 const main=document.getElementById('main')
 const addUserbtn=document.getElementById('add_user')
 const doubleBtn=document.getElementById('double')
 const showMillionariseBtn=document.getElementById('show_millionarise')
 const sortBtn=document.getElementById('sort')
 const calculateWealthBtn=document.getElementById('calculate_wealth')
 

 let data=[]
  
 //fetch the user
 async function getTheRandomUser(){
  const res=await fetch('https://randomuser.me/api');
  const data=await res.json()
  const user=data.results[0];

  const newUser={
    name:`${user.name.first} ${user.name.last}`,
    money:Math.floor(Math.random()*10000000 )
  }
  addData(newUser)
 }



 function addData(obj){
    data.push(obj)
    console.log(data)
    updateDOM();
 }

 function updateDOM(provideData=data){
    main.innerHTML='<h2><strong>preson</strong>Wealth</h2>'

   provideData.forEach((item)=>{
    const newElement=document.createElement('div')
    newElement.classList.add('person');
    newElement.innerHTML=`<strong>${item.name}</strong>$ ${item.money}`;
    main.appendChild(newElement)
   })
   
 }

 function doubleMoney(){
 data= data.map((item,index)=>{
    return  {...item,money:item.money*2}
  })
  updateDOM()
 }


 function sortData(){
  data.sort((a,b)=>b.money-a.money);
  updateDOM()
 }



 function showMill(){
  data= data.filter((item)=> item.money>=100000)
   updateDOM();
 }

 function calculateWealth(){
   let bb=data.reduce((acc,item)=>(acc+=item.money),0)
   const newEle=document.createElement('div')
   newEle.innerHTML=`<h3>Total Wealth:<strong>$ ${bb}</strong></h3>`
   main.appendChild(newEle)
 }

 addUserbtn.addEventListener('click',getTheRandomUser)
 doubleBtn.addEventListener('click',doubleMoney)
 sortBtn.addEventListener('click',sortData);
 showMillionariseBtn.addEventListener('click',showMill);
 calculateWealthBtn.addEventListener('click',calculateWealth);
 