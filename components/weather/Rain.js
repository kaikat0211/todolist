import React from 'react'
import {TiWeatherDownpour} from 'react-icons/ti'
export default function Rain(props) {
  return (
    <div className='w-100 d-flex mt-1 align-items-center'>
    <TiWeatherDownpour className='fs-3 me-3'/>
    <div>{props.children}%</div>
  </div>
  )
}
