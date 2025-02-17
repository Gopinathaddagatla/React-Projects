import React, { useContext } from 'react'
import { store } from './ContextApi';

const ComponentA = () => {
    const [data] = useContext(store);
  return (
    <div>Data Count : {data.length}</div>
  )
}

export default ComponentA;