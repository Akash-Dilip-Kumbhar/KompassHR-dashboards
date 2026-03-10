$(document).ready(function () {
    // 1. Attendance Trends (Column Chart)
    if ($('#attendanceChart').length > 0) {
        Highcharts.chart('attendanceChart', {
            chart: {
                type: 'column',
                height: 300,
                backgroundColor: 'transparent'
            },
            title: { text: null },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                lineWidth: 0,
                tickWidth: 0
            },
            yAxis: {
                min: 0,
                title: { text: null },
                labels: { format: '{value}%' },
                gridLineDashStyle: 'Dash',
                gridLineColor: '#eee'
            },
            legend: { enabled: false },
            plotOptions: {
                column: {
                    borderRadiusTopLeft: 5,
                    borderRadiusTopRight: 5,
                    borderWidth: 0,
                    pointWidth: 20
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}%</b>'
            },
            series: [{
                name: 'Attendance',
                data: [
                    { y: 40, color: '#fdd3c6' },
                    { y: 22, color: '#fdd3c6' },
                    { y: 53, color: '#fdd3c6' },
                    { y: 25, color: '#fdd3c6' },
                    { y: 56, color: '#fdd3c6' },
                    { y: 90, color: '#F26522' }, // Highlighted June
                    { y: 43, color: '#fdd3c6' },
                    { y: 25, color: '#555555' }, // Highlighted Aug (in image it's grey?)
                    { y: 68, color: '#fdd3c6' },
                    { y: 80, color: '#fdd3c6' },
                    { y: 35, color: '#fdd3c6' },
                    { y: 20, color: '#fdd3c6' }
                ]
            }],
            credits: { enabled: false }
        });
    }

    // 2. Attendance Status (Stacked Bar Chart)
    if ($('#attendanceProgress').length > 0) {
        Highcharts.chart('attendanceProgress', {
            chart: {
                type: 'bar',
                height: 80,
                backgroundColor: 'transparent',
                margin: [0, 0, 0, 0],
                spacing: [0, 0, 0, 0]
            },
            title: { text: null },
            xAxis: { visible: false },
            yAxis: { visible: false, min: 0, max: 100 },
            legend: { enabled: false },
            plotOptions: {
                series: {
                    stacking: 'percent',
                    borderWidth: 2,
                    borderColor: '#1e293b',
                    pointWidth: 30,
                    borderRadius: 4
                }
            },
            tooltip: { enabled: false },
            series: [
                { name: 'Present', data: [80], color: '#f26522' },
                { name: 'WFH', data: [5], color: '#f79367' },
                { name: 'Late', data: [5], color: '#fabb9f' },
                { name: 'On Leave', data: [5], color: '#fde3d6' },
                { name: 'Absent', data: [5], color: '#fef1eb' }
            ],
            credits: { enabled: false }
        });
    }

    // 3. Office Vs Remote (Scatter Chart)
    if ($('#officeRemoteChart').length > 0) {
        Highcharts.chart('officeRemoteChart', {
            chart: {
                type: 'scatter',
                height: 250,
                backgroundColor: 'transparent'
            },
            title: { text: null },
            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                lineWidth: 1,
                lineColor: '#eee',
                tickWidth: 0,
                gridLineWidth: 1,
                gridLineDashStyle: 'Dash',
                gridLineColor: '#f5f5f5'
            },
            yAxis: {
                min: 0,
                max: 400,
                title: { text: null },
                gridLineDashStyle: 'Dash',
                gridLineColor: '#eee'
            },
            legend: {
                align: 'center',
                verticalAlign: 'top',
                symbolRadius: 50
            },
            plotOptions: {
                scatter: {
                    marker: { radius: 5, symbol: 'circle' }
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b>'
            },
            series: [
                { name: 'Office', color: '#f26522', data: [100, 80, 40, 170, 260, 250, 300] },
                { name: 'Remote', color: '#115e59', data: [220, 270, 340, 300, 320, 300, 320] }
            ],
            credits: { enabled: false }
        });
    }

    // 4. Violations Statistics (Column)
    if ($('#violationChart').length > 0) {
        Highcharts.chart('violationChart', {
            chart: {
                type: 'column',
                height: 150,
                backgroundColor: 'transparent'
            },
            title: { text: null },
            xAxis: {
                categories: ['Late Arrivals', 'Missing Punches', 'Attendance Below 75%'],
                visible: false
            },
            yAxis: { visible: false, min: 0 },
            legend: { enabled: false },
            tooltip: {
                pointFormat: '{point.y}%'
            },
            plotOptions: {
                column: {
                    borderRadiusTopLeft: 4,
                    borderRadiusTopRight: 4,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{y}%',
                        style: {
                            fontWeight: 'bold',
                            color: '#333',
                            textOutline: 'none'
                        }
                    }
                }
            },
            series: [{
                name: 'Violations',
                colorByPoint: true,
                data: [
                    { y: 85, color: '#f26522' },
                    { y: 45, color: '#115e59' },
                    { y: 65, color: '#a2c11c' }
                ]
            }],
            credits: { enabled: false }
        });
    }
});
