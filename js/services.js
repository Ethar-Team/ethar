'use sttict '

let helpingArray=[];  
let waitinglist=document.getElementById("waitingList")

function AskForHelp (names,countatNumber,helpTime){

    this.names=names;
    this.countatNumber=countatNumber;
    this.helpTime=helpTime;
    helpingArray.push(this)
}

let anas = new AskForHelp('anas','11','12')

console.log(helpingArray.names)


const helpingForm=document.getElementById("hepingForm")
helpingForm.addEventListener('submit', helpTask)



 function helpTask (event){

    event.preventDefault()

    let newName=event.target.customername.value
    let newContact=event.target.customercontact.value
    let newTime=event.target.time.value

    let Newhelp= new AskForHelp(newName,newContact,newTime)

}





let list=document.createElement("ul")
waitinglist.appendChild(list)
randerlist ()

function randerlist (){

    let li=document.createElement('li')
    list.appendChild(li)
    // li.textContent=('THe Name : ' + helpingArray.names[0] + ' The Contact Number ' )
}