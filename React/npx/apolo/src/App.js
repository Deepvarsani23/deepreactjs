import React from "react"
import Navbar from "./Components/Navbar"
import Artical from "./Components/Article";
import Card from "./Components/Card";
import Table from "./Components/Table"
import Footer from "./Components/Footer";

import "./App.css"

export default function App() {
  
  return (
    <>
   <Navbar/>
   <Artical/>
  <div className="deep">
   <Card/>
   <Table/>
  </div>
  <Footer/>
   
   
    </>
  );
}
