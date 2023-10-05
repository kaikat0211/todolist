import React from 'react'
export default function Refresh(props) {
  const {} = props;

  return (
    <div className='d-flex justify-content-end mt-2 align-items-center' style={{fontSize:"12px"}}>
    最後觀測時間:{props.children}
    </div>
  )
}
