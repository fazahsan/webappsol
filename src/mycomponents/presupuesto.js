import React from 'react'
import Button from "react-bootstrap/Button"
import Secondo from "../mycomponents/othercomponents/Secondo"
import {useNavigate} from "react-router-dom"
export default function Presupuesto() {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [showDiv, setshowDiv] = React.useState(true);
    const [showDiv2, setshowDiv2] = React.useState(true);
    const [showDiv3, setshowDiv3] = React.useState(false);
    const [show, setshow] = React.useState(true);
    const [show1, setshow1] = React.useState(false);
    const navigate =useNavigate();
    var x="low";
    var y="high";
    
  
    const handleChangeOne = () => {
        if (checkedOne===false){
          
          console.log(x);
      setCheckedOne(!checkedOne);
      setCheckedTwo(false);
      setshowDiv(true);
      setshowDiv2(false);
    }
       
       

      
      else {
        console.log("by")
        setCheckedOne(false)
        setshowDiv(true);
        setshowDiv2(true);
       

      }
      
        
    };
  
    const handleChangeTwo = () => {
        if(checkedTwo===false){
          y=y+1;
      setCheckedTwo(!checkedTwo);
      setCheckedOne(false);
      setshowDiv2(true);
      setshowDiv(false);
        }
        else {
            setCheckedTwo(false);
            setshowDiv(true);
            setshowDiv2(true);
        }
        
      
    };
    const onclick2=()=>{
      navigate("/contact");
    }
    
     const  onclick=()=>{
        if((checkedOne===true)){
         setshowDiv3(true);
         if(show===true || show1===true){
          setshow(false);
          
         }
}
        else if(checkedTwo===true){
            alert("here comes the other option")
        }
        else{
          alert("escoge una opcion.")
        }

      }
  
  
    return (
        <>
        <div style={{backgroundColor:"lightgray" }}>
        <h3 style={{marginTop:20}}>Para tener un presupuesto concreto contacta con nosotros
        <Button className="btn btn-info" onClick={onclick2} style={{marginLeft:20}}>Contactar</Button>
        </h3>
        <h3>Quiero hacer pagina web</h3>
        
      <div className="check1" style={{display: showDiv ? 'block' : 'none' }}>
        <Checkbox
          label="Si"
          value={checkedOne}
          onChange={handleChangeOne}
        />
        </div>
        <div className="check2" style={{display: showDiv2 ? 'block' : 'none' }}>
        <Checkbox
          label="No"
          value={checkedTwo}
          onChange={handleChangeTwo}
        />
      </div>
      <div className="check3" style={{display: showDiv3 ? 'block' : 'none' }}>
        <Secondo/>
      </div>
      
      <Button onClick={onclick} style={{display: show ? 'block' : 'none' }}> Siguente </Button>
      <Button onClick={onclick} style={{display: show1 ? 'block' : 'none' }}> Siguente </Button>
      </div>
      </>
    )
}

const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };