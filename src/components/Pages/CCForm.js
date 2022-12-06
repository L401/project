import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';

async function submitCCInfo(credentials) {
    return fetch('http://localhost:8080/creditcard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function CCForm({ setToken }) {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState();
    const [cardName, setCardName] = useState();
    const [expDate, setExpDate] = useState();
    const [cvv, setCVV] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await submitCCInfo({
            cardNumber,
            cardName,
            expDate,
            cvv
        });
        setToken(token);
    }

    const redirectToTickets = () => {
        navigate('../Pages/BookTickets');
    }

    return (
        <div className='ccform-wrapper'>
            <h1 style={{ color: 'white' }}>
                Enter Credit Card Information
            </h1>
            <form onSubmit={handleSubmit}>
                <Row>
                    <label style={{ color: 'white' }}>
                        <p>Card Number</p>
                        <input type='text' onChange={e => setCardNumber(e.target.value)} />
                    </label>
                </Row>
                <Row>
                    <label style={{ color: 'white' }}>
                        <p>Name on Card</p>
                        <input type='text' onChange={e => setCardName(e.target.value)} />
                    </label>
                </Row>
                <Row>
                    <label style={{ color: 'white' }}>
                        <p>Expiration Date</p>
                        <input type='text' onChange={e => setExpDate(e.target.value)} />
                    </label>
                </Row>
                <Row>
                    <label style={{ color: 'white' }}>
                        <p>CVV</p>
                        <input type='text' onChange={e => setCVV(e.target.value)} />
                    </label>
                </Row>
                <div style={{paddingLeft: '25px'}}>
                    <Button variant="secondary" type='submit'>Submit</Button>
                    <Button variant="secondary" type='submit' onClick={redirectToTickets}>Cancel</Button>
                </div>

            </form>
        </div>
    )
}