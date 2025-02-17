import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    const [data, setData] = useState(()=>{
      const storedData = JSON.parse(localStorage.getItem('user'));
      if(!storedData) return [];
      return storedData;
    })
    const signOut=()=>{
        localStorage.removeItem('userName');
        navigate('/signin')
    }
    const deleteUser=(index)=>{
      setData(data.find((elm)=>elm.id !== index));
        // localStorage.clear();
        navigate('/');
    }
  return (
    <div>
        <div><strong>User</strong> <h3 style={{"color": "blue"}}>{JSON.parse(localStorage.getItem('userName')) || "User"}</h3></div>
        <Button variant='outline-primary' onClick={signOut}>LogOut</Button> &nbsp;
        <Button variant='outline-primary' onClick={deleteUser}>Delete Account</Button>
    </div>
    
  )
}

export default Welcome