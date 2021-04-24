'use sttict ';


/////     Function Construction



let array=[];
function AskForHelp (names,countatNumber,description){

  this.names=names;
  this.countatNumber=countatNumber;
  this.description=description;
  array.push(this);
  saveLs ();
}




let arrayOfServices=[];
function Servies (name,paragraph){
  this.name=name;
  this.paragraph=paragraph;
  arrayOfServices.push(this);

}

let building= new Servies('building','Para1');
let teaching= new Servies('teaching','para2');
let carpentry= new Servies('carpenting','para3');
let plumbing=new Servies('plumbing','para4');
let painting=new Servies('painting','para5');
let electric=new Servies('electric','para6');





/////    Rendering Functions


const cards=document.getElementById('right');
const container=document.getElementById('left');
let formSection=document.createElement('section');

let index;
cards.addEventListener('click',renderform);

function renderform (event){


  let category =event.target.id;
  for (let i = 0; i < arrayOfServices.length; i++) {

    if(category===arrayOfServices[i].name){

      index=i;
      rander ();
      break;
    }

  }




  function rander () {

    formSection.remove();

    formSection=document.createElement('section');
    formSection.setAttribute('id',arrayOfServices[index].name);
    container.appendChild(formSection);


    let title=document.createElement('h2');
    formSection.appendChild(title);
    title.textContent=arrayOfServices[index].name.toUpperCase();
    let paragraph1=document.createElement('p');
    formSection.appendChild(paragraph1);
    paragraph1.textContent=arrayOfServices[index].paragraph;


    formRander();

  }




}

function formRander(){



  let form=document.createElement('form');
  form.setAttribute('id','askForm');
  formSection.appendChild(form);
  let fieldset=document.createElement('fieldset');
  form.appendChild(fieldset);

  let legend=document.createElement('legend');
  fieldset.appendChild(legend);
  legend.textContent='Ask For Help';

  let nameLabel=document.createElement('label');
  fieldset.appendChild(nameLabel);
  nameLabel.textContent='Name';
  nameLabel.setAttribute('for','customername');
  let input1=document.createElement('input');
  fieldset.appendChild(input1);
  input1.setAttribute('type','text');
  input1.setAttribute('id','customername');
  let br1=document.createElement('br');


  let nameLabe2=document.createElement('label');
  fieldset.appendChild(nameLabe2);
  nameLabe2.textContent='Contact';
  nameLabe2.setAttribute('for','customercontact');
  let input2=document.createElement('input');
  fieldset.appendChild(input2);
  input2.setAttribute('type','text');
  input2.setAttribute('id','customercontact');
  let br2=document.createElement('br');


  let nameLabe3=document.createElement('label');
  fieldset.appendChild(nameLabe3);
  nameLabe3.textContent='Description';
  nameLabe3.setAttribute('for','description');
  let input3=document.createElement('textarea');
  fieldset.appendChild(input3);
  // input3.setAttribute("type","text")
  input3.setAttribute('id','description');
  let br3=document.createElement('br');

  let submit=document.createElement('input');
  fieldset.appendChild(submit);
  submit.setAttribute('type','submit');
  submit.setAttribute('value', 'Submit');

}



/////    Submit Form Function


container.addEventListener('submit',formBox);

function formBox (event){

  event.preventDefault();


  let newName=event.target.customername.value;
  let newContact=event.target.customercontact.value;
  let newTime=event.target.description.value;

  let Newhelp= new AskForHelp(newName,newContact,newTime);
  container.removeEventListener('submit',formBox);
}


/////    Saving To Localstorage



function saveLs (){

  let save=JSON.stringify(array);
  localStorage.setItem('volunteer',save);
}

/*join us  project from here*/


/* eslint-disable no-unused-vars */
//'use strict';
let but2;
let formJoin;
let but3 ;
let divDiv;

//let sectionOne=document.getElementById('sec-one');
let sectionTwo=document.getElementById('sectionTwo2');
function renderOfJoin(){
  divDiv = document.createElement('div');
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
  lab13.textContent='Contact Number';
  let inp13 =document.createElement('input');
  inp13.setAttribute('id','inp13');
  inp13.setAttribute('type','number');
  inp13.setAttribute('required','text');
  field.appendChild(inp13);

  but2 =document.createElement('button');
  but2.setAttribute('type','submit');
  but2.setAttribute('id','submitAndFinish');
  but2.textContent='submit';
  field.appendChild(but2);
  formJoin.addEventListener('submit',handleSubmit);
  //but2.addEventListener('submit',handleSubmit);


  but3 =document.createElement('button');
  but3.setAttribute('type','click');
  but3.setAttribute('id','EXit');
  but3.textContent='close';
  field.appendChild(but3);
  but3.addEventListener('click',removejoin);

}

function removejoin(event) {
  event.preventDefault();
  formJoin.remove();
  but.addEventListener('click',callrenderOfJoin);
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








