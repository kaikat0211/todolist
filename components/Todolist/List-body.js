import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

export default function Listbody(props) {
  const { data, handleCheckboxChange, handleEdit, finishEdit, deleteTodo } = props;
  const renderMessage = data.mode === 0 ? data.messages : data.messages.filter(raw => raw.status === data.mode)
  return (
    <>
      {renderMessage?.filter((message) => message.todo.includes(data.searchMes)||message.editMessage.includes(data.searchMes)).map((message) => {
        const idx = data.messages.indexOf(message);
        const todoCss = message?.status === 1 ? "border-primary-subtle border-5": "border-warning-subtle border-5";
        return (
          <div className={`w-100 border d-flex mt-2 ${todoCss}`} key={idx}>
            <div style={{ width: "87%", wordWrap: "break-word" }} className="p-3 text-start fs-4">
              {message.editMessage !== message.editMessage ?
                (message.edit === false ? 
                (message.todo): 
                (<><input type="text" style={{width:"80%"}} defaultValue={message.todo} onChange={(e)=>{message.editMessage=e.target.value}}></input><button className="h-50 fs-5 d-inline-flex justify-content-center align-items-center ms-2 bg-info border-0 p-1" onClick={()=>finishEdit(idx)}>Finish</button></>
                )
                ) : 
                (message.edit === false ? 
                (message.editMessage): 
                (<><input type="text" style={{width:"80%"}} defaultValue={message.todo} onChange={(e)=>{message.editMessage=e.target.value}}></input><button className="h-50 fs-5 d-inline-flex justify-content-center align-items-center ms-2 bg-info border-0 p-1" onClick={()=>finishEdit(idx)}>Finish</button></>
                )
                )
              }
            </div>
          
            <div className="d-flex align-items-center pe-2 justify-content-between" style={{ width: "13%" }}>
              <input
                type="checkbox"
                checked={message.status === 2 ? true : false}
                style={{ width: "15px", height: "15px" }}
                onChange={() => handleCheckboxChange(idx)}
              />
              <BsFillPencilFill className="fs-5" style={{ cursor: "pointer" }} onClick={()=>handleEdit(idx)}/>
              <BsFillTrash3Fill className="pe-1 fs-4" style={{ cursor: "pointer" }} onClick={()=>deleteTodo(idx)}/>
            </div>
          </div>
        );
      })}
    </>
  );
}