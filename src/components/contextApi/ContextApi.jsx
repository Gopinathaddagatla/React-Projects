import { createContext, useEffect, useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';


export const store = createContext();

function ContextApi() {
    const [data, setData] = useState(()=>{
        const storedUser = localStorage.getItem('contextapidata');
        return storedUser ? JSON.parse(storedUser) : [];
    });
    
    useEffect(()=> {
        if(data){
            localStorage.setItem('contextapidata', JSON.stringify(data));
        }
    })
    return (
        <div>
        <store.Provider value={[data, setData]}>
            <ComponentA />
            <ComponentB />
        </store.Provider>
        </div>
    )
}

export default ContextApi