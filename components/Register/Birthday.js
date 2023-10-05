import React from 'react'
import Form from 'react-bootstrap/Form';
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';

export default function Birthday({formData,setFormData}) {
  const handleBirthday = date=>{
    setStartDate(date);
    setFormData(prevData=>({
      ...prevData,
      birthday:date
    }))
  }
  const [startDate,setStartDate] = useState(null)
  return (
    <>
        <Form.Group className='mb-3' controlId='forBasicBirthday'>
            <Form.Label>Birthday</Form.Label>
            <ReactDatePicker
                selected={startDate}
                onChange={handleBirthday}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select a date"
                required
            />
        </Form.Group>
    </>
  )
}
