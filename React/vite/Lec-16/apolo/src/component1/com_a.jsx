import React from 'react'
import Comp_B from './com_b'

const Comp_A = ({name}) => {
  return (
    <div>
     <h1> My Name is {name}</h1>
     <Comp_B name={name}/>
    </div>
  )
}

export default Comp_A
