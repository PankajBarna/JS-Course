

document.getElementById("inputForm").addEventListener("submit", function (e) {
    e.preventDefault();
    emiSchedule();
})

function emiSchedule() {
    let amount = document.getElementById('amount').value;
    let teneure = document.getElementById('years').value;
    let interest = document.getElementById('interest').value;
    let paymentDate = new Date(document.getElementById("date").value);

    function formatDate(date) {
        return date.toLocaleDateString("en-US", {
            month: "short",   // Sep
            day: "2-digit",   // 17
            year: "numeric"   // 2025
        });
    }


    const tableContainer = document.querySelector(".table-container");
    tableContainer.innerHTML = ""

    let N = teneure * 12;
    let R = interest / 12 / 100;

    const emi = ((amount * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1))

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

    let startingPrinciple = parseInt(amount);
    let closingPrinciple;
    let principlePayment;
    let interestPayment;
    let totalInterest = 0;
    // console.log(typeof amount)

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
        td2.innerText = formatDate(paymentDate);

        td3.innerText = startingPrinciple.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });

        interestPayment = (startingPrinciple * R);
        principlePayment = emi - interestPayment;
        totalInterest += interestPayment;  // <-- accumulate
        
        closingPrinciple = (startingPrinciple - principlePayment);

        td4.innerText = emi.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });
        td6.innerText = interestPayment.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });
        td5.innerText = principlePayment.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });
        td7.innerText = closingPrinciple.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });

        // console.log(typeof emi)
        // console.log(typeof interestPayment)
        tr.append(td1, td2, td3, td4, td5, td6, td7)
        tbody.appendChild(tr)

        startingPrinciple = closingPrinciple
        // reduce 1 month from the date
        paymentDate.setMonth(paymentDate.getMonth() + 1);
    }

    const headingText = document.createElement('h3')
    headingText.innerText = "EMI Schedule"

    const interestTotal = document.createElement('div')
    interestTotal.innerText = `Total Interest : ${totalInterest.toLocaleString('en-IN',{style:"currency",currency:"INR",maximumFractionDigits:1,minimumFractionDigits:1})}`
    interestTotal.style.textAlign = "right"
    interestTotal.style.fontSize = "18px"

    table.appendChild(tbody)
    tableContainer.append(headingText, interestTotal, table)

}