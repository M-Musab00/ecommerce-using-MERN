import { useContext } from 'react';
import products from '../services/Products'
import { SearchContext } from './SearchContext'


export default function Search() {

    const { setShowSearch } = useContext(SearchContext);

  return (
    
    <div>
            {/* Search Feild wala part */}

            <div className=" border m-5 border-amber-500 rounded-4xl w-[95%] h-[95%] border-red-solid flex items-center justify-center fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] text-[#ffffff] overflow-scroll hide-scroll">
        <div className=" absolute top-10 bg-black p-4 w-2 h-2 flex justify-center items-center right-10 "><button onClick={()=>setShowSearch(false)} >X</button></div>
        <div className="h-50 w-full flex flex-col items-center justify-center space-y-4 ">
          <h1>Search...</h1>
          <input className=" px-4 w-[80%] border border-white py-[8px] rounded-2xl caret-[red]" type="text"/>
          <div className="w-[80%] flex item-center">
              <p>results:</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6">            
            {
            [1,2,3,4,5,6].map((i)=>(
            <div className="ml-10 border-b-1 space-y-4">
              <div><img src={products[i].image} className="w-full h-20 rounded-2xl object-cover" alt="image" /></div>
              <div><span>{products[i].name}</span></div>
              <div><span>price: $49.55 </span></div>
              <div className="mb-5"><button>View Product</button></div>
            </div>
          ))}
          
          </div>
        </div>
          
      </div>

      {/* End etere */}
    </div>

     

  
  )
}
