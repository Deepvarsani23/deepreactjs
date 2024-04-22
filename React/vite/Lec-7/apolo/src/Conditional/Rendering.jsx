import React from 'react'


function Status({name , isDeliverd}){


    return <li>{isDeliverd ?(name):(<del>{name}</del>)}</li>

}

const Rendering = () => {
  return (
    <div>
      <h1>Amaon Deliveries Networks</h1>
      <ul>
        <Status isDeliverd={true} name={"1.Amazon Books"}/>
        <Status isDeliverd={true} name={"2.Amazon Mobiles"}/>
        <Status isDeliverd={false} name={"3.Amazon Electronics"}/>
        <Status isDeliverd={false} name={"4.Amazon Groceries"}/>
      </ul>
    </div>
  )
}

export default Rendering

