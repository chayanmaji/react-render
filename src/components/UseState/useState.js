import React, {useState} from 'react'

export const UseState = () => {

  const [count, setCount] = useState(0);
  const [testCount, setTestCount] = useState(0);

  console.log('useState render');

  return (
    <div>
        <button onClick={()=>{ setCount(prevState => prevState + 1); setTestCount(prevState => prevState + 1) }}>Count - { count }</button>
        <button onClick={()=>{ setCount(0) }}>Set count to 0</button>
        <button onClick={()=>{ setCount(5) }}>Set count to 5</button>
        <button onClick={()=>{ setTestCount(0) }}>No purpose</button>
    </div>
  )
}
