import React from 'react';
import { Route, useNavigate, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Dashboard() {
  const navigate = useNavigate();
  const redirectToAvatarReview = () => {
    //Redirect to the python page
    navigate("../Pages/AvatarReview");
  };
  const redirectToIncredibleReview = () => {
    //Redirect to the python page
    navigate("../Pages/IncredibleReview");
  };
  const redirectToTickets = () => {
    //Redirect to the python page
    navigate("../Pages/BookTickets");
  };

  return(
    <div style={{backgroundColor: 'gray', height: '700px'}}>
      <h2 style={{textAlign: 'center',color: 'white'}}>Currently showing</h2>
      <div> 
        <Row style={{paddingLeft: '175px'}}>
          <Col style={{paddingRight: '1px'}}>
              <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F8Y7WrRK1iQHEX7UIftBeBMjPjWD.jpg&f=1&nofb=1&ipt=3eec6ed68d4d8e4bd08547134cde1773199074e7caff558064d6ab4dad69677c&ipo=images' height='200' width='150'></img> 
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oXOmIP4opvlt4pO7Tj-UgAHaLH%26pid%3DApi&f=1&ipt=f74d081d543c63402ff8f8e8f53f86df85aaa4002e85801e42d3ba45a3497307&ipo=images' height='200' width='150'></img>
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2F1400%2F37bd3292496951.5e4cd02c9d61d.jpg&f=1&nofb=1&ipt=11aa4df1aa3a13a9bbeac828a74bb7e7a07b50147f6b5327b3819bb640afe4a1&ipo=images' height='200' width='150'></img>
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.mubicdn.net%2Fimages%2Fnotebook%2Fpost_images%2F31814%2Fimages-w1400.jpg%3F1606176049&f=1&nofb=1&ipt=6790173a6344c25381282197a0cf6a0111240eee28c787bbc9f5a12942d35003&ipo=images' height='200' width='150'></img>
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd6%2Fb9%2Fb5%2Fd6b9b56869a018ba05bbe770716ec735.jpg&f=1&nofb=1&ipt=2a3eaf879e0c081ed89b726425d39ae3f2f424a8b485aedec9a0de65727dfa66&ipo=images' height='200' width='150'></img>
          </Col>
        </Row>
        <Row>
          <Col style={{paddingLeft: '175px'}}>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToAvatarReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
        </Row>
        <Row>
          <Col style={{paddingLeft: '175px'}}>
            <Button style={{textAlign: 'left',width: '120px'}} variant="secondary"
              onClick={redirectToTickets} 
            >
              Book Tickets
            </Button>
          </Col>
          <Col>
            <Button style={{textAlign: 'left',width: '120px'}} variant="secondary"
              onClick={redirectToTickets} 
            >
              Book Tickets
            </Button>
          </Col>
          <Col>
            <Button style={{textAlign: 'left',width: '120px'}} variant="secondary"
              onClick={redirectToTickets} 
            >
              Book Tickets
            </Button>
          </Col>
          <Col>
            <Button style={{textAlign: 'left',width: '120px'}} variant="secondary"
              onClick={redirectToTickets} 
            >
              Book Tickets
            </Button>
          </Col>
          <Col>
            <Button style={{textAlign: 'left',width: '120px'}} variant="secondary"
              onClick={redirectToTickets} 
            >
              Book Tickets
            </Button>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <h2 style={{textAlign: 'center', color: 'white'}}>Upcoming Movies</h2>
        </Row>
        <Row style={{paddingLeft: '175px'}}>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F65%2F5a%2Fe4%2F655ae447c7d9e6eb160e8ee07d8df4f4--avatar-movie-art-posters.jpg&f=1&nofb=1&ipt=4fdb52f89da05bbea212581a166e6f2c710495057c631be3012ef3b0003473a8&ipo=images' height='200' width='150'></img>
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QAP2YKQ2hj0V2Ntv0x1vQAHaJQ%26pid%3DApi&f=1&ipt=ba7f81bc9eff6af87676d77a9030c8631c02d646dd374bb4153336fb5aeedb51&ipo=images' height='200' width='150'></img>
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.M0jv_EEZw-ZI3268LHHjnQHaKW%26pid%3DApi&f=1&ipt=54de1c9cec3c8957054416be1c3e4cc588480cdb410eba34bd619e0bb127f935&ipo=images' height='200' width='150'></img>
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.horrormovietalk.com%2Fwp-content%2Fuploads%2F2018%2F11%2FHereditary-Movie-Poster.jpg&f=1&nofb=1&ipt=7d632bd3204187b2f8b7bb0de7883377fa87522f036b1bb3a218a7390efd1960&ipo=images' height='200' width='150'></img>
          </Col>
          <Col style={{paddingRight: '1px'}}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.ranker.com%2Fuser_node_img%2F4269%2F85376073%2Foriginal%2Fmulan-photo-u3%3Fw%3D650%26q%3D50%26fm%3Dpjpg%26fit%3Dfill%26bg%3Dfff&f=1&nofb=1&ipt=b7c98d55cc5ca560ec33fb4881e44363e45877d0948b832eaa040c7a301c5ca4&ipo=images' height='200' width='150'></img>
          </Col>
        </Row>
        <Row>
          <Col style={{paddingLeft: '175px'}}>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToAvatarReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
          <Col>
              <Button style={{width: '120px'}} variant="secondary"
                onClick={redirectToIncredibleReview} 
              >
                More Info
              </Button>
          </Col>
        </Row>  
      </div>
    </div> 
  );
}
