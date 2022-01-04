import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-materialize'
import TimesChart from "../map/TimesChart"

const dataFromAPICall = {
    "id": "ChIJSYuuSx9awokRyrrOFTGg0GY",
    "name": "Gran Morsi",
    "address": "22 Warren St, New York, NY 10007, USA",
    "types": [
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ],
    "coordinates": {
      "lat": 40.71431500000001,
      "lng": -74.007766
    },
    "rating": 4.4,
    "rating_n": 129,
    "international_phone_number": "+1 212-577-2725",
      "time_spent": [
      90,
      180
    ],
    "current_popularity": 33,
    "populartimes": [
      {
        "name": "Monday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 19, 20, 17, 0, 0, 20, 28, 26, 18, 10, 6, 0
        ]
      },
      {
        "name": "Tuesday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 27, 19, 10, 0, 0, 34, 42, 42, 35, 26, 15, 0
        ]
      },
      {
        "name": "Wednesday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 34, 23, 13, 0, 0, 36, 46, 47, 39, 26, 13, 0
        ]
      },
      {
        "name": "Thursday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 42, 42, 28, 0, 0, 59, 61, 46, 39, 32, 20, 0
        ]
      },
      {
        "name": "Friday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 44, 40, 28, 0, 0, 70, 96, 100, 80, 48, 22, 0
        ]
      },
      {
        "name": "Saturday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 42, 48, 47, 36, 21, 0
        ]
      },
      {
        "name": "Sunday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 34, 34, 28, 21, 10, 0
        ]
      }
    ],
    "time_wait": [
      {
        "name": "Monday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 15, 15, 15, 0, 15, 15, 0
        ]
      },
      {
        "name": "Tuesday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 0
        ]
      },
      {
        "name": "Wednesday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 0
        ]
      },
      {
        "name": "Thursday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 0
        ]
      },
      {
        "name": "Friday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 0
        ]
      },
      {
        "name": "Saturday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 0
        ]
      },
      {
        "name": "Sunday",
        "data": [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 0, 0, 0
        ]
      }
    ]
  }

const popTimes = dataFromAPICall.populartimes

console.log(popTimes)

const TimesTabs = () => {
    return (
        <>
            <Tabs
            className="tab-demo z-depth-1"
            //   scope="tabs-22"
            >
                {popTimes.map(popTime => {
                    return (
                        <Tab
                        // active
                        // options={{
                        //   duration: 300,
                        //   onShow: null,
                        //   responsiveThreshold: Infinity,
                        //   swipeable: false
                        // }}
                        title={popTime.name}
                        >
                            <TimesChart data={popTime.data} />
                        </Tab>
                    )
                })}
            </Tabs>
        </>
    )
}


export default TimesTabs