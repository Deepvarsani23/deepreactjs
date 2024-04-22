import { useState } from 'react'
import './App.css'
// import Button1 from './button/button1'
import Card from "./card"

function App() {


  return (
    <>
    <div className='flex justify-center items-center'>
       {/* <Button1/> */}
    <Card name={"Nature History"} title={"hello"}/>
    <Card name={"History"} title={"hello"}/>
    <Card name={"view History"} title={"hello"}/>
    <Card name={"History of Nature"} />

    </div>
     </>
   
  )
}

export default App
