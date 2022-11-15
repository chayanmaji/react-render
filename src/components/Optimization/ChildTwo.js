import React from 'react'

export const ChildTwo = ({ name }) => {
  console.log('Child Two render');

  return (
    <div>Child {name}</div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo);