// const inputNum = document.getElementById('input').addEventListener("input", function(){
//     console.log("Input: ", this.value)
// })



document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();
    genTable()
})

function genTable(){
    const inputNum = parseInt(document.querySelector("#input").value.trim());
    if(inputNum === "" || isNaN(inputNum)){
        alert("Please enter a number")
    }
    else{
        const tableContainer = document.querySelector(".table-container")
    tableContainer.innerHTML=""
    let tbody = document.createElement("tbody");
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')

    th1.innerHTML = "Expression";
    th2.innerHTML = " ";
    th3.innerHTML = "Result";

    thead.append(th1,th2,th3)
    table.appendChild(thead)
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerHTML = `${inputNum} x ${i} `;
        td2.innerHTML = `=`
        td3.innerHTML = inputNum*i;

        tr.append(td1,td2,td3);
        tbody.append(tr)
        table.append(tbody)

    }
    
    tableContainer.appendChild(table)

    }
    
    

}
