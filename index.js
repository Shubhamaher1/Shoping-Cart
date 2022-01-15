
let cout=1;
let total=0;
const grandTotal= document.getElementById("grandTotal");
    grandTotal.innerHTML=total;
function insertItem() {
    const itm=document.getElementById("item-name-input").value;
    const price= document.getElementById("item-price-input").value;
    total+=parseInt(price);
    const tr= document.createElement("tr");
    const td= document.createElement("td");
    
    td.innerHTML=cout++;
    const td1= document.createElement("td");
    td1.innerHTML=itm;
    const td2= document.createElement("td");
    td2.innerHTML=price;
    
    tr.append(td);
    tr.append(td1);
    tr.append(td2);
    const table=document.getElementById("table");
    table.append(tr);
    const grandTotal1= document.getElementById("grandTotal");
    grandTotal1.innerHTML=total;
  
}
