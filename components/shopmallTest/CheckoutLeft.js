import React from 'react'
import CheckoutLeftHead from './CheckoutLeftHead'
import CheckoutItem from './CheckoutItem'
export default function CheckoutLeft({page, items, setItems, amount, showPages, setAmount}) {
  return (
    <div className='col-7'>
        <CheckoutLeftHead />
        <CheckoutItem />
    </div>
  )
}
