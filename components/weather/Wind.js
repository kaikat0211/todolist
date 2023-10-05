import React from 'react'
import {TiWeatherWindyCloudy} from 'react-icons/ti'
export default function Wind(props) {
  return (
    <div className='w-100 d-flex mt-3'>
      <TiWeatherWindyCloudy className='fs-3 me-3'/>
      <div>{props.children} m/h</div>
    </div>
  )
}
