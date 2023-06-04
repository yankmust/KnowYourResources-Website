document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container_water', {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['China', 'United States', 'Brazil', 'Russia', 'Mexico', 'India', 'England', 'France', 'Canada', 'Australia']
        },
        series: [{
            name: 'Water Consumption',
            data: [1371, 818, 360, 269, 200, 114, 76, 76, 72, 45]
        }]

    });
});