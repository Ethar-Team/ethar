'use script';
let container =document.getElementById('secone');
// let ayyoubEl =document.getElementById('secone');
// let shathaEl=document.getElementById('secone');
// let roaaEl=document.getElementById('secone');
// let anasEl =document.getElementById('secone');
// let abdullahEl=document.getElementById('secone');
// let mohammedEl=document.getElementById('secone');
// let ayshehEl =document.getElementById('secone');
// let linkes =document.getElementById('secthree');
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
new About('Ayyoub Alkeyyam','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','http://www.linkedin.com/in/ayyoubk','https://github.com/ayyoubk','/images/Ayyoub.jpg');
new About ('Shatha Alsmadi','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/shatha-al-smadi-5348021ab/','https://github.com/shathasmadi');
new About ('Roaa Mustafa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/roaa-mustafa98/','https://github.com/RoaaMustafa');
new About ('Anas Abu-Galiha','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/anas-abughalieh-68b73a194/','https://github.com/AnasAGc');
new About ('Abdullah Elian','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','http://www.linkedin.com/in/abdullah-elian','https://github.com/AbdullahElian1');
new About('Mohammad Hayagneh ','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/mohammad-hayajneh-2ab099124/','https://github.com/mohammadhayajneh2014');
new About('Aysheh Abu mahfouz','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/aysheh-mahfouz-28a48a20b/','https://github.com/Aysheh-Mahfouz');
let showEl = document.getElementById('sectwo');
function render(index){
  let imgEl= document.createElement('img');
  imgEl.setAttribute('src',`${About.allPeople[index].imgUrl}`);
  showEl.appendChild(imgEl);
  let nameEl=document.createElement('h2');
  showEl.appendChild(nameEl);
  nameEl.textContent=`${About.allPeople[index].name}`نكمل ;
}
render(0);
//imgEl.setAttribute('src',About.allPeople[index].imgUrl); ---
// function handleClicking(event) {
//   event.preventDefault();
//   render();
//   container.removeEventListener('click',handleClicking);
// }
// function render(){
//   container.addEventListener('click',handleClicking);
//   let showEl = document.getElementById('sectwo');

//   for(let i = 0 ; i <About.allPeople.length;i++){
//     let description = document.createElement('p');
//     showEl.appendChild(description);
//     description.textContent = `${About.allPeople[i].name} `;
//     description.textContent = `${About.allPeople[i].breif}` ;
//     description.textContent = `${About.allPeople[i].linkedinAcc}`;
//     description.textContent = `${About.allPeople[i].githubAcc}`;
//   }
// }
