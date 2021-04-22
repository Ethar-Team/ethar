'use sttict '

let arryOfHelp=[];  
function AskForHelp (names,countatNumber,helpTime){

    this.name=names;
    this.countatNumber=countatNumber;
    this.helpTime=helpTime;
    arryOfHelp.push(this)
}

let anas = new AskForHelp('anas','11','12')

console.log(anas)