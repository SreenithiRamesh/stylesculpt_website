const ProductCard = (prop) => {
  const { name, brand, price, rating, img } = prop;
  return (
    <>
      <div className="2xl:container ">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%] px-8 py-8">
          <div className="rounded-xl p-4 w-80 justify-center items-center space-y-2 h-50   bg-white shadow-2xl ">
            <div className="">
              <img
                src={img}
                alt="productimg"
                className="h-56 w-[100%] object-contain flex  rounded-xl  justify-center"
              />
            </div>

            <h1> {name}</h1>
            <p>{brand}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <button className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1]  hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300 w-full h-8 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
