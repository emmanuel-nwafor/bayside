import img1 from "/src/assets/img1.jpeg";
import img2 from "/src/assets/img2.jpeg";
import Logo from "./Logo";

function Comp1() {
  return (
    <>
      <Logo />

      <div id="services"></div>
      <div className=" flex-col items-center justify-center m-[60px] ">
        <h1 className=" text-center font-semibold text-[20px] m-[20px] ">
          OUR SERVICES
        </h1>
        <div className=" max-md:flex-col flex items-center justify-evenly ">
          <div className=" flex-col items-center justify-evenly max-md:m-[20px] ">
            <h1 className=" text-[40px] m-[30px] ">Plan</h1>
            <p className=" m-[30px] font-semibold ">
              Mauris Lorem ipsum dolor sit amet <br /> consectetur adipisicing
              elit.
            </p>
            <p className=" m-[30px] ">
              molestiae totam quaerat vero neque ab iste nam voluptate nisi,
              quam est fugiat. <br /> Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
          </div>
          <img
            src={img1}
            alt=""
            className=" max-md:h-[400px] max-md:m-[20px] h-[450px] w-[300px] m-[30px] rounded-md "
          />
        </div>
        <div className=" max-md:flex-col-reverse flex items-center justify-evenly ">
          <img
            src={img2}
            alt=""
            className=" max-md:h-[400px] max-md:m-[10px] h-[450px] w-[300px] m-[10px]  rounded-md "
          />
          <div className=" flex-col items-center justify-evenly max-md:m-[20px] ">
            <h1 className=" text-[40px] m-[10px] ">Design</h1>
            <p className=" m-[10px] font-semibold ">
              Mauris Lorem ipsum dolor sit amet <br /> consectetur adipisicing
              elit.
            </p>
            <p className=" m-[10px] ">
              molestiae totam quaerat vero neque ab iste nam voluptate nisi,
              quam est fugiat. <br /> Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Comp1;
