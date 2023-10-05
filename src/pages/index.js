import Todolist from '../../components/Todolist/Todolist';
import HomePage from '../../components/home&navbar/HomePage';
import Navbar from '../../components/home&navbar/Navbar';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from '../../components/Register/Register';
function App() {
  const [currentPage,setCurrentPage] = useState("home");
  const handleShowPage = (page)=>{
    setCurrentPage(page)
  }
  return (
    <>
      <Navbar handleShowPage={handleShowPage}></Navbar>
      {currentPage === "home" && <HomePage/>}
      {currentPage === "todolist" && <Todolist />}
      {currentPage === "register" && <Register handleShowPage={handleShowPage}/>}
      
    </> 
  );
}

export default App;
