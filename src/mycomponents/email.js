import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from "react-router-dom"
import Form from 'react-bootstrap/Form'
import { Container,Button } from "react-bootstrap";

export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    if((form.current.email.value).length==0 || ((form.current.message.value).length==0)){
      alert("please fill the form");
      console.log("no value",form.current.email.value)
    }
    else{
    emailjs.sendForm('service_pcsn8mh', 'template_d3vpty5', form.current,'BAQfm91UiiOueWDHb')
      .then((result) => {
       const goToLoginPage = () => navigate('/');
       goToLoginPage();
      }, (error) => {
          console.log(error.text);
      });
  };}

  return (


    <Container style={{marginTop:50,marginLeft:20,backgroundColor:'grey'}}>
        <Form ref={form} >
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label styale={{color:"blue"}}>Email</Form.Label>
          <Form.Control type="email" placeholder=" Su email" name="email"  />
          <Form.Text className="text-muted">
            no compartimos tu e-mail, es solo para nuestra comunicacion. 
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label >Escriba nos lo que necesita .</Form.Label>
    <Form.Control as="textarea" rows={6} name="message" />
  </Form.Group>
        <Button variant="primary" type="submit" onClick={sendEmail} >
          Mandar
        </Button>
      </Form>
      </Container>
  
  );
};