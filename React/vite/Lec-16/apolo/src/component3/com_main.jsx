import React from 'react'
import Comp_A from './com_a'

const Comp_Main = () => {

    const name = "Deep varsani"

  return (
    <div>
      <h1>My Name is Deep</h1>
      <Comp_A name={name}/>
    </div>
  )
}

export default Comp_Main