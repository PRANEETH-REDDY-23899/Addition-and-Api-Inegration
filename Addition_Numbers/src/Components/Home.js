import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import head_shot from './head_shot.jpg';

export default class Home extends Component {
    render() {
        return (
            <div align="center">
            <Container className='p -12' display='flex' alignItems='center'>  
            <Col md="6">  
            <Card>  

            <div className="clearfix fluid">
                <Card.Img align="center" rounded src={head_shot} width={100} height={400} />
            </div>
                
            {/* <Card.Img  height={400} width={50}  src={ head_shot} />   */}
            <Card.Body>  
              <Card.Title>Profile</Card.Title>  
              <Card.Text>  

              I am <strong>Praneeth Reddy Nakka</strong>  a Computer Science student passionate about Data Science and Web development. Had all relevant programming, communication skills, and soft skills. Great dedication
and determination towards my work and active in upgrading knowledge till date as per the revolution in technology.<br></br>
😊😊------ Go breadthwise and make your career in-depth wise -------(BFS -- DFS) --------😊😊

              </Card.Text>  
              <Button  href="https://www.linkedin.com/in/praneeth-reddy-nakka-46b144169/" variant="primary">Read More</Button>  
            </Card.Body>  
          </Card>  
              </Col>  

          </Container> 
            </div>
           
        )
    }
}
