'use strict';


let divIdNumber;
let divIdName;
let Di;





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
  let order = JSON.parse(data);
  if(order !== null){
    Donation.allItems = order;
  }

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
  catg = event.target.category.value;
  img = event.target.imgurl.value;
  contus = event.target.contus.value;
  description = event.target.description.value;

  new Donation(catg,img,contus,description);

  render();
  saveToLs();


}

let but=document.createElement('button');

let counter=0;
function render(){

  Di=document.createElement('div');
  Di.setAttribute('class','items');
  Di.setAttribute('id',`item${counter}`);

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
  but.setAttribute('id',`btn${counter}`);
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
    Di.setAttribute('class','items');

    Di.setAttribute('id',`item${counter}`);
    Di.setAttribute('data-aos','zoom-in');


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
      but.setAttribute('id',`btn${counter}`);
      Di.appendChild(but);
      but.textContent='Book It!';
    }else{
      let unavalible=document.createElement('img');
      unavalible.setAttribute('src','/images/download.png');
      unavalible.setAttribute('class','absImg');
      let div=document.getElementById(`item${i}`);
      div.appendChild(unavalible);
    }
    counter++;
    but.addEventListener('click',handlebutton);




  }

}
let formForItem=document.createElement('form');
let submitBook;
let fieldset;
function itemForm(){
  formForItem.remove();
  formForItem=document.createElement('form');
  formForItem.setAttribute('id','form2');
  secForm2.appendChild(formForItem);
  let h3=document.createElement('h3');
  h3.textContent='Coustmer Information';
  formForItem.appendChild(h3);
  //fieldset=document.createElement('fieldset');
  //formForItem.appendChild(fieldset);

  //let legend=document.createElement('legend');
  //fieldset.appendChild(legend);
  //legend.textContent='Enter Your Info :';

  let nameLabel=document.createElement('label');
  formForItem.appendChild(nameLabel);
  nameLabel.textContent='Name';
  nameLabel.setAttribute('for','customername');
  let input1=document.createElement('input');
  input1.setAttribute('type','text');
  input1.setAttribute('id','customername');
  input1.setAttribute('required','text');
  formForItem.appendChild(input1);

  let nameLabe2=document.createElement('label');
  formForItem.appendChild(nameLabe2);
  nameLabe2.textContent='Contact';
  nameLabe2.setAttribute('for','customercontact');
  let input2=document.createElement('input');
  formForItem.appendChild(input2);
  input2.setAttribute('type','text');
  input2.setAttribute('id','customercontact');
  input2.setAttribute('required','text');
  submitBook=document.createElement('button');
  submitBook.setAttribute('id','submitBook');
  submitBook.setAttribute('type','submit');
  submitBook.textContent='Submit';
  formForItem.appendChild(submitBook);
  let cancelBtn=document.createElement('button');
  cancelBtn.setAttribute('onClick','cancelForm()');
  cancelBtn.textContent='Cancel';
  formForItem.appendChild(cancelBtn);
  formForItem.addEventListener('submit',handleBook);

}


function handleBook(event){
  event.preventDefault();
  
  unPic(divIdNumber);
  let userName=event.target.customername.value;
  let contactInfo=event.target.customercontact.value;
  new Custinfo(userName,contactInfo,divIdNumber);
  saveToLsCust();
  closeForm();
  formForItem.remove();
}
function handlebutton(event){
  event.preventDefault();
  openForm();
  divIdNumber= event.target.id;
  divIdName=divIdNumber;
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
// Helper Function to extract the number from any string
function getNumberFromString(divIdNumber){
  let text=divIdNumber;
  text=text.replace(/\D/g,'');
  return text;
}

function unPic(indexOf){
  let unavalible=document.createElement('img');
  unavalible.setAttribute('src','/images/download.png');
  unavalible.setAttribute('class','absImg');
  let div=document.getElementById(`item${indexOf}`);
  div.appendChild(unavalible);
}

function cancelForm(){
  closeForm();
  formForItem.remove();
  repeatBookIt(divIdNumber);
}
gettingOrderFromLs1();

function repeatBookIt(divIdNumber) {
  but=document.createElement('button');
  but.setAttribute('id',`btn${divIdNumber}`);
  let theDiv=document.getElementById(`item${divIdNumber}`);
  theDiv.appendChild(but);
  but.textContent='Book It!';
  but.addEventListener('click',handlebutton);
  Donation.allItems[divIdNumber].value--;
  saveToLs();
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
}

function openForm() {
  document.getElementById("sec-form2").style.display = "block";
 }
 function closeForm() {
  document.getElementById("sec-form2").style.display = "none";
}
