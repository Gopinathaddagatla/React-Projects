import React, { useContext, useState } from 'react'
import { store } from './ContextApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const ComponentB = () => {
    const [data, setData] = useContext(store);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [buttonSwitch, setButtonSwitch] = useState(true)
    const [userID, setUserID] = useState(0);

    const submitHandler = (e) =>{
      e.preventDefault();
      if(!name && !age){
        alert('Inputfield shouldn"t be empty');
      }else{
        setData([...data, {id:Date.now(), name:name, age:age}]);
        alert('Data Added Successfully...');
      }
      setName("")
      setAge("")
    }

    const editHandler = (index) => {
      const obj = data.find((elm)=>elm.id === index);
      setName(obj.name);
      setAge(obj.age);
      setUserID(index);
      setButtonSwitch(false);
    }
    const updateHandler = (e) => {
      e.preventDefault();
      const userUpdate = data.find((elm)=> elm.id === userID)
      const userUpdated = data.map((elm)=> elm.id === userUpdate.id ? {...elm, name:name, age:age} : elm);
      setData(userUpdated);
      setButtonSwitch(true);
      setName('')
      setAge('')
    }
    const deleteHandler = (index) => {
     setData(data.filter((elm)=> elm.id !== index));
    }


  return (
    <div>
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col xl={8}>
            <Form>
              <InputGroup className="mb-3 mt-5">
                <Form.Control
                    type="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    
                />
                <Form.Control
                    type="age"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    
                />
                {
                buttonSwitch ? 
                (<Button variant="outline-primary" type='submit' onClick={submitHandler}> Add Task </Button>) :
                (<Button variant='outline-primary' type="submit" onClick={updateHandler}>Update Task</Button>)
                }
                </InputGroup>
            </Form>
          </Col>
          <Col xl={8}>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>SL.NO</th>
                <th>User</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((ele, index)=>{
                  return <tr key={index}>
                          <td>{index+1}</td> 
                          <td>{ele.name}</td> 
                          <td>{ele.age}</td>
                          <td><Button onClick={()=>{editHandler(ele.id)}}>Edit</Button> &nbsp; <Button onClick={()=>{deleteHandler(ele.id)}}>Delete</Button></td>
                        </tr>
                })
              }
            </tbody>
          </Table>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ComponentB