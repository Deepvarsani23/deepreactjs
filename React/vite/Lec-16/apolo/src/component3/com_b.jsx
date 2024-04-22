import React from 'react'
import Comp_C from './com_c'

const Comp_B = ({name}) => {
  return (
    <div>
      <h1> My Name is {name}</h1>
      <Comp_C name={name}/>
    </div>
  )
}

export default Comp_B