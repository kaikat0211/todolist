import React, { useCallback, useContext, useState } from 'react'
import { Cart } from './CheckOut'
import Swal from 'sweetalert2'
export default function CheckoutCounter({itemId, amount}) {
    const {items, setItems, page} = useContext(Cart);
    const i = itemId;
    const p = page;
    const minus = useCallback((id) => {
        setItems(prev => {
            const updatedAmount = {...prev};
            const itemIndex = updatedAmount[p].findIndex(item => item.itemId === id);
            if (updatedAmount[p][itemIndex].amount > 1) {
                updatedAmount[p][itemIndex].amount -= 1;
              }
            return updatedAmount;
        });
    },[p, setItems])
    const plus = useCallback((id) => {
        setItems(prev => {
            const updatedAmount = {...prev};
            const itemIndex = updatedAmount[p].findIndex(item => item.itemId === id);
            updatedAmount[p][itemIndex].amount += 1
            return updatedAmount;
        })
    },[p, setItems])
  return (
    <div className='d-flex justify-content-center align-items-center w-25' key={i} >
        <span onClick={()=>{
            minus(i)
            }}
        className='fs-3 ms-1' style={{ cursor: 'pointer' }}>-</span>
        <input type='text' value={amount} className='mx-1 w-25 border text-center rounded-2' readOnly onChange={()=>{}}></input>
        <span onClick={()=>(plus(i))} className='fs-4 me-1' style={{ cursor: 'pointer' }}>+</span>
    </div>
  )
}
