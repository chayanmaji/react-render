import React, {useState} from 'react'

export const ParentOne = ({children}) => {

  const [count, setCount] = useState(0);
  const [testCount, setTestCount] = useState(0);

  console.log('Parent One render');

  return (
    <>
        <div>
            <button onClick={()=>{ setCount(prevState => prevState + 1)}}>Count - { count }</button>
        </div>
        {
            children
        }
    </>
  )
}
