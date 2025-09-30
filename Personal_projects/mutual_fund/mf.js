
const tableContainer = document.querySelector(".table-container");

let table = document.createElement('table');
let thead = document.createElement('thead')
let th = document.createElement('th')
let totlaReturn = document.createElement('p')

let headerArr = ["S.N.", "Months of Investment", "Date", "SIP", "Total Invested", "Future Value","Profit"]

let ths = headerArr.map(t => { const th = document.createElement('th'); th.textContent = t; return th })     //gives an array of th with headers in it

thead.append(...ths)        //destructure the array
table.append(thead)
tableContainer.appendChild(table)

const tbody = document.createElement('tbody')

let principle = 10000;
let rate = 12       //annual rate of interest
let monthlyReturn = Math.pow(1 + rate/100, 1/12) - 1
// console.log(monthlyReturn)
let months = 12
let t = months / 12;
let n = 12      //compounded monthly
let paymentDate = new Date()


let allMonth = []
let finalTotal = 0

function currFormat(value) {
    return value.toLocaleString('en-IN', { style: "currency", currency: "INR", minimumFractionDigits: 2 })
}

// for (let j = 0; j < months; j++) {

let monthOne = []
let total = 0

for (let i = months; i >= 1; i--) {
    let fv = Number(principle * Math.pow((1 + monthlyReturn), (n * i / 12)));

    monthOne.push(fv)

    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    const td6 = document.createElement('td')
    const td7 = document.createElement('td')

    td1.innerText = months - i + 1
    td2.innerText = i
    td3.innerText = formatDate(paymentDate)
    td4.innerHTML = principle
    td5.innerHTML = principle * i
    td6.innerText = currFormat(fv)
    td7.innerText = principle * i

    tr.append(td1, td2, td3, td4, td5, td6,td7)
    tbody.appendChild(tr)
    table.appendChild(tbody)
    tableContainer.appendChild(table)

    paymentDate.setDate(1)      //go to ist of current month
    paymentDate.setMonth(paymentDate.getMonth() + 1)

}
// console.log(monthOne)                       //arrays of fv for all months
for (let i = 0; i < monthOne.length; i++) {
    total = (total += monthOne[i])
    console.log(total)
}
// allMonth.push(total)
// console.log(total)
totlaReturn.innerText = total
tableContainer.appendChild(totlaReturn)        //sum of total future values of each month
// }

// console.log(allMonth)                   //array of total fv amount of each month
// for(i = 0; i < allMonth.length; i++){
//     finalTotal = finalTotal += allMonth[i]
// }
// console.log(finalTotal)         //final amount after all month sip completed


function formatDate(date) {
    return date.toLocaleDateString('en-IN', { month: "short", day: "2-digit", year: "numeric" });
}
