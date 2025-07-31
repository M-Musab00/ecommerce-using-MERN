
import { useEffect, useState } from "react";
import products from "../services/Products";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Colors from "./Colors";

export default function AllProducts() {

  const [product,setProduct] = useState([]);
  const [filter,setFilter] = useState('');
  const [color,setColor] = useState(''); 
  
  console.log(product);
  
  useEffect(()=>{
    setProduct(products);
  },[])


  const filtered = product.filter((i)=>{return (i.type.toLowerCase().includes(filter.toLowerCase())&&i.colors.some((c)=>c.toLowerCase().includes(color.toLowerCase()))) });
  
  // const showFiltered = Array.from(
  //   new Map(filtered.map((curElem)=>[`${curElem.name}`,curElem]))
  // )

  // console.log(showFiltered);

  return (
    <div className="min-h-screen p-8 mt-30">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <select
          onChange={(e)=>setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value=''>All Categories</option>
          <option value="T-Shirt">T-Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Blazer">Blazer</option>
          <option value="Hoodie">Hoddies for Men</option>
          <option value="Dress">Women Dress</option>
          <option value="Top">Women Tops</option>

        </select>

        <select
          onChange={(e)=>setColor(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Colors</option>
          <option value="red">Red</option>
          <option value="yellow">yellow</option>
          <option value="pink">pink</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
          <option value="blue">Blue</option>
          <option value="navy">Navy</option>
          <option value="gray">Gray</option>
          <option value="olive">Olive</option>
          
        </select>

        <input
          type="range"
          min="0"
          max="200"
          // value=''
          // onChange=''
          className="w-48"
        />
        <span className="">Up to</span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black">
        
        {
  
        filtered.map((curElem)=>{
          return (
          <div id={curElem.id} className="border p-4 rounded shadow bg-white">
            <div className="h-60 bg-gray-200 mb-4 "><img src={curElem.image} className="h-full w-full object-cover" alt="" /></div>
            <h2 className="text-xl font-semibold mb-1">{curElem.name}</h2>
            <p className="text-gray-600 capitalize"></p>
            {/* <p className="text-gray-600 capitalize">Color: {curElem.colors.join(" ",",")}</p> */}
            <div className="text-gray-600 capitalize">{!filter&&!color?<Colors color={curElem.colors}/>:''}{color?<Colors color={curElem.colors}/>:''}</div>
            <p className="font-bold text-lg">$ {curElem.price}</p>
            <button className="mt-2" onClick={<SingleProduct singleProduct={curElem}/>}>Add to Cart</button>
          </div>
          )
         })}
        

      </div>
    </div>
  );
}
