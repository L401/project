import React, { useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form'
import FormSelect from 'react-bootstrap/esm/FormSelect';
import Button from 'react-bootstrap/esm/Button';
import { Route, useNavigate, Link, Routes } from "react-router-dom";

export default function BookTicket() {

    const navigate = useNavigate();
    const redirectToPayment = () => {
        //Redirect to the python page
        navigate("../Pages/CCForm");
      };

    return(
        <div >
            <h2 style={{color: 'white'}}>Book Tickets</h2>
            <Row>
                <Col xs={1}>
                <h3 style={{fontSize: 20, color: 'white'}}>Theatre</h3>
                    <FormSelect
                       aria-label="Theatre"
                       onChange={(e) => {
                            console.log(e.target.value) 
                       }} 
                    >
                        <option value='AMC'>AMC</option>
                        <option value='Red Raider Theatre'>Red Raider Theatre</option>
                    </FormSelect>
                </Col>
                <Col xs={1}>
                <h3 style={{fontSize: 20, color: 'white'}}># of seats</h3>
                <FormSelect
                       aria-label="# of seats"
                       onChange={(f) => {
                            console.log(f.target.value) 
                       }} 
                    >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </FormSelect>
                </Col>
                <Col xs={1}>
                <h3 style={{fontSize: 20, color: 'white'}}>Showtime</h3>
                <FormSelect
                       aria-label="Showtime"
                       onChange={(z) => {
                            console.log(z.target.value) 
                       }} 
                    >
                        <option value='11:30'>11:30 am</option>
                        <option value='3:00'>3:00 pm</option>
                        <option value='8:00'>8:00 pm</option>
                    </FormSelect>
                </Col>
            </Row>
            <div style={{paddingLeft: "360px"}}>
                <Button style={{textAlign: 'left'}} variant="secondary"
                    onClick={redirectToPayment} 
                >
                Submit
                </Button>
            </div>
        </div>
    )
}