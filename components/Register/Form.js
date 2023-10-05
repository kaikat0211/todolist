import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Email from './Email'
import PassWord from './PassWord'
import UserName from './UserName'
import Birthday from './Birthday'
import Gender from './Gender';
import "react-datepicker/dist/react-datepicker.css";
export default function FormBody({handleShowPage}) {
    const [formData,setFormData] = useState({
      email:'',
      password:'',
      username:'',
      birthday:'',
      gender:'',
    });
    const [error,setError] = useState(false);
    const handleSubmit = e=>{
      e.preventDefault();
      if(error){
        return;
      }
      const data = JSON.stringify(formData);
      console.log(formData)
      handleShowPage('home')
    }
 
  return (
  <>
    <h1 className='d-flex justify-content-center'>Create Account</h1>
    <div className='container' style={{width:"25%"}}>
        <Form onSubmit={handleSubmit}>
            <Email setFormData={setFormData} formData={formData}/>
            <PassWord setFormData={setFormData} formData={formData} setError={setError} error={error}/>
            <UserName setFormData={setFormData} formData={formData}/>
            <Birthday setFormData={setFormData} formData={formData}/>
            <Gender setFormData={setFormData} formData={formData}/>
            <Button variant="primary" type="submit" >
            Submit
            </Button>
        </Form>
    </div>
  </>
  )
}
