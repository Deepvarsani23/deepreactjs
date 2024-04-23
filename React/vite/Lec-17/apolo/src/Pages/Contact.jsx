import React from 'react'
import Navbar from '../Componets/Navbar'


const Contact = () => {
  return (
    <>
        <Navbar/>
       <h1 className='text-2xl font-bold text-center'>This Is Contact Page</h1>

       <div>
        <h1>This is Contact Us Page</h1>
        <address>
            Name: - Jask Domium
            No: - <a href="tel: +65 5635634511"> +65 5635634511</a>
            Email : - <a href="mailto:skill@gmail.com">skill@gmail.com</a>
        </address>
    </div>
    </>
  )
}

export default Contact
