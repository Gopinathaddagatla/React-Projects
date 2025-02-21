import React, { useEffect, useState } from 'react'
import { fetchProducts } from './api'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { addToCart } from './Action'
import { useDispatch } from 'react-redux'


function ProductList() {
    const [products, setPorducts] = useState([]);
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();
    
    useEffect(()=>{
        const getProducts = async () => {
            const data = await fetchProducts();
            setPorducts(data);
        }
        getProducts();
    },[]);

    const image = {
        width: '100%',
        objectFit: "contain",
        height: '150px',
    }

  return (
    <div className='product-page'>
        <Container>
            <Row className='justify-content-end'>
                <Col md={4}>
                    <Form>
                        <Form.Control type="text" placeholder='Search by Category...' onChange={(e)=>setSearch(e.target.value)}/>
                    </Form>
                </Col>
            </Row>
            <br />
            <Row>
                {products.length === 0 ? <center><h4>Loading...</h4></center> : products.filter(elm => elm ? elm.category.toLowerCase().includes(search) : elm).map((item)=>{
                        return  <Col xl={3} lg={4} md={6} sm={1}>
                                    <div className='product mb-4 border-1 p-3' style={{border: "1px solid #ddd", borderRadius: "5px"}}>
                                        <img src={item.image} alt={item.category} style={image}/>
                                        <br />
                                        <br />
                                        <h6><strong>Category</strong> : {item.category}</h6>
                                        <h6><strong>Price</strong> : {item.price}</h6>
                                        <h6><strong>Rating : </strong>{item.rating.rate}</h6>
                                        <Button variant='outline-primary' onClick={()=>dispatch(addToCart(item))}>Add To Cart <Icon.CartPlus /></Button>
                                    </div>
                                </Col>
                    })
                }
            </Row>
        </Container>
    </div>
  )
}

export default ProductList