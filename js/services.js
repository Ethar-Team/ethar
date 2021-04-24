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

let building= new Servies('building','designing or maintaining air conditioning, elevators and other mechanical systems,distributing electricity and water supply,providing lighting and heating.');
let teaching= new Servies('teaching','We provide specialist teaching services to support children and young people with a variety of special educational needs and disabilities. We provide our specialist teaching services across all education settings, secondary, primary, mainstream, specialist and early years.');
let carpentry= new Servies('carpenting','Measuring, marking up, cutting, shaping, fitting and finishing timber,Using a range of hand and power tools,Installing floor joists, floorboards, roof trusses and wall partitions,Fitting interiors such as staircases, doors, skirting boards, cupboards and kitchens,Putting up frames for bridges, roads, dams and buildings,Drawing and working with technical drawings,Working in residential or commercial buildings,Restoring buildings,Working in a workshop, a client’s business or home, or on a construction site,Carrying out jobs in dusty conditions or working outdoors in all weather and at height.');
let plumbing=new Servies('plumbing','Install pipes and plumbing fixtures. Visually inspect equipment and operate test equipment such as pressure and vacuum gauges to determine the cause and location of trouble. Clear obstructions from sink drains and toilets, Troubleshoot problems and decide how to fix them. Repair pipes and plumbing fixtures,Do installations and repairs.Present recommendations to people.');
let painting=new Servies('painting','paint surface for homes,Insulation of roofs and walls of houses,Cleaning and washing surfaces and walls.repairing wall pits,removing old paint before starting to paint.');
let electric=new Servies('electric','Generation and Power Supply,Transmission and Distribution,Lighting Services,Generation and Power Supply Services,Transmission and Distribution ,upgrades to existing wiring.');





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

function formRander(){



  let form=document.createElement('form');
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
  fieldset.appendChild(input1);
  input1.setAttribute('type','text');
  input1.setAttribute('id','customername');
  let br1=document.createElement('br');


  let nameLabe2=document.createElement('label');
  fieldset.appendChild(nameLabe2);
  nameLabe2.textContent='Contact';
  nameLabe2.setAttribute('for','customercontact');
  let input2=document.createElement('input');
  fieldset.appendChild(input2);
  input2.setAttribute('type','text');
  input2.setAttribute('id','customercontact');
  let br2=document.createElement('br');


  let nameLabe3=document.createElement('label');
  fieldset.appendChild(nameLabe3);
  nameLabe3.textContent='Description';
  nameLabe3.setAttribute('for','description');
  let input3=document.createElement('textarea');
  fieldset.appendChild(input3);
  // input3.setAttribute("type","text")
  input3.setAttribute('id','description');
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
  container.removeEventListener('submit',formBox);
}


/////    Saving To Localstorage



function saveLs (){

  let save=JSON.stringify(array);
  localStorage.setItem('volunteer',save);
}

