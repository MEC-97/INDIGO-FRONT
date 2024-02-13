import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Detail from './component/Detail';
//import Navbar from './components/Navbar';
//import  {useLocation} from 'react-router-dom'
//import Detail from './components/Detail';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  //const {pathname} = useLocation()
  return (
    <div >
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
