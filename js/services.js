/* eslint-disable no-unused-vars */
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
let form;

function formRander(){



  form=document.createElement('form');
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
  input1.required;
  fieldset.appendChild(input1);
  input1.setAttribute('type','text');
  input1.setAttribute('id','customername');
  input1.setAttribute('required','text');
  let br1=document.createElement('br');


  let nameLabe2=document.createElement('label');
  fieldset.appendChild(nameLabe2);
  nameLabe2.textContent='Contact';
  nameLabe2.setAttribute('for','customercontact');
  let input2=document.createElement('input');
  fieldset.appendChild(input2);
  input2.setAttribute('type','number');
  input2.setAttribute('id','customercontact');
  input2.setAttribute('required','text');

  let br2=document.createElement('br');


  let nameLabe3=document.createElement('label');
  fieldset.appendChild(nameLabe3);
  nameLabe3.textContent='Description';
  nameLabe3.setAttribute('for','description');
  let input3=document.createElement('textarea');
  fieldset.appendChild(input3);
  // input3.setAttribute("type","text")
  input3.setAttribute('id','description');
  input3.setAttribute('required','text');

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
  saveLs ();
  form.remove();

  // eslint-disable-next-line no-undef
  massage=document.createElement('p');
  // eslint-disable-next-line no-undef
  formSection.appendChild(massage);
  // eslint-disable-next-line no-undef
  massage.textContent=' your request in progress ';

}


/////    Saving To Localstorage



function saveLs (){

  let save=JSON.stringify(array);
  localStorage.setItem('volunteer',save);
}
function getInfo(){

  let data=localStorage.getItem('volunteer');
  let arryObject=JSON.parse( data);

  if(arryObject !== null){

    array=arryObject;

  }
}

getInfo();
