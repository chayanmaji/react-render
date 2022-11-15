import React, {useState} from 'react'
import { MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Chayan');

  console.log('Parent Two render');

  return (
    <>
        <div>
            <button onClick={()=>{ setCount(prevState => prevState + 1)}}>Count - { count }</button>
            <button onClick={()=>{ setName('Maji') }}>Change name</button>
        </div>
        <MemoizedChildTwo name={name}/>
    </>
  )
}
