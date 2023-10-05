import React from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'
export default function Temperature(props) {
  return (
    <div className='w-100 d-flex justify-content-between mt-3'>
        <div className='w-50 d-flex' style={{fontSize:"50px"}}>{props.children}{"\u2103"}</div>
        <div className='d-flex align-items-center text-warning me-2' style={{fontSize:"70px"}}><TiWeatherPartlySunny/></div>
    </div>
  )
}
