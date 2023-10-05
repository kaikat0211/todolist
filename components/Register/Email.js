import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Email({formData,setFormData}) {
    const emailSubmit = e =>{
      const email = e.target.value
      setFormData(prevData=>({
        ...prevData,
        email:email
      }))
    }
  return (
    <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={emailSubmit} required/>
            <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
    </>
  )
}
