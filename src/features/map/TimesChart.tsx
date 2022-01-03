import React, { useEffect } from 'react';
import "chart.js/auto"
import { Chart } from "react-chartjs-2"

const dataSet = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 44, 40, 28, 0, 0, 70, 96, 100, 80, 48, 22, 0]

const backgroundColorArr = dataSet.map(data => {
    if(data <= 33) {
        return 'rgba(239, 83, 80, 1)'
    }
    if(data > 33 && data < 67) {
        return 'rgba(255, 184, 77, 1)'
    }
    if(data >= 67) {
        return 'rgba(77, 182, 172, 1)'
    }
})

// console.log(backgroundColorArr)

const TimesChart = () => {
    return (
        <>
            <Chart
                type="bar"
                data={{
                    labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"],
                    datasets: [
                        {
                            data: dataSet,
                            backgroundColor: backgroundColorArr,
                            // borderColor: [
                            //     'rgba(0, 70, 240, 1)',
                            // ],
                            // borderWidth: 1
                        }
                    ]
                }}
                // height={45}
                // width={100}
                options={{
                    // indexAxis: "y",
                    maintainAspectRatio: true,
                    aspectRatio: 1.6,
                    layout: {
                        // padding: 20
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            display: false,
                            labels: {
                                color: 'rgba(0, 0, 0)',
                                boxHeight: 25,
                                padding: 30
                            }
                        }
                    },
                    scales: {
                        x: {
                            // stacked: true,
                            ticks: {
                                color: 'rgba(0, 0, 0)'
                            }
                        },
                        y: {
                            // stacked: true,
                            ticks: {
                                color: 'rgba(0, 0, 0)'
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default TimesChart;