const Contact = () => {
  return (
    <>
    
      <h1 className=" flex font-[roboto] text-5xl font-bold justify-center py-5 object-contain">Contact Form</h1>
      <div className=" flex flex-col justify-center items-center py-10">
      <form>
        <div className=" py-2 " >
          <label htmlFor="NAME">NAME:</label>
          <input id="NAME" className=" border-2 border-[#8CBCCE]"></input>
        </div>
        <div  className=" py-2">
          <label htmlFor="EMAIL">EMAIL:</label>
          <input id="EMAIL" className=" border-2 border-[#8CBCCE]"></input>
        </div>
        <div  className=" py-2">
          <label htmlFor="NUMBER">MOBILE NUMBER:</label>
          <input id="NUMBER" className=" py-5 border-2 border-[#8CBCCE]"></input>
        </div>
        <div  className=" py-2">
          <label htmlFor="MESSAGE">YOUR MESSAGE:</label>

          <textarea
            id="MESSAGE"
            rows={3}
            cols={20}
            className="border-2 border-[#8CBCCE]"
          ></textarea>
        </div>
        <div  className=" py-2 justify-center px-60">
          <button
            type="submit"
            className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1]  hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300 w-20 h-8 rounded-md"
          >
            SUBMIT
          </button>
        </div>
      </form>
      </div>
     
    </>
  );
};
export default Contact;
