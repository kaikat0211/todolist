import React from 'react'
import jayni from '../../../images/jayni.png'
export default function CheckOutMember() {
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <h4>Member Name</h4>
        <img src={jayni} className='border rounded-circle' style={{width:"20%",height:"20%"}}></img>
    </div>
  )
}
