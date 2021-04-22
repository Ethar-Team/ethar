'use strict';

function Donation(CategoryType, source, contInfo,desc){
    this.type=CategoryType;
    this.source=source;
    this.contInfo=contInfo;
    this.desc=desc;

    Donation.allItems.push(this);

}

Donation.allItems=[];


// let x= new Donation('food','hjk','dssd','dfj');
// console.log(x);


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

}


function render(){
    let Di=document.createElement('div');
    Di.setAttribute('class','Items');
    secTwo.appendChild(Di);

    let img1=document.createElement('img');
    img1.setAttribute("src",`${img}`);
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



}






