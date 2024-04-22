import React from 'react'
import Cardimg from "./assets/images2.jpeg"

const card = (props) => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='max-w-[350px] h-fit-conetent mx-4 shadow-xl shadow-gray-600'>
                <div>
                    <img className='w-[350px] h-[250px] object-cover' src={Cardimg} alt="" />
                </div>
                <div className='p-4'>
                    <h1 className='text-2xl font-bold mb-2'>{props.title}</h1>
                    <p> Nature is our best friend which provides us all the resources to live here. It gives us water to drink, pure air to breathe, food to eat, land to stay, animals, plants for our other uses, etc for our betterment. We should fully enjoy the nature without disturbing its ecological balance.
                    </p>
                    <a className='btn inline-block mt-4 ' href=''>
                        {props.name}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default card