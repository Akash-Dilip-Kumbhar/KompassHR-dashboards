// ===== INITIALIZE LEAVE CHART =====
document.addEventListener('DOMContentLoaded', function() {
    initializeLeaveChart();
    initializeAttendanceChart();
});

function initializeLeaveChart() {
    const ctx = document.getElementById('leaveChart');
    
    if (!ctx) return;
    
    const chartData = {
        labels: ['On Time', 'Late Attendance', 'Work From Home', 'Absent', 'Sick Leave'],
        datasets: [{
            data: [1254, 32, 658, 14, 68],
            backgroundColor: [
                getComputedStyle(document.documentElement).getPropertyValue('--accent-2').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--success').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--accent-1').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--danger').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--warning').trim()
            ],
            borderColor: '#fff',
            borderWidth: 3,
            borderRadius: 0
        }]
    };
    
    new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 12
                    },
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    displayColors: true,
                    padding: 16,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed;
                        }
                    }
                }
            },
            cutout: '70%',
            animation: {
                animateRotate: true,
                animateScale: false
            }
        }
    });
}

function initializeAttendanceChart() {
    const ctx = document.getElementById('attendanceChart');
    
    if (!ctx) return;
    
    // Total hours in circular progress: 5:45:32
    const totalHours = 5 + (45/60) + (32/3600); // 5.759 hours
    const maxHours = 8; // Assuming 8 hour work day
    const percentage = (totalHours / maxHours) * 100;
    
    const chartData = {
        labels: ['Worked', 'Remaining'],
        datasets: [{
            data: [percentage, 100 - percentage],
            backgroundColor: [
                '#1cc88a', // Green for worked hours
                '#f0f0f0'  // Light gray for remaining
            ],
            borderColor: '#fff',
            borderWidth: 0,
            borderRadius: 0
        }]
    };
    
    new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            cutout: '75%',
            animation: {
                animateRotate: true,
                animateScale: false
            }
        }
    });
}

// ===== APPLY LEAVE BUTTON HANDLER =====
document.addEventListener('DOMContentLoaded', function() {
    const applyLeaveBtn = document.querySelector('.btn-apply-leave');
    if (applyLeaveBtn) {
        applyLeaveBtn.addEventListener('click', function() {
            alert('Apply New Leave functionality will be added here');
        });
    }

    // Punch Out Button Handler
    const punchOutBtn = document.querySelector('.btn-punch-out');
    if (punchOutBtn) {
        punchOutBtn.addEventListener('click', function() {
            alert('Punch Out functionality will be added here');
        });
    }
});

// ===== APPROVAL ACTION BUTTON HANDLERS =====
document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('Action handler will be implemented here');
        });
    });
});

// ===== SEARCH FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            console.log('Searching for:', this.value);
            // Search functionality can be added here
        });
    }
});
const ctx = document.getElementById('timelineChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [
            {
                label: 'Productive',
                data: [4],
                backgroundColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--productive'),
                stack: 'timeline',
                borderRadius: 6
            },
            {
                label: 'Break',
                data: [1],
                backgroundColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--break'),
                stack: 'timeline',
                borderRadius: 6
            },
            {
                label: 'Productive',
                data: [3],
                backgroundColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--productive'),
                stack: 'timeline',
                borderRadius: 6
            },
            {
                label: 'Overtime',
                data: [2],
                backgroundColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--overtime'),
                stack: 'timeline',
                borderRadius: 6
            }
        ]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        scales: {
            x: {
                stacked: true,
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1,
                    callback: function(value) {
                        return (6 + value) + ":00";
                    }
                }
            },
            y: {
                stacked: true,
                display: false
            }
        }
    }
});
