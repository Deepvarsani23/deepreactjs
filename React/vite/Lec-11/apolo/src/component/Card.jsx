import React from 'react'
import { Product } from "./product"
import { useState } from 'react'

const Card = () => {
    const [index, setIndex] = useState(0)
    const firstIndex = 0
    const lastIndex = Product.length - 1

    const Next = () => {
        if (index < lastIndex) {
            setIndex(index + 1)
        } else {
            setIndex(firstIndex)
        }
    }

    const Prev = () => {
        if (index > firstIndex) {
            setIndex(index - 1)
        } else {
            setIndex(lastIndex)
        }
    }

    const ProductData = Product[index]
    return (
        <div>
            
           
            <div className='flex justify-center m-2'>
                <div className='w-[300px] border-2 border-solid border-black rounded-xl overflow-hidden p-4'>
                    <div className='flex justify-center p-4'>
                        <img className='h-[200px] w-[150px]' src={ProductData.image} alt="" />
                    </div>
                    <div className='bg-black text-white rounded-2xl p-4'>
                        <h1 className='font-bold'>{ProductData.title}</h1>
                        <p>{ProductData.description}</p>
                        <span className='font-bold'>_{ProductData.category}</span>
                        <span className='font-bold ms-12'>${ProductData.price}</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center m-2'>
            (Page {index+1} of {Product.length})
            </div>
            <div className="flex justify-center m-2 ">
                
                <button onClick={Next} className='btn m-2 bg-black rounded-lg'>Next</button>
            <button onClick={Prev} className='btn m-2 bg-black rounded-lg'>Prev</button>
            </div>
            
        </div>
    )
}

export default Card