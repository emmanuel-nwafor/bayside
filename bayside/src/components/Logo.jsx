import img2 from "/src/assets/img2.png";
import img6 from "/src/assets/img6.jpeg";
import img4 from "/src/assets/img4.png";
import img7 from "/src/assets/img7.jpeg";

function Logo() {
  return (
    <>
      <div className=" flex items-center justify-evenly h-[300px] ">
        <img
          src={img6}
          alt=""
          className=" max-md:w-[60px] max-md:h-[60px] m-[20px] w-[150px] h-[150px] rounded-full "
        />
        <img src={img2} alt="" className=" max-md:w-[60px] w-[150px] " />
        <img src={img4} alt="" className=" max-md:w-[60px] w-[150px] " />
        <img
          src={img7}
          alt=""
          className=" max-md:w-[60px] w-[150px] m-[20px] rounded-full "
        />
      </div>
    </>
  );
}

export default Logo;
