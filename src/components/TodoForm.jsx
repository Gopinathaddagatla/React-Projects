import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

function TodoForm() {
    const [data, setData] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setTodo(...todo, {inputValue})
        setInputValue('');
    }
    useEffect(()=>{

    }); 

  return (
    <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form>
                        <InputGroup className="mb-3 mt-5">
                            <Form.Control
                                placeholder="Enter Text"
                                onChange={(e)=> setInputValue(e.target.value)}
                            />
                            <Button variant="outline-secondary" onClick={handleSubmit}> 
                                Add Task
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md={6}>
                    {data?data.map((element)=>{<p>{element.name}</p>}) :"Loading"}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TodoForm