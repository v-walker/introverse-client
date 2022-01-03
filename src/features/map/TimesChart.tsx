import React, { useEffect } from 'react';
import "chart.js/auto"
import { Chart } from "react-chartjs-2"

const TimesChart = () => {
    return (
        <>
            <Chart
                    type="bar"
                    data={{
                        labels: ["Weight", "Acceleration", "On-Road Traction", "Off-Road Traction", "Mini-Turbo", "Ground Speed", "Water Speed", "Anti-Gravity Speed", "Air Speed", "Ground Handling", "Water Handling", "Anti-Gravity Handling", "Air Handling"],
                        datasets: [
                            {
                                label: "Driver",
                                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                                backgroundColor: [
                                    'rgba(0, 70, 240, 1)',
                                ],
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
                                reverse: false,
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