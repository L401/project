import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function BookTicket() {

    return(
        <div >
            <h2 style={{color: 'white'}}>Book Tickets</h2>
            <Row>
                <Col xs={1}>
                    <Dropdown>
                        <DropdownToggle style={{color: 'black', backgroundColor: 'white', textAlign: 'left',width: '105px'}} variant="success" id="dropdown-basic">
                            Theatre
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Red Raider Theatre</DropdownItem>
                            <DropdownItem>AMC</DropdownItem>
                            <DropdownItem>Alamo Drafthouse</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col xs={1}>
                    <Dropdown>
                        <DropdownToggle style={{color: 'black', backgroundColor: 'white', textAlign: 'left',width: '105px'}} variant="success" id="dropdown-basic">
                            # of seats
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>2</DropdownItem>
                            <DropdownItem>3</DropdownItem>
                            <DropdownItem>4</DropdownItem>
                            <DropdownItem>5</DropdownItem>
                            <DropdownItem>6</DropdownItem>
                            <DropdownItem>7</DropdownItem>
                            <DropdownItem>8</DropdownItem>
                            <DropdownItem>9</DropdownItem>
                            <DropdownItem>10</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col xs={1}>
                    <Dropdown>
                        <DropdownToggle style={{color: 'black', backgroundColor: 'white', textAlign: 'left',width: '105px'}} variant="success" id="dropdown-basic">
                            Showtimes
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>11:30am</DropdownItem>
                            <DropdownItem>2:00pm</DropdownItem>
                            <DropdownItem>8:00pm</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    )
}