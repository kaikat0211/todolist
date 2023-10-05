import React from 'react'
import Nav from 'react-bootstrap/Nav';
export default function Navbar({handleShowPage}) {


  return (
    <>
    <Nav variant="tabs" defaultActiveKey="home">
      <Nav.Item>
        <Nav.Link eventKey="home" onClick={()=>handleShowPage("home")}>HomePage</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="todolist" onClick={()=>handleShowPage("todolist")}>TodoList</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="register" onClick={()=>handleShowPage("register")}>Register</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}
