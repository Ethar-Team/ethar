'use strict';



function Donation(CategoryType, source, contInfo,desc){
  this.type=CategoryType;
  this.source=source;
  this.contInfo=contInfo;
  this.desc=desc;
  this.value=0;

  Donation.allItems.push(this);

}

Donation.allItems=[];


// let x= new Donation('food','hjk','dssd','dfj');
// console.log(x);


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





//let x= new Donation('a','a','a','a');
//x.getCheck();
let but=document.createElement('button');

let counter=0;
function render(){

  let Di=document.createElement('div');
  Di.setAttribute('class','Items');
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

    but=document.createElement('button');
    but.setAttribute('id',`A${counter}`);
    counter++;
    Di.appendChild(but);
    but.textContent='Book It!';
    but.addEventListener('click',handlebutton);


  }

}

//but.addEventListener('click',handlebutton);

function handlebutton(event){
  event.preventDefault();

  let x= event.target.id;
  x=getNumberFromString(x);


  
  //console.log(x);
  if(Donation.allItems[x].value===0){
    alert('you booked it');
    // console.log(Donation.allItems[x].value);
    Donation.allItems[x].value++;
    //console.log(Donation.allItems[x].value);

  }
  else{
    alert('this was taken');
  }
  //console.log(Donation.allItems[x].value);




}


gettingOrderFromLs();

function getNumberFromString(x)
{
  let text=x;
  text=text.replace(/\D/g,'');
  console.log(text);
  return text;

}







