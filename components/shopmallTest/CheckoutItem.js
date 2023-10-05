import React,{useCallback, useContext, useMemo, useState} from 'react'
import CheckoutCounter from './CheckoutCounter'
import { Cart } from './CheckOut'
import {HiOutlineTrash} from 'react-icons/hi'
import Swal from 'sweetalert2'
import EmptyCart from '../../images/emptycart.png'
export default function CheckoutItem() {
    const {items, showPages, setItems, page} = useContext(Cart)
    const handleRemove = useCallback((removeItem) => {
      Swal.fire({
        title: `確定要刪除${removeItem.itemName}`,
        text: "刪除後需重新將商品加入購物車",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          setItems(prev =>{
            const updatedItems = { ...prev };
            updatedItems[page] = updatedItems[page].filter(item => item.itemId !== removeItem.itemId);
            return updatedItems;
          } )
          Swal.fire(
            '刪除成功!',
            `已將${removeItem.itemName}從購物車移除`,
            'success'
          )
        }
      });
    },[page, setItems])
    const itemCart = useCallback((item) =>(
    <div key={item.itemId} className='border rounded-3 d-flex p-2 mb-4 position-relative'  style={{ width: "95%", height: "25%", boxShadow: "4px 2px 5px -2px #7A7070" }}>
      <img src={item.src} className='overflow-hidden object-fit-cover' style={{ width: "25%",height:"100%",}} alt="Item"></img>
      <div className='d-flex align-items-center ms-3 w-100 justify-content-between'>
        <div>{item.itemName}</div>
        <div className='d-flex align-items-center justify-content-between' style={{width:"70%"}}>
          <div>{`$${item.price}`}</div>
          <CheckoutCounter itemId={item.itemId} item={item} amount={item.amount}/>
          <div className='me-5' style={{width:"5%"}}>{`$${item.price*item.amount}`}</div>
          <HiOutlineTrash className='me-3 fs-2' onClick={() => handleRemove(item)}/>
        </div>
      </div>
    </div>),[page,setItems])
    const memoizedItemCart = useMemo(() => {
      return showPages(items).map(item=>(itemCart(item))) 
    },[showPages, items])
  return (
    <>
      {showPages(items).length !== 0 ? (<div className='d-flex flex-column overflow-auto mt-2 me-2 position-relative' style={{ height: "76%" }}>
        {memoizedItemCart}
      </div>) : (<div className='d-flex flex-column mt-2 me-2 position-relative justify-content-center align-items-center' style={{ height: "76%" }}>
        <img src={EmptyCart} className='w-25 border-bottom border-3' style={{height:"29%"}}></img>
        <div className='fs-5 mt-2'>你的購物車空空如也</div>
      </div>)}
      {/* <div className='d-flex flex-column overflow-auto mt-2 me-2 position-relative' style={{ height: "76%" }}>
      {console.log('page:', page)}
        {memoizedItemCart}
      </div> */}
    </>
  );
}
