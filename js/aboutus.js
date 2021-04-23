'use script';
let container =document.getElementById('secone');
let showEl = document.getElementById('sectwo');
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
new About('Ayyoub Alkeyyam','text','http://www.linkedin.com/in/ayyoubk','https://github.com/ayyoubk','/images/Ayyoub.jpg');
new About ('Shatha Alsmadi','text ','https://www.linkedin.com/in/shatha-al-smadi-5348021ab/','https://github.com/shathasmadi','/images/Shatha.jpg');
new About ('Roaa Mustafa','text','https://www.linkedin.com/in/roaa-mustafa98/','https://github.com/RoaaMustafa','/images/Roaa.jpg');
new About ('Anas Abu-Galiha','text','https://www.linkedin.com/in/anas-abughalieh-68b73a194/','https://github.com/AnasAGc','/images/Anas.jpg');
new About ('Abdullah Elian','text','http://www.linkedin.com/in/abdullah-elian','https://github.com/AbdullahElian1','/images/Abduulah.jpg');
new About('Mohammad Hayagneh ','text','https://www.linkedin.com/in/mohammad-hayajneh-2ab099124/','https://github.com/mohammadhayajneh2014','/images/Mohamme.jpg');
new About('Aysheh Abu mahfouz','text','https://www.linkedin.com/in/aysheh-mahfouz-28a48a20b/','https://github.com/Aysheh-Mahfouz','/images/Aysheh.jpg');

function render(index){
  let imgEl= document.createElement('img');
  imgEl.setAttribute('src',`${About.allPeople[index].imgUrl}`);
  showEl.appendChild(imgEl);
  let nameEl=document.createElement('h5');
  showEl.appendChild(nameEl);
  nameEl.textContent=`${About.allPeople[index].name}`;
  let aboutEl=document.createElement('p');
  showEl.appendChild(aboutEl);
  aboutEl.textContent=`${About.allPeople[index].breif}`;
  let linkOne =document.createElement('a');
  linkOne.setAttribute('href',`${About.allPeople[index].linkedinAcc}`);
  showEl.appendChild(linkOne);
  let holdLink=document.createElement('img');
  linkOne.appendChild(holdLink);
  holdLink.setAttribute('src','/images/github.png');
  holdLink.setAttribute('class','link');
  let linkTwo =document.createElement('a');
  linkTwo.setAttribute('href',`${About.allPeople[index].githubAcc}`);
  showEl.appendChild(linkTwo);
  let holdLink2=document.createElement('img');
  linkTwo.appendChild(holdLink2);
  holdLink2.setAttribute('src','/images/linkedin.png');
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
      render(0);
    }else if (event.target.id ==='shatha') {
      showEl.innerHTML='';
      render(1);
    } else if(event.target.id ==='roaa'){
      showEl.innerHTML='';
      render(2);
    }else if(event.target.id ==='anas'){
      showEl.innerHTML='';
      render(3);
    }else if(event.target.id ==='abdullah'){
      showEl.innerHTML='';
      render(4);
    }else if(event.target.id ==='mohammed'){
      showEl.innerHTML='';
      render(5);
    }else if(event.target.id ==='aysheh'){
      showEl.innerHTML='';
      render(6);
    } else{
      showEl.innerHTML='';
    }
  }
  else {
    container.removeEventListener('click',handleClicking);
  }
}
