'use strict';
let bookingInfo =localStorage.getItem('CustInfo');
bookingInfo=JSON.parse(bookingInfo);
console.log(bookingInfo);

let container = document.getElementById('donationpage');
let heading = document.createElement('h2');
container.appendChild(heading);
heading.textContent='Booking Information :';
let table =document.createElement('table');
table.setAttribute('class','table1');
container.appendChild(table);

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

custinfoTable();







