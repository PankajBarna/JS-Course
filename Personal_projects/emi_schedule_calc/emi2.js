document.getElementById("inputForm").addEventListener("submit", function (e) {
    e.preventDefault();
    emiSchedule();
});

let openingChart; // keep a handle so we can destroy on re-run

function emiSchedule() {
    // 1) Parse as numbers (supports decimals)
    const amount = Number(document.getElementById('amount').value);
    const tenure = Number(document.getElementById('years').value);
    const interest = Number(document.getElementById('interest').value);
    let paymentDate = new Date(document.getElementById("date").value);

    function formatDate(date) {
        return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    }

    const tableContainer = document.querySelector(".table-container");
    tableContainer.innerHTML = "";

    const N = tenure * 12;
    const R = interest / 12 / 100;

    const emi = R === 0
        ? amount / N
        : (amount * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    // 2) Arrays for chart
    const labels = [];
    const principalParts = [];
    const interestParts = []

    // --- build table ---
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const ths = ["Inst.", "Date", "Starting Principle", "EMI", "Principle", "Interest", "Closing Principle"]
        .map(t => { const th = document.createElement('th'); th.textContent = t; return th; });
    thead.append(...ths);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    let startingPrinciple = amount;
    let closingPrinciple;
    let principlePayment;
    let interestPayment;
    let totalInterest = 0;

    for (let i = 1; i <= N; i++) {
        // 3) Push opening balance + label BEFORE updating for next month
        labels.push(formatDate(paymentDate));
        interestPayment = startingPrinciple * R;
        principlePayment = emi - interestPayment;

        principalParts.push(principlePayment);
        interestParts.push(interestPayment);

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');

        td1.innerText = i;
        td2.innerText = formatDate(paymentDate);
        td3.innerText = startingPrinciple.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });

        interestPayment = startingPrinciple * R;
        principlePayment = emi - interestPayment;
        totalInterest += interestPayment;
        closingPrinciple = startingPrinciple - principlePayment;

        td4.innerText = emi.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });
        td5.innerText = principlePayment.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });
        td6.innerText = interestPayment.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });
        td7.innerText = closingPrinciple.toLocaleString("en-IN", { style: "currency", "currency": "INR", minimumFractionDigits: 2 });

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        tbody.appendChild(tr);

        // advance
        startingPrinciple = closingPrinciple;
        paymentDate.setMonth(paymentDate.getMonth() + 1);
    }

    const headingText = document.createElement('h3');
    headingText.innerText = "EMI Schedule";

    const interestTotal = document.createElement('div');
    interestTotal.innerText = `Total Interest : ${totalInterest.toLocaleString('en-IN', {
        style: "currency", currency: "INR", maximumFractionDigits: 1, minimumFractionDigits: 1
    })}`;
    interestTotal.style.textAlign = "right";
    interestTotal.style.fontSize = "18px";

    table.appendChild(tbody);

    // 4) Create a canvas for the chart (above or below the table)
    const chartWrap = document.createElement('div');
    chartWrap.style.margin = "16px 0";
    const canvas = document.createElement('canvas');
    canvas.id = "openingChart";
    chartWrap.appendChild(canvas);

    // 5) Append to container (heading, totals, chart, table)
    tableContainer.append(headingText, interestTotal, chartWrap, table);

    // 6) Build the bar chart (destroy previous if any)
    if (openingChart) openingChart.destroy();

    const inr = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2
    });

    openingChart = new Chart(canvas.getContext("2d"), {
        type: "bar",
        data: {
            labels,  // months
            datasets: [
                {
                    label: "Principal Part",
                    data: principalParts, // array collected in loop
                    backgroundColor: "rgba(0, 255, 200, 0.8)",
                    borderRadius: 6,
                },
                {
                    label: "Interest Part",
                    data: interestParts, // array collected in loop
                    backgroundColor: "rgba(255, 0, 119, 0.8)",
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (ctx) => ` ${inr.format(ctx.raw)}`
                    }
                },
                title: {
                    display: true,
                    text: "EMI Split (Principal vs Interest)"
                }
            },
            scales: {
                x: { stacked: true },  // enable stacking on x-axis
                y: {
                    stacked: true,
                    ticks: { callback: (v) => inr.format(v) }
                }
            }
        }
    });


    // Give the chart some height
    chartWrap.style.height = "360px";
}
