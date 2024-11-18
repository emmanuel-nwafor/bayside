import img9 from "/src/assets/img9.jpeg";

function Comp3() {
  return (
    <>
      <div className="max-md:m-40px flex-col items-center justify-center m-[60px] ">
        <h1 className=" text-center font-semibold text-[20px] m-[30px] ">
          ABOUT
        </h1>
        <div className=" max-md:flex-col flex items-center justify-evenly ">
          <div className=" flex-col items-center justify-evenly max-md:m-[20px] ">
            <h1 className=" text-[40px] m-[30px] ">Who we are</h1>
            <p className=" m-[30px] font-semibold ">
              Mauris Lorem ipsum dolor sit amet <br /> consectetur adipisicing
              elit.
            </p>
            <p className=" m-[30px] ">
              molestiae totam quaerat vero neque ab iste nam voluptate nisi,
              quam est fugiat. <br /> Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
            <button className=" text-white h-[60px] w-[140px] hover:bg-[#6d6d6d] transition-[0.2s] bg-[#1b1b1b] rounded-lg  m-[20px] ">
              Learn more
            </button>
          </div>
          <img
            src={img9}
            alt=""
            className=" max-md:h-[400px] max-md:m-[20px] h-[450px] w-[300px] m-[30px] rounded-md "
          />
        </div>
      </div>
    </>
  );
}
export default Comp3;
