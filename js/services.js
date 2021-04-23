'use sttict '

let waitinglist=document.getElementById("waitingList")
let array=[]
// function AskForHelp (names,countatNumber,helpTime){

//     this.names=names;
//     this.countatNumber=countatNumber;
//     this.helpTime=helpTime;
//     array.push(this)
// }

// let anas = new AskForHelp('anas','11','12')


let arrayOfServices=[];
function Servies (name,paragraph){
    this.name=name;
    this.paragraph=paragraph;
    arrayOfServices.push(this)

}

let building= new Servies("building","Para1")
let teaching= new Servies("teaching","para2")
let carpentry= new Servies("carpenting","para3")
let plumbing=new Servies("plumbing","para4")
let painting=new Servies("painting","para5")
let electric=new Servies("electric","para6")


const cards=document.getElementById("right");
const container=document.getElementById("left");
let formSection=document.createElement("section");

let index;
cards.addEventListener('click',renderform)

function renderform (event){
    

    let category =event.target.id    
    for (let i = 0; i < arrayOfServices.length; i++) {
     
        if(category===arrayOfServices[i].name){

            index=i
            rander ()
            break
        }
        
    }
    
    

    
    function rander () {

        formSection.remove();

        formSection=document.createElement("section");
        formSection.setAttribute("id",arrayOfServices[index].name)
        container.appendChild(formSection);
        
        
        let title=document.createElement("h2")
        formSection.appendChild(title)
        title.textContent=arrayOfServices[index].name.toUpperCase()
        let paragraph1=document.createElement("p")
        formSection.appendChild(paragraph1)
        paragraph1.textContent=arrayOfServices[index].paragraph


        formRander();
        
    }
    
    
    
    
}

function formRander(){


    
    let form=document.createElement("form")
    formSection.appendChild(form)
    let fieldset=document.createElement("fieldset")
    form.appendChild(fieldset)
    
    let legend=document.createElement("legend")
    fieldset.appendChild(legend)
    legend.textContent="Ask For Help"
    
    let nameLabel=document.createElement("label")
    fieldset.appendChild(nameLabel)
    nameLabel.textContent="Name"
    nameLabel.setAttribute("for","customername")
    let input1=document.createElement("input")
    fieldset.appendChild(input1)
    input1.setAttribute("type","text")
    input1.setAttribute("id","customername")
    let br1=document.createElement("br")
    
    
    let nameLabe2=document.createElement("label")
    fieldset.appendChild(nameLabe2)
    nameLabe2.textContent="Contact"
    nameLabe2.setAttribute("for","customercontact")
    let input2=document.createElement("input")
    fieldset.appendChild(input2)
    input2.setAttribute("type","text")
    input2.setAttribute("id","customercontact")
    let br2=document.createElement("br")
    
    
    let nameLabe3=document.createElement("label")
    fieldset.appendChild(nameLabe3)
    nameLabe3.textContent="Description"
    nameLabe3.setAttribute("for","description")
    let input3=document.createElement("textarea")
    fieldset.appendChild(input3)
    // input3.setAttribute("type","text")
    input3.setAttribute("id","description")
    let br3=document.createElement("br")
    
    let submit=document.createElement("input")
    fieldset.appendChild(submit)
    submit.setAttribute("type","submit")
    submit.setAttribute("value", "Submit")

};


// function randerSection (){
    
    
// }

// let list=document.createElement("ul")
// waitinglist.appendChild(list)
// randerlist ()

// function randerlist (){
    
//     let li=document.createElement('li')
//     list.appendChild(li)
//     // li.textContent=('THe Name : ' + helpingArray.names[0] + ' The Contact Number ' )
// }
// console.log(array[0].names)


// const helpingForm=document.getElementById("hepingForm")
// helpingForm.addEventListener('submit', helpTask)

//     function helpTask (event){

//         console.log(event)
//         event.preventDefault()

//         let newName=event.target.customername.value
//         let newContact=event.target.customercontact.value
//         let newTime=event.target.time.value

//         let Newhelp= new AskForHelp(newName,newContact,newTime)

// }