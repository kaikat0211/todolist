import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {AiOutlineSearch} from 'react-icons/ai';
import { useState,useEffect } from 'react';
export default function Search({handleSearch}) {
    const [searchMes,setSearchMes] = useState("");
    useEffect(()=>{
        setSearchMes("")
    },[handleSearch])
  return (
    <>
        <div className='container mt-5 w-50 d-flex justify-content-end'>
            <InputGroup className="mb-3 w-50" >
                <Form.Control
                placeholder="search Todo"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchMes}
                onChange={e=>setSearchMes(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2" className='d-flex justify-content-center align-items-center' onClick={()=>{handleSearch(searchMes)}}>
            <AiOutlineSearch></AiOutlineSearch>
            </Button>
    </InputGroup>
        </div>
    </>
  )
}
