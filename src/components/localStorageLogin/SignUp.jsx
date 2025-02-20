import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import Pagination from './Pagination';

const userData = "user";
function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(()=>{
        const storedUser = JSON.parse(localStorage.getItem(userData))
        if(!storedUser) return [];
        return storedUser;
    });
    const [switchButton, setSwitchButton] = useState(false); // Change add button to update button
    const [editID, setEditID] = useState(0); // Making id matching
    const [showpw, setShowpw] = useState(true);
    const [search, setSearch] = useState(''); // Search by name


    // for pagination implementation
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5)
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = user.slice(firstIndex, lastIndex);
    const npage = Math.ceil(user.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    console.log(recordsPerPage)

    const submitHandler = (e) => {
        e.preventDefault();
        if(user.find((elm)=>elm.email === email)){
            alert('This email already exist');
        }else if(name && email && password){
            const localData = {id: Date.now(), name:name, email:email, password:password}
            setUser([...user, localData]);
            alert("Data Successfully Added...");
        }else{
            alert("Fields shouldn't be empty");
        }
        setName('');
        setEmail('');
        setPassword('');

    }

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user));
    },[user]);

    useEffect(()=>{
        const storedUser = JSON.parse(localStorage.getItem('user'))
       if(!storedUser) {
            return [];
        }else{
            setUser(storedUser)
       }
    },[]);

    // list show in the fileds for update
    const editData = (index) => {
        const obj = user.find((elm)=>elm.id === index);
        if(obj){
            setName(obj.name);
            setEmail(obj.email);
            setPassword(obj.name);
        }
        setSwitchButton(true);
        setEditID(index)
    }

    // for list item updating
    const updateHandler = () => {
        const editTask = user.find((elm)=>elm.id === editID)
        const updateUsers = user.map((elm)=>elm.id === editTask.id ? {...elm, name:name, email:email, password:password} : elm);
        setUser(updateUsers);
        setSwitchButton(false);
        setEditID(0);
        setName('');
        setEmail('');
        setPassword('');
        alert('Updated successfully...');
    }
    const removeData = (index) =>{
        setUser(user.filter((elem)=>elem.id !== index));
    }

    function passwordToggleHandler(){
        setShowpw(prev => !prev);
    }
  return (
    <div>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col xl={8}>
                        <h1>Register Here</h1>
                        <br />
                        <Form>
                            <InputGroup>
                                <Form.Control type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
                                <Form.Control type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Gmail Address'/>
                                <Form.Control type={showpw ? "password" : "text"} name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
                                <InputGroup.Text><span onClick={passwordToggleHandler}>{showpw ? <Icon.EyeSlash /> : <Icon.Eye />}</span></InputGroup.Text>
                                {switchButton ? 
                                <Button type="submit" onClick={(e)=>updateHandler(e)}>Update </Button> : 
                                <Button type="submit" onClick={(e)=>submitHandler(e)}>AddTask</Button>}
                            </InputGroup>
                        </Form>
                        <p>Already have an Account? : <Link to={'/signin'}>SignIn</Link></p>
                    </Col>
                    </Row>
                </Container>
                <br />
                                    
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col md={4}>
                        <Form.Select onChange={(e)=>setRecordsPerPage(e.target.value)}>
                            <option value="">Select Rows</option>
                            {user.map((item, index)=>{
                                return <option value={index+1}>{index+1}</option>
                            })}
                        </Form.Select>
                        </Col>
                        <Col md={6}>
                            <Form.Control type='text' onChange={(e)=>setSearch(e.target.value)} placeholder='Search by name...' />
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <Row>
                        <Col>
                                <Table striped bordered hover variant='dark'>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.filter((item)=> item ? item.name.toLowerCase().includes(search): item).map((elm, index)=>{
                                        return <tr key={index}>
                                                    <td>{index+1}</td>  
                                                    <td>{elm.name}</td> 
                                                    <td>{elm.email}</td>
                                                    <td>
                                                        <Button type="button" onClick={()=>editData(elm.id)}>Edit</Button> &nbsp;
                                                        <Button type="button" onClick={()=>removeData(elm.id)}>Delete</Button>
                                                    </td>
                                                </tr>
                                    })}
                                </tbody>
                            </Table>
                            <Pagination 
                                currentPage={currentPage} 
                                setCurrentPage={setCurrentPage}
                                npage={npage}
                                numbers={numbers}
                            />
                        </Col>
                    </Row>
                </Container>
    </div>
  )
}

export default SignUp;