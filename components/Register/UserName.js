import React from 'react'
import Form from 'react-bootstrap/Form';

export default function UserName({formData,setFormData}) {
  const handleUserName = e=> {
    const userName = e.target.value;
    setFormData(prevData=>({
      ...prevData,
      username:userName
    }))
  }
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={handleUserName} required/>
      </Form.Group>
    </>
  )
}
