import { useState } from "react";
import { LogoImg } from "../../assests/img";
import { HamburgerImg } from "../../assests/img";
import {mycartimg} from "../../assests/img";
import { Link } from "react-router-dom";
// {
//   isMobile
//     ? "flex flex-col items-center justify-start right-0 w-full h-[40vh] left-0 bg-white space-y-5 pt-4"
//     : "hidden lg:flex justify-end items-center h-[100%] space-x-6";
// }
const Header = () => {
  let [hamburger, setHamburger] = useState(false);
  //   let navbar=()=>{
  //     setHamburger(!hamburger);
  //   }
  return (
    <>
      <div className="2xl:container h-[10vh] bg-[#8CBCCE]">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%] ">
          <div className="flex justify-between items-center w-[100%] gap-4 ">
            <div className="flex justify-start items-center">
              <img className="h-14 " src={LogoImg} alt="Logo_Image" />
            </div>

            <div className="flex justify-center items-center gap-3">
              <input className="w-[100%]  border-x-2 border-y-2 ]" />
              <div className="py-4">
                <button className=" text-[black] items-center bg-transparent  border-2 border-[white] rounded-md hover: translate-y-1 hover:scale-110 hover: from-[#FC7D00] hover:to-[#6B7A8E] duration-300 px-2">
                  search
                </button>
              </div>
              {/* {searchtext} */}
            </div>
            <div>
             <img
                className=" w-[100%] h-10 md:hidden"
                onClick={() =>
                  //   navbar()
                  setHamburger(!hamburger)
                }
               src={HamburgerImg} alt="Nav_Image" 
              >
                
              </img>
            </div>
          </div>
          <ul
            className={
              hamburger
                ? "flex gap-3 md:gap-8 justify-center items-center "
                : " hidden md:flex justify-center md:justify-end items-center space-x-4"
            }
          >
            <li className="text-center py-4 md:hover:text-[white]">
              <Link to="/">HOME</Link></li>
            <li className="text-center py-4 md:hover:text-[white]"><Link to="/Products">PRODUCTS</Link></li>
            <li className="text-center py-4 md:hover:text-[white]"><Link to="/MyCart">MY CART</Link></li>
            <li className="text-center py-4 md:hover:text-[white]"><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

// default export
export default Header;
