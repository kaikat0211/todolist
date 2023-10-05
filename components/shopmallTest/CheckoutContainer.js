import React from 'react'
export default function CheckoutContainer(props) {
  return (
    <div className='m-3 border border-2 mx-auto d-flex p-5 container rounded-3 position-relative' style={{height:"90vh"}}>
        {props.children}
    </div>
  )
}
