import React from 'react'
import Form from './Form'
import miuha from '../../public/images/miuha.png'
import hogeda from '../../public/images/hogeda.png'
export default function Register({handleShowPage}) {

  return (
    <>
        <Form handleShowPage={handleShowPage}/>
        <img src={miuha.src} alt="miuha" className="bottom-0 object-fit-contain" style={{width:"400px",height:"400px",position:"fixed",left:"10%"}}></img>
        <img src={hogeda.src} alt="hogeda" className=" object-fit-contain" style={{width:"400px",height:"400px",position:"fixed",right:"10%",top:"7%"}}></img>
    </>
  )
}
