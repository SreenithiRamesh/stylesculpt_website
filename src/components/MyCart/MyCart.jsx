import {mycartimg} from "../../assests/img";
const MyCart =() =>{
    return(
        <>
        <div className="flex flex-col items-center justify-center py-24">
        <img className="w-80 h-50 object-contain" src={mycartimg} alt="Mycart_Image" />
        </div>
        <div className="flex flex-col items-center justify-center">
             <p className="font-[roboto]">Login to Add Products to Cart</p>
             </div>
             <div  className="flex flex-col items-center justify-center py-5">
              <button className=" text-[black] items-center bg-[#8CBCCE]  border-2 border-[black] rounded-md hover: translate-y-1 hover:scale-110 hover: from-[#FC7D00] hover:to-[#6B7A8E] duration-300 px-2">
                  LOGIN
                </button>
             </div>

       
        
       
        </>
    );
};
export default MyCart