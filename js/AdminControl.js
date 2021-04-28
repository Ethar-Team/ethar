/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
let bookingInfo =localStorage.getItem('CustInfo');
bookingInfo=JSON.parse(bookingInfo);
console.log(bookingInfo);
let container = document.getElementById('donationpage');
let heading = document.createElement('h2');
container.appendChild(heading);
heading.textContent='Booking Information ';
let table =document.createElement('table');
table.setAttribute('class','table1');
container.appendChild(table);
headerTable();
function headerTable(){
  let tableRow=document.createElement('tr');
  table.appendChild(tableRow);
  let tableHeader=document.createElement('th');
  tableRow.appendChild(tableHeader);
  tableHeader.textContent='client Name';
  let tableHeader1=document.createElement('th');
  tableRow.appendChild(tableHeader1);
  tableHeader1.textContent='Contact Info';
  let tableHeader2=document.createElement('th');
  tableRow.appendChild(tableHeader2);
  tableHeader2.textContent='Item Number';
}
if (bookingInfo !== null){
  custinfoTable();
}else{
  alert('Local storage of booking info is empty');
}
function custinfoTable(){
  for(let i=0;i<bookingInfo.length;i++){
    let newRow=document.createElement('tr');
    table.appendChild(newRow);
    let tableData=document.createElement('td');
    newRow.appendChild(tableData);
    tableData.textContent=bookingInfo[i].name;
    let tableData1=document.createElement('td');
    newRow.appendChild(tableData1);
    tableData1.textContent=bookingInfo[i].contact;
    let tableData2=document.createElement('td');
    newRow.appendChild(tableData2);
    tableData2.textContent=bookingInfo[i].idOfItem;
  }
}
//getting join us info to admin
let joinRequest =localStorage.getItem('workerform');
console.log(joinRequest);
joinRequest=JSON.parse(joinRequest);
console.log(joinRequest);
let containerForJoin =document.getElementById('joinRequest');
let headerJoin=document.createElement('h2');
containerForJoin.appendChild(headerJoin);
headerJoin.textContent='Joining Requests';
let tableForJoin=document.createElement('table');
containerForJoin.appendChild(tableForJoin);
tableForJoin.setAttribute('id','tableForJoin');
// headerRowOfJoin();
function headerRowOfJoin(){
  let joinRow=document.createElement('tr');
  tableForJoin.appendChild(joinRow);
  let headerEl=document.createElement('th');
  joinRow.appendChild(headerEl);
  headerEl.textContent='Name';
  let headerEl1=document.createElement('th');
  joinRow.appendChild(headerEl1);
  headerEl1.textContent='Job';
  let headerEl2=document.createElement('th');
  joinRow.appendChild(headerEl2);
  headerEl2.textContent='Contact';
  for (let i=0; i<joinRequest.length ; i++){
    let rowForEl=document.createElement('tr');
    tableForJoin.appendChild(rowForEl);
    let infoHeader=document.createElement('td');
    rowForEl.appendChild(infoHeader);
    infoHeader.textContent=`${joinRequest[i].name}`;
    console.log(joinRequest[i].name);
    let jobData =document.createElement('td');
    rowForEl.appendChild(jobData);
    jobData.textContent=`${joinRequest[i].job}`;
    let contactData =document.createElement('td');
    rowForEl.appendChild(contactData);
    contactData.textContent=`${joinRequest[i].ContactNumberr}`;
  }
}
if (joinRequest !== null){
  headerRowOfJoin();
}else{
  alert('Local storage of Joining Requests is empty');
}
// getting service info to admin
let serviceRequest =localStorage.getItem('volunteer');
serviceRequest=JSON.parse(serviceRequest);
let containerForService=document.getElementById('serviceRequest');
let headerServ=document.createElement('h2');
containerForService.appendChild(headerServ);
headerServ.textContent='serviceRequest';
let tableForServ=document.createElement('table');
containerForService.appendChild(tableForServ);
tableForServ.setAttribute('id','tableForService');
function headerRowOfService(){
  let servRow=document.createElement('tr');
  tableForServ.appendChild(servRow);
  let headerElm=document.createElement('th');
  servRow.appendChild(headerElm);
  headerElm.textContent='Name';
  let headerElm1=document.createElement('th');
  servRow.appendChild(headerElm1);
  headerElm1.textContent='Contact';
  let headerElm2=document.createElement('th');
  servRow.appendChild(headerElm2);
  headerElm2.textContent='Description';
  for (let i=0; i<serviceRequest.length ; i++){
    let rowForElm=document.createElement('tr');
    tableForServ.appendChild(rowForElm);
    let infoHeader1=document.createElement('td');
    rowForElm.appendChild(infoHeader1);
    infoHeader1.textContent=`${serviceRequest[i].names}`;
    // console.log(serviceReques[i].name);
    let descData =document.createElement('td');
    rowForElm.appendChild(descData);
    descData.textContent=`${serviceRequest[i].countatNumber}`;
    let contactData =document.createElement('td');
    rowForElm.appendChild(contactData);
    contactData.textContent=`${serviceRequest[i].description}`;
  }
}
if (serviceRequest !== null){
  headerRowOfService();
}else{
  alert('Local storage of Service Request is empty');
}