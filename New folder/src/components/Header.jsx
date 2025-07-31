import { NavLink } from "react-router-dom";
import search from "../assets/images/search.png";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";
import Search from "./Search";

export const Header = () => {
  const {showSearch ,setShowSearch } = useContext(SearchContext);

    return (
      <>
    <div className="relative">   

      <div className="main fixed top-0 right-0 left-0 bg-[black]">
          {/* image wala wa sectiin */}
          <div className="w-[15%] h-12 my-1 p-1 min-[1138px]:hidden cursor-pointer">
             <img src="./src/assets/images/menu.png" alt="" className="h-8"/>
          </div>
  
        <div className="max-[1138px]:hidden cursor-pointer">
          <p>logo</p>
        </div>
  
  
        <div className="flex max-[1138px]:hidden ">
          <nav>
            <ul className="flex gap-15 px-20 ">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/shop"}>Shop</NavLink></li>
              <li><NavLink to={"/shop"}>T-Shirts</NavLink></li>
              <li><NavLink to={"/shop"}>Blazers</NavLink></li>
              <li><NavLink to={"/cart"}>Cart</NavLink><span></span></li>
            </ul>
          </nav>
        </div>
  
  
        <div className="ml-25 flex gap-3 pr-10 ">
          <button className={`border-0 hover:bg-[grey]` } onClick={()=>setShowSearch(true)}><img src={search} alt="" className="w-8 "/></button>
          <button><NavLink to={"/signup"}>Sign Up</NavLink></button>
          <button><NavLink to={"/login"}>Login</NavLink></button>
        </div>
  
  
      </div>
    </div>  

    { showSearch?<Search/>:""}

      </>




    );
  };
  