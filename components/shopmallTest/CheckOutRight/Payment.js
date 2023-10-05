import React, { useState } from 'react'
import linepay from '../../../images/Linepay.png'
import visa from '../../../images/visa.svg'
import wallet from '../../../images/wallet.svg'
import {HiCheckCircle} from 'react-icons/hi'
import styled from '@emotion/styled'
import { border } from '@mui/system'

export default function Payment({selected, setSelected}) {
    const handleClick = (index) => {
        setSelected(index)
    }
    const select3Class = `border rounded-3 border-3 py-4 col-3 position-relative d-flex justify-content-center ${selected === 2 ? 'border-danger-subtle bg-warning-subtle ' : 'border-dark-subtle'}`
    const select2Class = `border border-3 rounded-3 col-3 position-relative ${selected === 1 ? 'border-danger-subtle bg-warning-subtle ' : 'border-dark-subtle'}`
    const select1Class = `border border-3 rounded-3 py-4  col-3 position-relative ${selected === 0 ? 'border-danger-subtle bg-warning-subtle ' : 'border-dark-subtle'}`
  return (
    <div className='d-flex justify-content-between mt-3' style={{height:"15%"}}>
        <div className={select1Class} onClick={()=>{handleClick(0)}}>
            {selected === 0 &&<HiCheckCircle className='position-absolute top-0 fs-4 text-danger' style={{right:"0"}}/>}
            <img src={wallet} className='w-100 px-3 position-absolute' style={{top:'15%'}}></img>
        </div>
        <div className={select2Class} onClick={()=>{handleClick(1)}}>
            {selected === 1 &&<HiCheckCircle className='position-absolute top-0 fs-4 text-danger' style={{right:"0"}}/>}
            <img src={visa} className='w-100 px-3 position-absolute' style={{top:'30%'}}></img>
        </div>
        <div className={select3Class} onClick={()=>{handleClick(2)}}>
            {selected === 2 &&<HiCheckCircle className='position-absolute top-0 fs-4 text-danger' style={{right:"0"}}/>}
            <img src={linepay} className='w-100  position-absolute' style={{top:'30%'}}></img>
        </div>
        
    </div>
  )
}
