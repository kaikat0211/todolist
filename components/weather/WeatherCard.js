import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Location from './Location'
import Description from './Description'
import Temperature from './Temperature'
import Wind from './Wind'
import Rain from './Rain'
import dayjs from 'dayjs'
import {TbReload} from 'react-icons/tb'
import {BiLoader} from 'react-icons/bi'
import { useState } from 'react'
export default function WeatherCard() {
const Refresh = styled.div`
  svg {
    animation: rotate infinite 1.5s linear;
    animation-duration: ${({ isLoading }) => (isLoading ? '1.5s' : '0s')};
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`
    const AUTHORIZATION_KEY = 'CWB-4FB9B402-9979-414A-92E4-90A0FCB8A9BF';
    const LOCATION_NAME = '臺北';
    const LOCATION_NAME_FORECAST = '臺北市';
    const [currentTheme,setCurrentTheme] = useState('light');
    
    const [weatherElement,setWeatherElement] = useState({
      locationName:'',
      description:'',
      windSpeed: 0,
      temperature: 0,
      rainPossibility: 0,
      observationTime: '2023-06-20 22:10:00',
      comfortability:'',
      weatherCode: 0,
      isLoading:true,
    })

    const fetchWeatherElement = ()=>{
        setWeatherElement(prevState=>({
            ...prevState,
            isLoading:true,
        }))
        fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}
        `)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                const locationData = data.records.location[0];
                const weatherElements = locationData.weatherElement.reduce(
                    (neededElements,item)=>{
                        if(['WDSD','TEMP'].includes(item.elementName)){
                            neededElements[item.elementName] = item.elementValue
                        }
                        return neededElements
                    }
                ) 
                setWeatherElement(prev=>({...prev,
                    observationTime: locationData.time.obsTime,
                    locationName: locationData.locationName,
                    temperature: weatherElements.TEMP,
                    windSpeed: weatherElements.WDSD,
                    isLoading:false,
                  }));
            })
            
    }
    const fetchWeatherForecast = ()=>{
      fetch(
        `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}
        `
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          const locationData = data.records.location[0];
          const weatherElements = locationData.weatherElement.reduce((neededElements,item)=>{
            if(['Wx', 'PoP', 'CI'].includes(item.elementName)){
              neededElements[item.elementName]=item.time[0].parameter
            }
            return neededElements;
          },
          {}
          )
          setWeatherElement((prevState) => ({
            ...prevState,
            description: weatherElements.Wx.parameterName,
            weatherCode: weatherElements.Wx.parameterValue,
            rainPossibility: weatherElements.PoP.parameterName,
            comfortability: weatherElements.CI.parameterName,
          }));
        });
            }
    useEffect(()=>{
        fetchWeatherElement();
        fetchWeatherForecast();
    },[])
    const {
      observationTime,
      locationName,
      description,
      windSpeed,
      temperature,
      rainPossibility,
      isLoading,
      comfortability,
    } = weatherElement;
  return (
    <div className='border border-primary-subtle mt-2 mx-auto p-3' style={{width:"20%",height:"40%"}}>
        <Location>{locationName}</Location>
        <Description><span>{description}</span><span className='me-1'>{comfortability}</span></Description>
        <Temperature>{Math.round(temperature)}</Temperature>
        <Wind>{windSpeed}</Wind>
        <Rain>{rainPossibility}</Rain>
        <Refresh isLoading={isLoading} className='mt-3 d-flex justify-content-end align-items-center'>最後觀測時間：{new Intl.DateTimeFormat('zh-TW', {
            hour: 'numeric',
            minute: 'numeric',
        }).format(dayjs(observationTime))}
        {isLoading ? <BiLoader className='ms-1' style={{fontSize:"16px",}}/> : <TbReload className='ms-1 ' style={{fontSize:"16px",}} onClick={()=>{
          fetchWeatherElement();
          fetchWeatherForecast();
        }}/>}
        </Refresh>
    </div>
  )
}
