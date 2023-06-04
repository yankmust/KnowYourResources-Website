document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container_electric', {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        colors: ['#fdbf00'],
        xAxis: {
            categories: ['China', 'United States', 'India', 'Japan', 'Russia', 'Canada', 'Korea', 'Brazil', 'Germany', 'France']
        },
        series: [{
            name: 'Electric Consumption',
            data: [7805.66, 3979.28, 1442.75, 996.44, 913.08, 577.3, 567.67, 554.74, 511.66, 447.45]
        }]

    });
});