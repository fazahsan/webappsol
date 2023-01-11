//import logo from './logo.svg';
import './App.css';
//import './mycomponents/style.css';
import Header from "./mycomponents/Header"
//import BasicExample from './mycomponents/Navbar';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
//import Bars from './mycomponents/Bars';
//import Form from "./mycomponents/contactform";
import Try from "./mycomponents/try";
import  Footer  from './mycomponents/footer';
import {ContactUs} from "./mycomponents/email"
import Services from './mycomponents/services';
import Presupuesto from './mycomponents/presupuesto';
import Inform from './mycomponents/inform';
import Inform2 from './mycomponents/infor2';
import Respon from './mycomponents/respon';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={ <Try/>} />
        <Route path="/service" element={ <Services/>} />
        <Route path="/contact" element={ <ContactUs/>} />
        <Route path="/presupuesto" element={ <Presupuesto/>} />
        <Route path="/inform" element={ <Inform/>} />
        <Route path="/infor2" element={ <Inform2/>} />
        <Route path="/res" element={ <Respon/>} />

        
        
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
