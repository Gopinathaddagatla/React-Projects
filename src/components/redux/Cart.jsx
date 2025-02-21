import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from './Action'

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const image = {
      width: '100%',
      objectFit: "contain",
      height: '150px',
  }
  return (
    <div>
      <Container>
        <Row>
          <Col md={7}>
            {cart.length === 0 ? (<h1>Your Cart is Empty...</h1>) : cart.map(item => {
                return <Row className='cart border-1 border-info border-radius-sm mb-3 rounded p-3' style={{border: "1px solid #ddd"}}>
                            <Col lg={3}><img src={item.image} alt={item.category} style={image}/></Col>
                            <Col lg={9}>
                                  <p><strong>Category</strong> : {item.category}</p>
                                  <p><strong>Price</strong> : {item.price}</p>
                                  <p><strong>Rating</strong> : {item.rating.rate}</p>
                                  <Button onClick={()=>dispatch(removeFromCart(item.id))}>Remove Item</Button>
                            </Col>
                        </Row>
            })}
          </Col>
          <Col md={5}>
            <h5>Billing Details...</h5>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart