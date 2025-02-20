import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, InputGroup, Row, } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'

function SignIn() {
    const navigate = useNavigate();
    const [userLogins, setUserLogins] = useState();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showpw, setShowpw] = useState(true);

    function passwordToggleHandler(){
        setShowpw(prev => !prev);
    }
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormData(prev => ({...prev, [name]:value}));
    }
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        setUserLogins(user)
    },[]);

    const signIn=(e)=>{
        e.preventDefault();
        const userFind = userLogins.find((elm) => elm.email === formData.email && elm.password === formData.password);
        if(userFind){
            alert('Successfully Logged In');
            localStorage.setItem('userName', JSON.stringify(userFind.name));
            navigate('/welcome');
        }else{
            alert("Please Enter Valid Credentials");
        }
    }
  return (
    <div>
        
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col md={8}>
                        <h1>Login Here</h1>
                        <br />
                        <Form>
                            <InputGroup>
                                <Form.Control type="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Enter Email Address'/>
                                <Form.Control type={showpw?"password":"text"} name="password" value={formData.password} onChange={changeHandler} placeholder='Enter Password'/>
                                <InputGroup.Text><span onClick={passwordToggleHandler}>{showpw ? <Icon.EyeSlash /> : <Icon.Eye />}</span></InputGroup.Text>
                                <Button type="submit" onClick={(e)=>{signIn(e)}}>SignIn</Button>
                            </InputGroup>
                            
                        </Form>
                        <p>Don't have an account? : <Link to={'/signup'}>SignUp</Link></p>
                        <pre>{JSON.stringify(FormData, null, 2)}</pre>
                        </Col>
                    </Row>
                </Container>
    </div>
  )
}

export default SignIn