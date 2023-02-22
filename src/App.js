import './styles/App.css'
import Navbar from './Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Home from './Home';
import { BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="proj" element={<Project/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
