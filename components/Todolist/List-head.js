import Button from 'react-bootstrap/Button'
export default function Listhead({showDone,showTodo,showAll}){
    return (
        <>
            <div className='mb-3'>
                <p className="fs-2 text-info bg-success-subtle d-flex justify-content-center">Your task</p>
                <div className='d-flex justify-content-between'>
                <Button variant="primary" style={{width:"30%"}} className='text-light' onClick={() => showAll()}>All</Button>{' '}
                <Button variant="primary" style={{width:"30%"}} className='text-light' onClick={()=> showTodo()}>Todo</Button>{' '}
                <Button variant="primary" style={{width:"30%"}} className='text-light' onClick={()=> showDone()}>Done</Button>{' '}
                </div>
            </div>
           
        </>
    )
}