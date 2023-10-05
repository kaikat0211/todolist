import pikaImage from "../../public/images/pika.jpg"
import pokaImage from "../../public/images/poka.png"
export default function Listcontainer(props) {
    return (
        <>
            <div className="container w-50">
                {props.children}
                
            </div>
            <img src={pokaImage.src} alt="Poka" className=" object-fit-contain" style={{width:"400px",height:"400px",position:"fixed",left:"0%",top:"7%"}}></img>
            <img src={pikaImage.src} alt="Pika" className="bottom-0 object-fit-contain" style={{width:"400px",height:"400px",position:"fixed",right:"0"}}></img>
        </>
    )
}