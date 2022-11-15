import React, { useState } from 'react'
import { ChildOne } from './ChildOne'
import { ParentOne } from './ParentOne'

export const GrandParent = () => {
    const [ newCount, setNewCount ] = useState(0);
    console.log('Grand parent render');
    return (
        <div>
            <button onClick={()=>{ setNewCount( prevState => prevState + 1 ) }}>GrandParent Count - { newCount }</button>
            <ParentOne>
                <ChildOne/>
            </ParentOne>
        </div>
    )
}