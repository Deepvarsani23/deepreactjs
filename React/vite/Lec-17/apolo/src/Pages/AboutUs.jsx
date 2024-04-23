import React from 'react'
import Navbar from '../Componets/Navbar'



const AboutUs = () => {
  return (
    <>
        <Navbar/>
       <h1 className='text-2xl font-bold text-center'>This Is AboutUs Page</h1>

       <div>
            <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg" alt=""/>
        </div>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est quibusdam sequi vitae eligendi soluta placeat, nobis, earum magni sapiente accusantium repudiandae culpa illo? Earum sequi debitis distinctio veritatis voluptas!</p>
            <a href="./shop">Shop Now</a>
        </div>
    </>
  )
}

export default AboutUs
