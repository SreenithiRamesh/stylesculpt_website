import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <div className="2xl:container bg-[#8CBCCE] ">
        <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col justify-center items-start space-y-5 ">
            <h1 className="text-3xl text-[black] py-10">
              Welcome to StyleSculpt Fashion Heaven! Where Style Meets
              Convenience.
            </h1>
            <p className="text-[white] text-sm md:text-base lg:text-xl ">
              Dive into a world of fashion curated just for you at StyleSculpt.
            </p>
            <p className="text-[white] text-sm md:text-base lg:text-xl ">
              Happy shopping!
            </p>
            <Link to="/Products"> <button className="text-[#06171D] bg-transparent border-x-cyan-50 border-2 w-32 h-8 rounded-md">
              Shop Now
            </button>
            </Link>
          </div>
          <div>
            <img
              className="w-[100%] h-[100%] py-8"
              src="https://ik.imagekit.io/94jjvf7fl/fashion-website/herosection-image.jpg?updatedAt=1712410372679"
              alt="fashion_img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Herosection;
