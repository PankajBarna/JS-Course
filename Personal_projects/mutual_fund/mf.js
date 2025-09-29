// const mfM = function(p, rate){
//     let r = rate/100
//     let t = 1/12
//     let n = 12
//     let fv = p*Math.pow((1+r/n),(t*n))
//     console.log(fv)
// }
// // mf(10000, 10, 1)
// mfM(11500,12)

// const tableContainer = document.querySelector(".table_container");
const tableContainer = document.querySelector(".table-container");

let table = document.createElement('table');
let thead = document.createElement('thead')
let th = document.createElement('th')

let headerArr = ["S.N.","Date", "SIP", "Start Amount", "Future Value"]

let ths = headerArr.map( t => {const th = document.createElement('th'); th.textContent = t; return th})     //gives an array of th with headers in it



thead.append(...ths)        //destructure the array
table.append(thead)
tableContainer.appendChild(table)

const tbody = document.createElement('tbody')

let principle = 10000;
let rate = 10
let r = rate/10;
let t = 1/12;
let n = 12
let paymentDate = new Date()
let amount = principle

let fv = principle*Math.pow((1+r/n),(t*n))

for (let i = 1; i <= 12; i++) {
    fv = principle*Math.pow((1+r/n),(i*n))
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')

    td3.textContent = principle;
    td1.textContent = i;
    td2.textContent = formatDate(paymentDate)
    td4.textContent = amount
    td5.textContent = fv

    tr.append(td1,td2,td3,td4,td5)
    tbody.append(tr)
    table.append(tbody)
   

    paymentDate.setMonth(paymentDate.getMonth() + 1)
}

function formatDate(date){
    return date.toLocaleDateString('en-IN',{month: "short", day: "2-digit", year: "numeric"});
}
