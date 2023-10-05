import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsBook} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
export default function Input({handleInput}) {
  const [message,setMessage] = useState("");

  useEffect(() => {
    setMessage("");
  }, [handleInput])

  const returnMessage = () => {
    const data = {
      todo: message,
      status: 1,
      edit:false,
      editMessage:message,
    }

    handleInput(data);
  }

  /*   */
  return (
    <>
      <div className='container mt-3 d-flex flex-column align-items-center' style={{width:"50%",height: "150px"}}>
        <h1>TodoList</h1>
          <div className='w-100 d-flex'>
            <InputGroup className="mb-3 mx-auto  pt-3 w-100 me-3" >
              <InputGroup.Text id="basic-addon1">
              <BsBook></BsBook>
              </InputGroup.Text>
              <Form.Control 
                value={message}
                placeholder="Title"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e=>setMessage(e.target.value)}
              />
            </InputGroup>
            <div className='d-flex justify-content-center align-items-center'>
            <Button className='h-50 d-flex align-items-center fs-5' style={{width:"100%"}} onClick={()=>returnMessage()}>Sent</Button>
            </div>
          </div>
      </div>
    </>
  );
}
