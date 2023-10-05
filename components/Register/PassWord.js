import React from 'react'
import { useState ,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import {MdOutlineSmsFailed} from 'react-icons/md'
import {GiConfirmed} from 'react-icons/gi'

export default function PassWord({formData,setFormData,error,setError}) {
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [isConfirmPasswordReadOnly,setIsConfirmPasswordReadOnly]= useState(true);
  const passwordSubmit = e =>{ 
    setPassword(e.target.value);
    setIsConfirmPasswordReadOnly(false)
    if(e.target.value === ""){
      setIsConfirmPasswordReadOnly(true)
      setConfirmPassword("");
    }
    setFormData(prevData=>({
      ...prevData,
      password:password
    }))
  }
  const handleConfirmPassword = e =>{
    setConfirmPassword(e.target.value);
  }
  useEffect(()=>{
    if(password === ""){
      setConfirmPassword('')
    };
    setError(password !== confirmPassword && confirmPassword !== "")
  },[password,confirmPassword,setError])
  return (
    <>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={passwordSubmit} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} value={confirmPassword} readOnly={isConfirmPasswordReadOnly} required/>
            {(password && confirmPassword && password !== confirmPassword) &&(
              <div className='d-flex mt-3'><MdOutlineSmsFailed className='text-danger fs-4 me-2'/><span >Your password must be the same</span></div> 
            )}
            {(password && confirmPassword && password === confirmPassword) &&(
              <div className='d-flex mt-3 '><GiConfirmed className='text-success fs-4 me-2'/><span>Your password is be the same!!! good guy.</span></div>)
            }
        </Form.Group>
    </>
  )
}
