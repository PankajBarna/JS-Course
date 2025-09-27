
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of votes',
            data: [13, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderColor: "#36a2eb",
            backgroundColor: '#9bd0f5'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                position: 'left',
                title:'Numbers'
            }
        },
        plugins:{
            title:{
                display:true,
                text: "Pankaj's Chart",
                padding:{
                    top:0,
                    bottom:20
                }
            },
            legend:{
                display: true,
                position: "bottom",
                align: "center"
            }
        }
    }
});

