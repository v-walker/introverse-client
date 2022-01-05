import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Tab, Tabs } from 'react-materialize'
import TimesChart from "../map/TimesChart"
import {selectPopTimesData} from './mapSlice';

const dummyPopTimesData = [
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
]

const TimesTabs = () => {

  const realData = useAppSelector(selectPopTimesData)
  // console.log(realData.populartimes)
  console.log(realData)
  let dataForChart: any = []

  if(realData === null || realData.populartimes === undefined){
    dataForChart = dummyPopTimesData
    console.log(dataForChart)
  }

  else if(realData !== null){
    dataForChart = realData.populartimes
    console.log(dataForChart)
  }

  else if(realData.populartimes === undefined){
    dataForChart = dummyPopTimesData
    console.log(dataForChart)
  }

  return (
      <>
        <div id="times_chart">
            {realData === null || realData.populartimes === undefined
            ?
            <>
            <h4 className='center-align'>No Data</h4>
            </>
            :
            <>
              <Tabs
                className="tab-demo z-depth-1"
                //   scope="tabs-22"
              >
                {dataForChart.map((popTime: any) => {
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
            }
        </div>
      </>
  )
}


export default TimesTabs