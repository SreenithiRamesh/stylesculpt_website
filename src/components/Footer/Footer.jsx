import "./Footer.css"
import {Instaimg } from "../../assests/img";
import { fbImg} from "../../assests/img";
import {twitterImg } from "../../assests/img";
import {youtubeImg} from "../../assests/img";
import { LogoImg } from "../../assests/img";

const Footer =() =>{
    return(
        <>
      
        <div class="2xl:container bg-[#8CBCCE]">
    <div class="w-[90%] mx-auto py-5 grid grid-cols-1 ">
      <div class="flex justify-center items-center">
         <h1 class="text-[white] text-3xl font-[roboto] font-bold">Follow Us</h1>
      </div>
      <div class="flex  justify-center items-center py-5 space-x-8">
      <img className="h-14 " src={Instaimg} alt="Logo_Image" />
      <img className="h-14 " src={fbImg} alt="Logo_Image" />
      <img className="h-14 " src={twitterImg} alt="Logo_Image" />
      <img className="h-14 " src={youtubeImg} alt="Logo_Image" />

      </div>
    </div>
  </div>
  <div class="2xl:container">
    <div class="w-[90%] mx-auto grid grid-cols-1 py-5">
      <div class="flex flex-col justify-end items-center space-y-4">
      <img className="h-14 " src={LogoImg} alt="Logo_Image" />
        <p class="text-[#959EAD]">orderdress@stylesculpt.com</p>
        <p class="text-[#959EAD]">123 Ayur Vigyan Nagar, New Delhi, India.</p>
      </div>

    </div>
  </div>
        </>
    )
}
export default Footer