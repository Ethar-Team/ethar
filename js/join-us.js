/* eslint-disable no-unused-vars */
'use strict';
let but2;
let formJoin;
let but3 ;

//let sectionOne=document.getElementById('sec-one');
let sectionTwo=document.getElementById('sec-two');
function renderOfJoin(){
  let divDiv = document.createElement('div');
  sectionTwo.appendChild(divDiv);

  formJoin =document.createElement('Form');
  formJoin.setAttribute('id','form1');
  divDiv.appendChild(formJoin);

  let field =document.createElement('fieldset');
  formJoin.appendChild(field);

  let lega = document.createElement('legend');
  field.appendChild(lega);
  lega.textContent='join zone';

  let lab11 =document.createElement('label');
  lab11.setAttribute('for','inp11');
  field.appendChild(lab11);
  lab11.textContent='Name';
  let inp11 =document.createElement('input');
  inp11.setAttribute('id','inp11') ;
  inp11.setAttribute('type','text');
  inp11.setAttribute('required','text');
  
  field.appendChild(inp11);

  let lab12 =document.createElement('label');
  lab12.setAttribute('for','inp12');
  field.appendChild(lab12);
  lab12.textContent='Job';
  let inp12 =document.createElement('input');
  inp12.setAttribute('id','inp12');
  inp12.setAttribute('type','text');
  inp12.setAttribute('required','text');
  field.appendChild(inp12);

  let lab13 =document.createElement('label');
  lab13.setAttribute('for','inp13');
  field.appendChild(lab13);
  lab13.textContent='Contact Numper';
  let inp13 =document.createElement('input');
  inp13.setAttribute('id','inp13');
  inp13.setAttribute('type','text');
  inp13.setAttribute('required','text');
  field.appendChild(inp13);

  but2 =document.createElement('button');
  but2.setAttribute('type','submit');
  but2.setAttribute('id','submitAndFinish');
  field.appendChild(but2);
  formJoin.addEventListener('submit',handleSubmit);
  //but2.addEventListener('submit',handleSubmit);


  but3 =document.createElement('button');
  but3.setAttribute('type','click');
  but3.setAttribute('id','EXit');
  but3.textContent='close';
  field.appendChild(but3);
  formJoin.addEventListener('click',removejoin);
  //formJoin.removeEventListener('click',removejoin);

}

function removejoin(event) {
  formJoin.remove;
  
}

function JoinUs(name,job,ContactNumber) {
  this.name =name;
  this.job =job;
  this.ContactNumberr=ContactNumber;
  JoinUs.FormArray.push(this);
}
JoinUs.FormArray=[];



function gittingWorkerFromLocalStorage() {
  let data = localStorage.getItem('workerform');
  let order= JSON.parse(data);
  if (order !==null){
    JoinUs.FormArray=order;
  }
  console.log(JoinUs.FormArray);

}
let but=document.getElementById('joinHere');
//sectionTwo.appendChild(but);
but.addEventListener('click',callrenderOfJoin);

function callrenderOfJoin(event){
  event.preventDefault();
  renderOfJoin();

  //console.log('joinhere'+event);
  but.removeEventListener('click',callrenderOfJoin);
}

let name1;
let profession;
let contnum ;

function handleSubmit(event){
  event.preventDefault();
  console.log(event);

  name1=event.target.inp11.value;
  //console.log(name1);
  profession=event.target.inp12.value;
  contnum=event.target.inp13.value;

  new JoinUs(name1,profession,contnum);

  formJoin.removeEventListener('submit',handleSubmit);
  //  formJoin.removeEventListener('submit',callrenderOfJoin);
  saveworker();
  console.log(JoinUs.FormArray);
}



function saveworker() {
  let arrayOfWrker=JSON.stringify(JoinUs.FormArray);
  localStorage.setItem('workerform',arrayOfWrker);
  formJoin.remove();
  but.addEventListener('click',callrenderOfJoin);
}
gittingWorkerFromLocalStorage();
