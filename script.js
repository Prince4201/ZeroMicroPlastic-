// Ensure DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Function to create a chart
    function createChart(ctx, chartData, label) {
        new Chart(ctx, {
            type: 'bar', // Type of chart (you can change to 'line' or others)
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: label,
                    data: chartData.data,
                    backgroundColor: chartData.backgroundColor,
                    borderColor: chartData.borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true // Ensures the Y axis starts at 0
                    }
                }
            }
        });
    }

    // Marine Life Contamination Data
    const marineData = {
        labels: ["Fish Species A", "Fish Species B", "Fish Species C"],
        data: [60, 75, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)'
    };

    // Drinking Water Contamination Data
    const waterData = {
        labels: ["Delhi", "Mumbai", "Kolkata"],
        data: [10, 15, 20],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)'
    };

    // Salt Contamination Data
    const saltData = {
        labels: ["Coastal Salt", "Inland Salt"],
        data: [200, 150],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)'
    };

    // Agriculture Contamination Data
    const agricultureData = {
        labels: ["Fertilizer A", "Fertilizer B", "Plastic Mulch"],
        data: [50, 70, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)'
    };

    // Solutions Data
    const solutionsData = {
        labels: ["Single-Use Plastic Ban", "Waste Management"],
        data: [70, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)'
    };

    // Create each chart
    const marineChartCtx = document.getElementById('marineChart').getContext('2d');
    createChart(marineChartCtx, marineData, 'Microplastic Contamination (Particles)');

    const waterChartCtx = document.getElementById('waterChart').getContext('2d');
    createChart(waterChartCtx, waterData, 'Microplastic Particles per Liter');

    const saltChartCtx = document.getElementById('saltChart').getContext('2d');
    createChart(saltChartCtx, saltData, 'Microplastic Particles per Kilogram');

    const agricultureChartCtx = document.getElementById('agricultureChart').getContext('2d');
    createChart(agricultureChartCtx, agricultureData, 'Microplastic Contamination (Particles)');

    const solutionsChartCtx = document.getElementById('solutionsChart').getContext('2d');
    createChart(solutionsChartCtx, solutionsData, 'Effectiveness (%)');
});