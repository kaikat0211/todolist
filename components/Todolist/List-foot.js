import Button from 'react-bootstrap/Button'
export default function Listfoot({deleteAllMessages,deleteDoneMessages}){
    return (
        <>
            <div className='mt-3 d-flex justify-content-between'>
                <Button variant="danger" style={{width:"45%"}} className='text-light' onClick={()=>deleteDoneMessages()}>Delete Done tasks</Button>
                <Button variant="danger" style={{width:"45%"}} className='text-light' onClick={()=>deleteAllMessages()}>Delete All tasks</Button>
            </div>
        </>
    )
}