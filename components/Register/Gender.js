import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Gender({formData,setFormData}) {
  const handleGender = e =>{
    setFormData(prevData=>({
      ...prevData,
      gender:e.target.value
    }))
  }
  return (
  <>
    <Form.Group className='mb-3' controlId='forBasicGender'>
        <Form.Label>Gender</Form.Label>
            <div>
                <Form.Check inline label='Male' type='radio' name='gender' value='male' id='male' onChange={handleGender} required />
                <Form.Check inline label='Female' type='radio' name='gender' value='female' id='female' onChange={handleGender}/>
                <Form.Check inline label='other' type='radio' name='gender' value='other' id='other' onChange={handleGender}/>
            </div>
    </Form.Group>  
  </>
  )
}
