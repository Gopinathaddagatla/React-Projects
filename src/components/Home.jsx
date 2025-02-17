import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container className='vh-100 d-flex align-items-center justify-content-center'>
        <Row>
          <Col>
            <h1>Welcome For React Topics..</h1>
            <h4>Made by Gopinath</h4>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Home