/* eslint-disable no-trailing-spaces */
'use strict';
let container =document.getElementById('secone');
let showEl = document.getElementById('sectwo');
let showText=document.getElementById('secthree');

function About (name,breif,linkedin,github,imgUrl){
  this.name=name;
  this.breif=breif;
  this.linkedinAcc=linkedin;
  this.githubAcc=github;
  this.imgUrl=imgUrl;
  this.click=0;
  About.allPeople.push(this);
}
About.allPeople=[];
//adding the instances
new About('Ayyoub Alkeyyam','I graduated from Yarmouk University with a major in Civil Engineering.','http://www.linkedin.com/in/ayyoubk','https://github.com/ayyoubk','images/Ayyoub.jpg');
new About ('Shatha Alsmadi','I graduated from Hashemite University with a major in Software Engineering.','https://www.linkedin.com/in/shatha-al-smadi-5348021ab/','https://github.com/shathasmadi','images/Shatha.jpg');
new About ('Roaa Mustafa','I graduated from Al-Balqa University with a major in Telecommunication Engineering.','https://www.linkedin.com/in/roaa-mustafa98/','https://github.com/RoaaMustafa','images/Roaa.jpg');
new About ('Anas Abu-Galiha','I graduated from Tafila Technical University with a major in Civil Engineering.','https://www.linkedin.com/in/anas-abughalieh-68b73a194/','https://github.com/AnasAGc','images/Anas.jpg');
new About ('Abdullah Elian','I graduated from the University of Jordan with a major in Computer Science','http://www.linkedin.com/in/abdullah-elian','https://github.com/AbdullahElian1','images/Abdullah.jpg');
new About('Mohammad Hayagneh ','I graduated from Yarmouk University  with a major in Electrical engineering','https://www.linkedin.com/in/mohammad-hayajneh-2ab099124/','https://github.com/mohammadhayajneh2014','images/Mohammed.jpg');

let imgEl=document.createElement('img');
function renderImg(index){

  
  imgEl.setAttribute('id','img');
  imgEl.setAttribute('src',`${About.allPeople[index].imgUrl}`);
  showEl.appendChild(imgEl);
  imgEl.setAttribute('class','imageLarge');
}

let divForText=document.createElement('div');

function renderText(index){
  divForText=document.createElement('div');
  showText.appendChild(divForText);
  let nameEl=document.createElement('h5');
  divForText.appendChild(nameEl);
  nameEl.textContent=`${About.allPeople[index].name}`;
  let aboutEl=document.createElement('p');
  divForText.appendChild(aboutEl);
  aboutEl.textContent=`${About.allPeople[index].breif}`;
  let linkOne =document.createElement('a');
  linkOne.setAttribute('href',`${About.allPeople[index].linkedinAcc}`);
  divForText.appendChild(linkOne);
  let holdLink=document.createElement('img');
  linkOne.appendChild(holdLink);
  holdLink.setAttribute('src','images/linkedin.png');
  holdLink.setAttribute('class','link');
  let linkTwo =document.createElement('a');
  linkTwo.setAttribute('href',`${About.allPeople[index].githubAcc}`);
  divForText.appendChild(linkTwo);
  let holdLink2=document.createElement('img');
  linkTwo.appendChild(holdLink2);
  holdLink2.setAttribute('src','images/github.png');
  holdLink2.setAttribute('class','link');
}

container.addEventListener('click',handlesubmit);

function handlesubmit(event){
  event.preventDefault();

  if(event.target.id==='ayyoub'){

    checkUs(0);

  }else if(event.target.id==='shatha'){
    checkUs(1);

  }else if(event.target.id==='roaa'){
    checkUs(2);

  }else if(event.target.id==='anas'){
    checkUs(3);

  }else if(event.target.id==='abdullah'){
    checkUs(4);

  }else if(event.target.id==='mohammed'){
    checkUs(5);

  }
}


function checkUs(x){
  divForText.remove();
  imgEl.remove();
  if(About.allPeople[x].click%2===0){
    openForm();
    renderImg(x);
    renderText(x);

  }else{
    closeForm();
    showEl.innerHTML='';
    showText.innerHTML='';
  }
  About.allPeople[x].click++;
}






function openForm() {
  showEl.style.display = 'block';
  showText.style.display='block';
  //container.setAttribute('onClick','closeForm()');
}
function closeForm() {
  showEl.style.display = 'none';
  showText.style.display = 'none';
  // container.setAttribute('onClick','openForm()');
  //  container.addEventListener('click',handleClicking);

}
