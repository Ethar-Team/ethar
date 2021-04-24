'use strict';


let divIdNumber;


function Donation(CategoryType, source, contInfo,desc){
  this.type=CategoryType;
  this.source=source;
  this.contInfo=contInfo;
  this.desc=desc;
  this.value=0;

  Donation.allItems.push(this);

}

Donation.allItems=[];

function saveToLs(){

  let arrStr = JSON.stringify( Donation.allItems);
  localStorage.setItem('Itemsaved', arrStr);

}

function gettingOrderFromLs(){

  let data = localStorage.getItem('Itemsaved');
  //console.log(data);
  let order = JSON.parse(data);
  //console.log(order);
  //order[0].value++;
  if(order !== null){
    Donation.allItems = order;
  }
  console.log(Donation.allItems);

  renderls();

}

let formItem= document.getElementById('form1');
let secTwo= document.getElementById('display-sec');
let secForm2=document.getElementById('sec-form2');
formItem.addEventListener('submit', handleSubmit);
let img;
let catg;
let contus;
let description;

function handleSubmit(event){
  event.preventDefault();
  //console.log(event);
  catg = event.target.category.value;
  // //console.log(cat);
  img = event.target.imgurl.value;
  contus = event.target.contus.value;
  description = event.target.description.value;

  new Donation(catg,img,contus,description);

  console.log(Donation.allItems);
  render();
  saveToLs();


}

let but=document.createElement('button');

let counter=0;
function render(){

  let Di=document.createElement('div');
  Di.setAttribute('class','Items');
  Di.setAttribute('id',`Item${counter}`);

  secTwo.appendChild(Di);

  let img1=document.createElement('img');
  img1.setAttribute('src',`${img}`);
  Di.appendChild(img1);

  let catg1=document.createElement('h4');
  Di.appendChild(catg1);
  catg1.textContent=catg;

  let desc=document.createElement('p');
  Di.appendChild(desc);
  desc.textContent=description;


  let contact=document.createElement('p');
  Di.appendChild(contact);
  contact.textContent=contus;

  but=document.createElement('button');
  but.setAttribute('id',`A${counter}`);
  counter++;
  Di.appendChild(but);
  but.textContent='Book It!';
  but.addEventListener('click',handlebutton);



}


//but.setAttribute("id","butt");
function renderls(){

  let but=document.createElement('button');
  for(let i=0;i<Donation.allItems.length;i++){
    let Di=document.createElement('div');
    Di.setAttribute('class','Items');

    Di.setAttribute('id',`Item${counter}`);
    if(counter%2===0){
      Di.setAttribute('data-aos','fade-down-left');

    }else{
      Di.setAttribute('data-aos','fade-down-right');

    }


    secTwo.appendChild(Di);

    let img1=document.createElement('img');
    img1.setAttribute('src',`${Donation.allItems[i].source}`);
    Di.appendChild(img1);

    let catg1=document.createElement('h4');
    Di.appendChild(catg1);
    catg1.textContent=`${Donation.allItems[i].type}`;

    let desc=document.createElement('p');
    Di.appendChild(desc);
    desc.textContent=`${Donation.allItems[i].desc}`;


    let contact=document.createElement('p');
    Di.appendChild(contact);
    contact.textContent=`${Donation.allItems[i].contInfo}`;

    if(Donation.allItems[i].value===0){
      but=document.createElement('button');
      but.setAttribute('id',`A${counter}`);
      Di.appendChild(but);
      but.textContent='Book It!';
    }else{
      let unavalible=document.createElement('img');
      unavalible.setAttribute('src','/images/download.png');
      unavalible.setAttribute('class','absImg');
      let div=document.getElementById(`Item${i}`);
      div.appendChild(unavalible);
    }
    counter++;
    but.addEventListener('click',handlebutton);




  }

}
let formForItem=document.createElement('form');
let submitBook;

function itemForm(){
  formForItem.remove();
  formForItem=document.createElement('form');
  formForItem.setAttribute('id','form2');
  secForm2.appendChild(formForItem);
  let fieldset=document.createElement('fieldset');
  formForItem.appendChild(fieldset);

  let legend=document.createElement('legend');
  fieldset.appendChild(legend);
  legend.textContent='Enter Your Info :';

  let nameLabel=document.createElement('label');
  fieldset.appendChild(nameLabel);
  nameLabel.textContent='Name';
  nameLabel.setAttribute('for','customername');
  let input1=document.createElement('input');
  input1.setAttribute('type','text');
  input1.setAttribute('id','customername');
  input1.setAttribute('required','text');
  fieldset.appendChild(input1);

  let nameLabe2=document.createElement('label');
  fieldset.appendChild(nameLabe2);
  nameLabe2.textContent='Contact';
  nameLabe2.setAttribute('for','customercontact');
  let input2=document.createElement('input');
  fieldset.appendChild(input2);
  input2.setAttribute('type','text');
  input2.setAttribute('id','customercontact');
  input2.setAttribute('required','text');
  submitBook=document.createElement('button');
  submitBook.setAttribute('id','submitBook');
  submitBook.setAttribute('type','submit');
  submitBook.textContent='Submit';
  fieldset.appendChild(submitBook);
  formForItem.addEventListener('submit',handleBook);

}

function Custinfo(name,contact,idOfItem){
  this.name=name;
  this.contact=contact;
  this.idOfItem=idOfItem;
  Custinfo.allItems.push(this);
}
Custinfo.allItems=[];

function saveToLsCust(){

  let arrStr = JSON.stringify( Custinfo.allItems);
  localStorage.setItem('CustInfo', arrStr);
}

function gettingOrderFromLs1(){
  let data = localStorage.getItem('CustInfo');
  let order = JSON.parse(data);
  if(order !== null){
    Custinfo.allItems = order;
  }
  console.log(Custinfo.allItems);
}

function handleBook(event){
  event.preventDefault();
  unPic(divIdNumber);
  console.log(event);
  console.log(divIdNumber);
  let userName=event.target.customername.value;
  let contactInfo=event.target.customercontact.value;
  new Custinfo(userName,contactInfo,divIdNumber);
  saveToLsCust();
  formForItem.remove();
}

function handlebutton(event){
  event.preventDefault();
  divIdNumber= event.target.id;
  let divIdName=divIdNumber;
  divIdNumber=getNumberFromString(divIdNumber);

  if(Donation.allItems[divIdNumber].value===0){
    itemForm();
    Donation.allItems[divIdNumber].value++;
    let myobj = document.getElementById(divIdName);
    myobj.remove();
    saveToLs();
  }
}

gettingOrderFromLs();

function getNumberFromString(divIdNumber)
{
  let text=divIdNumber;
  text=text.replace(/\D/g,'');
  //console.log(text);
  return text;
}

function unPic(indexOf){
  let unavalible=document.createElement('img');
  unavalible.setAttribute('src','/images/download.png');
  unavalible.setAttribute('class','absImg');
  let div=document.getElementById(`Item${indexOf}`);
  div.appendChild(unavalible);
}

gettingOrderFromLs1();
