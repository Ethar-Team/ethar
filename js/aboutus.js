'use script';
let container =document.getElementById('sectwo');
// let ayyoubEl =document.getElementById('secone');
// let shathaEl=document.getElementById('secone');
// let roaaEl=document.getElementById('secone');
// let anasEl =document.getElementById('secone');
// let abdullahEl=document.getElementById('secone');
// let mohammedEl=document.getElementById('secone');
// let ayshehEl =document.getElementById('secone');
// let linkes =document.getElementById('secthree');
function About (name,breif,linkedin,github){
  this.name=name;
  this.breif=breif;
  this.linkedinAcc=linkedin;
  this.githubAcc=github;
  About.allPeople.push(this);
}
About.allPeople=[];
//adding the instances
new About('Ayyoub Alkeyyam','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','http://www.linkedin.com/in/ayyoubk','https://github.com/ayyoubk');
new About('Mohammad Hayagneh ','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/mohammad-hayajneh-2ab099124/','https://github.com/mohammadhayajneh2014');
new About ('Shatha Alsmadi','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/shatha-al-smadi-5348021ab/','https://github.com/shathasmadi');
new About ('Roaa Mustafa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/roaa-mustafa98/','https://github.com/RoaaMustafa');
new About ('Abdullah Elian','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','http://www.linkedin.com/in/abdullah-elian','https://github.com/AbdullahElian1');
new About ('Anas Abu-Galiha','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/anas-abughalieh-68b73a194/','https://github.com/AnasAGc');
new About('Aysheh Abu mahfouz','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus dolor facilis expedita corporis dignissimos similique assumenda odit, reprehenderit qui neque necessitatibus praesentium quos, dolorum vel? Quidem exercitationem quam tempore!','https://www.linkedin.com/in/aysheh-mahfouz-28a48a20b/','https://github.com/Aysheh-Mahfouz');
container.addEventListener('click',handleClicking);
function handleClicking(event) {
  event.preventDefault();
  render();
  container.removeEventListener('click',handleClicking);
}
function render(){
  let show = document.getElementById('sectwo');
  let description;
  for(let i = 0 ; i <About.allPeople.length;i++){
    description = document.createElement('p');
    show.appendChild(description);
    description.textContent = `${About.allPeople[i].name} `;
    description.textContent = `${About.allPeople[i].breif}` ;
    description.textContent = `${About.allPeople[i].linkedinAcc}`;
    description.textContent = `${About.allPeople[i].githubAcc}`;
  }
}
