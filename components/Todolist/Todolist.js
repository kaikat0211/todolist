import Input from "./Input";
import Search from "./Search";
import Listhead from "./List-head";
import Listbody from "./List-body";
import Listfoot from "./List-foot";
import { useEffect, useState } from "react";
import Listcontainer from "./List-container";
export default function Todolist(){

    const [messages, setMessages] = useState([]);
    const [mode,setMode] = useState(0);
    const [searchMes,setSearchMes] = useState("");

    const handleInput = newMessage => {
        console.log(newMessage);
        setMessages(current => [...current, newMessage]);
    }
    const handleSearch = (searchMes) => {
        setSearchMes(searchMes);
      };
    const deleteAllMessages = () => {
        setMessages([]);
      }
    const showAll = ()=> {
        setMode(0)
    }
    const showTodo = ()=>{
        setMode(1)
    }
    const showDone = ()=> {
        setMode(2)
    }

    const deleteDoneMessages = ()=>{
        setMessages((prevTodos)=> {
            return prevTodos.filter(prevdata=>prevdata.status ===1)
        })
    }

    const handleCheckboxChange = (index) => {
        setMessages((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos[index] = {
            ...updatedTodos[index],
            status: updatedTodos[index]?.status === 1 ? 2 : 1,
          };
          return updatedTodos;
        });
      };
    const handleEdit = (index)=> {
        setMessages((prevEditStatus)=>{
            const updatedMessages = [...prevEditStatus];
            updatedMessages[index] = {
                ...updatedMessages[index],
                edit: true
            };
            return updatedMessages
        });
    }
    const finishEdit = (index)=>{
        setMessages((prevMessage)=>{
            const updatedMessage = [...prevMessage];
            updatedMessage[index]={
                ...updatedMessage[index],
                edit:false,
                todo:"",
            };
            return updatedMessage
        });
    }
    const deleteTodo = (index) => {
        setMessages((prevTodos) => {
        //   const updatedTodos = [...prevTodos];
        //   updatedTodos.splice(0,1);
          const updatedTodos = prevTodos.filter((_, idx) => idx !== index);
          return updatedTodos;
        });       
      }   

    return (
        <>
            <Input handleInput={handleInput}></Input>
            {messages.length === 0 ? <></> :<Search handleSearch={handleSearch}></Search>}
            <Listcontainer>
                <Listhead showDone={showDone} showTodo={showTodo} showAll={showAll}></Listhead>
                <Listbody data={{messages,mode,searchMes}} handleCheckboxChange={handleCheckboxChange} handleEdit={handleEdit} finishEdit={finishEdit} deleteTodo={deleteTodo}></Listbody>
                <Listfoot deleteAllMessages={deleteAllMessages} deleteDoneMessages={deleteDoneMessages} ></Listfoot>
            </Listcontainer>
        </>
    )
}