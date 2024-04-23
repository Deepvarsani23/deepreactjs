import React from 'react'
import Navbar from '../Componets/Navbar'


const Shop = () => {
  return (
    <>
        <Navbar/>
       <h1 className='text-2xl font-bold text-center'>This Is Shop Page</h1>

       <div>
            <div>
                <img src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
            <div>
                <span>
                    Price: - 2,000/- RS.
                </span>
            </div>
        </div> <br />

        <div>
            <div>
                <img src="https://images.pexels.com/photos/12762487/pexels-photo-12762487.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
            <div>
                <span>
                    Price: - 50,000/- RS.
                </span>
            </div>
        </div> <br />

        <div>
            <div>
                <img src="https://images.pexels.com/photos/4000487/pexels-photo-4000487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            </div>
            <div>
                <span>
                    Price: - 1,00,000/- RS.
                </span>
            </div>
        </div><br />

        <div>
            <div>
                <img src="https://images.pexels.com/photos/313702/pexels-photo-313702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            </div>
            <div>
                <span>
                    Price: - 1,000/- RS.
                </span>
            </div>
        </div><br />

        <div>
            <div>
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg" alt=""/>
            </div>
            <div>
                <span>
                    Price: - 900/- RS.
                </span>
            </div>
        </div>
    </>
  )
}

export default Shop
