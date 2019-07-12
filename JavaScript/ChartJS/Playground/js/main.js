// LINE CHART

var ctx = document.getElementById("lineChart");

var myLineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'lightblue',
            borderColor: 'purple',
            data: [1, 9, 4, 3, 15, 25, 35]
        }
    ]
    },

    // Configuration options go here
    options: {}
}

);
