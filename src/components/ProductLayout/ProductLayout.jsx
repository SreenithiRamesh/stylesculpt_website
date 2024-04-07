import ProductCard from "../ProductCard/ProductCard";
import { ProductionDataSet } from "../../api/MockData";
import { useState, useEffect } from "react";
// import { ShimmerPostItem } from "react-shimmer-effects";
const ProductLayout = () => {
  //This is a Statevariable-ProductDataSet
  // fetch() -> take two argument 1)URL 2)method
  let [ProductDataSet, setProductDataSet] = useState(ProductionDataSet);
  console.log("component loaded");

  let btnTexts = "light Mode";
  const [btntext, setbtntext] = useState("light Mode");

  // userEffect()  takes two argument ->callback function, dependency array
  // const fetchData= async() =>{
  //     const option ={
  //        method: 'GET',
  //        header:{
  //         "Authorization":"Bearer"
  //        },
  //     };
  //     const response = await fetch(",option");
  // const data = await response.json();
  //    console.log(Response);
  // console.log("data",data)
  // setProductDataSet(data.products)
  // };

  // useEffect(()=>{
  //     console.log("useEffect call");
  //     fetchData();
  // },[]);

  //   if(ProductDataSet.length === 0){
  //     return <ShimmerSimpleGallery card imageHeight={300} caption />
  //   }
  return (
    <>
      <div className="2xl:container bg-[#ffffff00] ">
        <div className="w-[90%] mx-auto  grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-4 py-10  ">
          <button
            className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1] hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300  h-10 rounded-md"
            onClick={() => {
              console.log("Top Rated Btn Clicked");
              const filterProductData = ProductDataSet.filter((data) => {
                console.log("from filter function:", data.rating);
                return data.rating > 4;
              });
              setProductDataSet(filterProductData);
              console.log(filterProductData);
            }}
          >
            Top Rated
          </button>
          <button
            className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1] hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300   h-10 rounded-md"
            onClick={() => {
              console.log("Products less than 500 Btn Clicked");
              const filterProductData = ProductDataSet.filter((data) => {
                console.log("from filter function:", data.price);
                return data.price < 500;
              });
              setProductDataSet(filterProductData);
              console.log(filterProductData);
            }}
          >
            Products less than 500
          </button>
          <button
            className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1] hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300   h-10 rounded-md"
            onClick={() => {
              console.log("Products between 500 - 1000 Btn Clicked");
              const filterProductData = ProductDataSet.filter((data) => {
                console.log("from filter function:", data.price);
                return data.price > 500 && data.price < 1000;
              });
              setProductDataSet(filterProductData);
              console.log(filterProductData);
            }}
          >
            Products between 500 - 1000
          </button>
          <button
            className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1] hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300   h-10 rounded-md"
            onClick={() => {
              console.log("Products between 1000 - 2000 Btn Clicked");
              const filterProductData = ProductDataSet.filter((data) => {
                console.log("from filter function:", data.price);
                return data.price > 1000 && data.price < 2000;
              });
              setProductDataSet(filterProductData);
              console.log(filterProductData);
            }}
          >
            Products between 1000-2000
          </button>
          <button
            className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1] hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300   h-10 rounded-md"
            onClick={() => {
              console.log("Products between 2000 - 3000 Btn Clicked");
              const filterProductData = ProductDataSet.filter((data) => {
                console.log("from filter function:", data.price);
                return data.price > 2000 && data.price < 3000;
              });
              setProductDataSet(filterProductData);
              console.log(filterProductData);
            }}
          >
            Products between 2000-3000
          </button>

          <button
            className="bg-black w-70  h-30 rounded-md text-white "
            onClick={() => {
              console.log("button clicked");
              setbtntext("Dark Mode");
              console.log(btnTexts);
            }}
          >
            {btntext}
          </button>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
          {ProductDataSet.map((e) => {
            return (
              <ProductCard
                key={e.id}
                name={e.name}
                Brand={e.brand}
                price={e.price}
                rating={e.rating}
                img={e.image_url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductLayout;
