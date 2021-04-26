'use script';
let container =document.getElementById('secone');
// let linkToScroll=document.getElementsByClassName('imgs');
let showEl = document.getElementById('sectwo');
let showText=document.getElementById('secthree');
// let ayyoubEl =document.getElementById('secone');
// let shathaEl=document.getElementById('secone');
// let roaaEl=document.getElementById('secone');
// let anasEl =document.getElementById('secone');
// let abdullahEl=document.getElementById('secone');
// let mohammedEl=document.getElementById('secone');
// let ayshehEl =document.getElementById('secone');
function About (name,breif,linkedin,github,imgUrl){
  this.name=name;
  this.breif=breif;
  this.linkedinAcc=linkedin;
  this.githubAcc=github;
  this.imgUrl=imgUrl;
  About.allPeople.push(this);
}
About.allPeople=[];
//adding the instances
new About('Ayyoub Alkeyyam','I graduated from Yarmouk University with a major in Civil Engineering.','http://www.linkedin.com/in/ayyoubk','https://github.com/ayyoubk','/images/Ayyoub.jpg');
new About ('Shatha Alsmadi','I graduated from Hashemite University with a major in Software Engineering.','https://www.linkedin.com/in/shatha-al-smadi-5348021ab/','https://github.com/shathasmadi','/images/Shatha.jpg');
new About ('Roaa Mustafa','I graduated from Al-Balqa University with a major in Telecommunication Engineering.','https://www.linkedin.com/in/roaa-mustafa98/','https://github.com/RoaaMustafa','/images/Roaa.jpg');
new About ('Anas Abu-Galiha','I graduated from Tafila Technical University with a major in Civil Engineering.','https://www.linkedin.com/in/anas-abughalieh-68b73a194/','https://github.com/AnasAGc','/images/Anas.jpg');
new About ('Abdullah Elian','I graduated from the University of Jordan with a major in Computer Science','http://www.linkedin.com/in/abdullah-elian','https://github.com/AbdullahElian1','/images/Abduulah.jpg');
new About('Mohammad Hayagneh ','I graduated from Yarmouk University  with a major in Electrical engineering','https://www.linkedin.com/in/mohammad-hayajneh-2ab099124/','https://github.com/mohammadhayajneh2014','/images/Mohamme.jpg');
function renderImg(index){
  // let linkToScroll = document.createElement('a');
  // linkToScroll.setAttribute('href','#sectwo');
  // containerImg.appendChild()
  let imgEl= document.createElement('img');
  imgEl.setAttribute('src',`${About.allPeople[index].imgUrl}`);
  showEl.appendChild(imgEl);
}
function renderText(index){
  let nameEl=document.createElement('h5');
  showText.appendChild(nameEl);
  nameEl.textContent=`${About.allPeople[index].name}`;
  let aboutEl=document.createElement('p');
  showText.appendChild(aboutEl);
  aboutEl.textContent=`${About.allPeople[index].breif}`;
  let linkOne =document.createElement('a');
  linkOne.setAttribute('href',`${About.allPeople[index].linkedinAcc}`);
  showText.appendChild(linkOne);
  let holdLink=document.createElement('img');
  linkOne.appendChild(holdLink);
  holdLink.setAttribute('src','/images/linkedin.png');
  holdLink.setAttribute('class','link');
  let linkTwo =document.createElement('a');
  linkTwo.setAttribute('href',`${About.allPeople[index].githubAcc}`);
  showText.appendChild(linkTwo);
  let holdLink2=document.createElement('img');
  linkTwo.appendChild(holdLink2);
  holdLink2.setAttribute('src','/images/github.png');
  holdLink2.setAttribute('class','link');
}
let count=0;
// render(0);
container.addEventListener('click',handleClicking);
function handleClicking(event) {
  event.preventDefault();
  count++;
  if (count >= 1){
    if (event.target.id ==='ayyoub'){
      showEl.innerHTML='';
      showText.innerHTML='';
      renderImg(0);
      renderText(0);
    }else if (event.target.id ==='shatha') {
      showEl.innerHTML='';
      showText.innerHTML='';
      renderImg(1);
      renderText(1);
    } else if(event.target.id ==='roaa'){
      showEl.innerHTML='';
      showText.innerHTML='';
      renderImg(2);
      renderText(2);
    }else if(event.target.id ==='anas'){
      showEl.innerHTML='';
      showText.innerHTML='';
      renderImg(3);
      renderText(3);
    }else if(event.target.id ==='abdullah'){
      showEl.innerHTML='';
      showText.innerHTML='';
      renderImg(4);
      renderText(4);
    }else if(event.target.id ==='mohammed'){
      showEl.innerHTML='';
      showText.innerHTML='';
      renderImg(5);
      renderText(5);
    }else if(event.target.id ==='aysheh'){
      showEl.innerHTML='';
      showText.innerHTML='';
      renderImg(6);
      renderText(6);
    } else{
      showEl.innerHTML='';
      showText.innerHTML='';
    }
  }
  else {
    container.removeEventListener('click',handleClicking);
  }
}

