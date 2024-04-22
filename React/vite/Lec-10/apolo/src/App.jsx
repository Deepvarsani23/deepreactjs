import './App.css'
import List_Rendering from "./Conditional/Rendering"



const Product = [
  {
    id: 1,
    name: "Patel Neck Black 50ML",
    price:470,
    disc:"Best  Perfume",
    discount:"10%",
    color:"Black",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/41PB50deS-L._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    id: 2,
    name: "iphone15 pro",
    price:90000,
    disc:"Best IOS Device",
    discount:"8%",
    color:"black",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/81+GIkwqLIL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 3,
    name: "iphone 15",
    price:85000,
    disc:"Best IOS Device",
    discount:"8%",
    color:"gray",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 4,
    name: "iphone 14",
    price:65000,
    disc:"Best IOS Device",
    discount:"14%",
    color:"blue",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 5,
    name: "Nike Mens Sneaker",
    price:2997,
    disc:"Best Nike Shoes",
    discount:"5%",
    color:"white",
    catagories:"shoes",
    img:"https://m.media-amazon.com/images/I/51XgoQAv0vL._SY695_.jpg"
  },
  {
    id: 6,
    name: "Puma Unisex-Adult Sneaker",
    price:1899,
    disc:"Best Puma Shoes",
    discount:"5%",
    color:"black",
    catagories:"shoes",
    img:"https://m.media-amazon.com/images/I/516LBz0R7iL._SY695_.jpg"
  },
  {
    id: 7,
    name: "Puma UltraSneaker",
    price:3149,
    disc:"Best Puma Shoes",
    discount:"12%",
    color:"white",
    catagories:"shoes",
    img:"https://m.media-amazon.com/images/I/61WcJZeiI7L._SY695_.jpg"
  },
  {
    id: 8,
    name: "Puma mens Sneaker",
    price:1942,
    disc:"Best shoes",
    discount:"5%",
    color:"black",
    catagories:"shoes",
    img:"https://m.media-amazon.com/images/I/51TBibrWZdL._SY695_.jpg"
  },
  
]



function App() {
  const FilterData = Product.filter((data) => data);
  

  console.log(FilterData);
  const Render_List = FilterData.map(
    (item) => 
    <div className="m-2">
      <div className="border-2 border-solid border-black  flex-wrap h-[500px] w-[330px] text-center font-bold text-2xl shadow-md shadow-black">
        <div className="h-64 w-64 d-flex align-items-center">
        <img  className="h-92 flex m-5" src={item.img} alt="" />
        </div>
        
        <div className='mt-20 border-t-2 border-t-black'>
          <div className='text-start ml-2'>
            <h1>{item.name}</h1>
          <p>{item.disc}</p>
          <span>{item.price}</span><br/>
          <button className="text-md w-20 h-10  text-white border-2 bg-indigo-400 rounded-md hover:bg-blue-600">shop</button>
          </div>
           
        </div>
      </div>
    </div>
  )
  
  return (
    <>
      <ul className='flex flex-wrap'>
        {Render_List}
      </ul>
    </>
  )
  }
  
  export default App