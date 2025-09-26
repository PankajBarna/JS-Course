// document.getElementById('inputForm').addEventListener("submit",function(e){
//     e.preventDefault();
//     emiSchedule();
// })

document.getElementById("inputForm").addEventListener("submit", function (e) {
    e.preventDefault();
    emiSchedule();
})

function emiSchedule() {
    let amount = document.getElementById('amount').value;
    let teneure = document.getElementById('years').value;
    let interest = document.getElementById('interest').value;
    let date = document.getElementById('date').value;

    const tableContainer = document.querySelector(".table-container");
    tableContainer.innerHTML = ""

    let N = teneure * 12;
    let R = interest / 12 / 100;

    let emi = ((amount * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)).toFixed(2);

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');
    let th6 = document.createElement('th');
    let th7 = document.createElement('th');

    th1.innerHTML = "Inst."
    th2.innerHTML = "Date"
    th3.innerHTML = "Starting Principle"
    th4.innerHTML = "EMI"
    th5.innerHTML = "Principle"
    th6.innerHTML = "Interest"
    th7.innerHTML = "Closing Principle"

    thead.append(th1, th2, th3, th4, th5, th6, th7)
    table.appendChild(thead)

    let tbody = document.createElement('tbody');

    let startingPrinciple = amount;
    let closingPrinciple;
    let principlePayment;
    let interestPayment;


    for (let i = 1; i <= N; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        
        td1.innerText = i;
        td3.innerText = (startingPrinciple);
        td4.innerText = `${emi}`

        interestPayment = startingPrinciple*R;
        principlePayment = emi - interestPayment;
        closingPrinciple = (startingPrinciple-principlePayment).toFixed(2);

        td6.innerText = (interestPayment).toFixed(2);
        td5.innerText = (emi - interestPayment).toFixed(2);
        td7.innerText = (startingPrinciple - principlePayment).toFixed(2)


        tr.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.appendChild(tr)
        
        startingPrinciple = closingPrinciple;

    }
    table.appendChild(tbody)



    tableContainer.appendChild(table)

}