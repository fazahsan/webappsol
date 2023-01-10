import React from 'react'

import Button from "react-bootstrap/Button"

export default function Secondo() {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [showDiv, setshowDiv] = React.useState(true);
    const [showDiv2, setshowDiv2] = React.useState(true);
  
    const handleChangeOne = () => {
        if (checkedOne==false){
      setCheckedOne(!checkedOne);
      setCheckedTwo(false);
      setshowDiv(true);
      setshowDiv2(false);
    }
       else {
        setCheckedOne(false)
        setshowDiv(true);
        setshowDiv2(true);
       

      }
      
        
    };
  
    const handleChangeTwo = () => {
        if(checkedTwo==false){
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
    
     const  onclick=()=>{
        if((checkedOne==true) || (checkedTwo==true)){
        return(
          <Secondo/>
        )}
        else{
            alert("escoge una opcion.")
        }

      }
  
  
    return (
        <>
        
        <h3>Quiero hacer Aplicacion de moviles</h3>
        
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
      
      
      <Button onClick={onclick}> Siguente </Button>
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