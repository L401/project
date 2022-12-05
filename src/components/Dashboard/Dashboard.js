import React from 'react';
import { Route, useNavigate, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Popup from '../react-components/Popup';

export default function Dashboard() {
  const navigate = useNavigate();
  const redirectToReview = () => {
    //Redirect to the python page
    navigate("../Pages/Reviews");
  };
  const redirectToTickets = () => {
    //Redirect to the python page
    navigate("../Pages/BookTickets");
  };

  return(
    <div style={{backgroundColor: 'black'}}>
      <h2 style={{textAlign: 'center',color: 'white'}}>Currently showing</h2>
      <div> 
        <Row>
          <Col xs={1}>
              <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F8Y7WrRK1iQHEX7UIftBeBMjPjWD.jpg&f=1&nofb=1&ipt=3eec6ed68d4d8e4bd08547134cde1773199074e7caff558064d6ab4dad69677c&ipo=images' height='200' width='150'></img> 
          </Col>
          <Col xs={1}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oXOmIP4opvlt4pO7Tj-UgAHaLH%26pid%3DApi&f=1&ipt=f74d081d543c63402ff8f8e8f53f86df85aaa4002e85801e42d3ba45a3497307&ipo=images' height='200' width='150'></img>
          </Col>
        </Row>
        <Row>
          <Col xs={1} md={1}>
              <button
                onClick={redirectToReview} 
              >
                More Info
              </button>
              <button
                onClick={redirectToTickets} 
              >
                Book Tickets
              </button>
          </Col>
          <Col xs={1} md={1}>
              <button type='Review'>More Info</button>
              <button type='Book'>Book Tickets</button>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <h2 style={{textAlign: 'center', color: 'white'}}>Upcoming Movies</h2>
        </Row>
        <Row>
          <Col xs={1}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F65%2F5a%2Fe4%2F655ae447c7d9e6eb160e8ee07d8df4f4--avatar-movie-art-posters.jpg&f=1&nofb=1&ipt=4fdb52f89da05bbea212581a166e6f2c710495057c631be3012ef3b0003473a8&ipo=images' height='200' width='150'></img>
          </Col>
          <Col xs={1}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QAP2YKQ2hj0V2Ntv0x1vQAHaJQ%26pid%3DApi&f=1&ipt=ba7f81bc9eff6af87676d77a9030c8631c02d646dd374bb4153336fb5aeedb51&ipo=images' height='200' width='150'></img>
          </Col>
        </Row>  
      </div>
    </div> 
  );
}
