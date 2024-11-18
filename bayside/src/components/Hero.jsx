import Nav from "./Nav";
// import img1 from "/src/assets/img1.jpeg";

function Hero() {
  return (
    <>
      <div className="  max-lg:h-[130vh] -z-10 items-center justify-center flex-col bg-fixed bg-no-repeat bg-center bg-cover bg-[url(/src/assets/img5.jpeg)] h-[110vh] rounded-b-3xl ">
        <Nav />
        <div className=" max-md:m-20 m-[100px] flex-col items-left justify-left font-light ">
          <h1 className=" max-lg:text-[30px] text-white text-[80px] max-md:text-[40px] max-md:m-0 ">
            We design <br /> the future
          </h1>
          <p className=" text-white ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            animi velit? Fugiat porro corrupti <br /> deserunt tenetur laborum
            rem numquam dolores atque? Voluptates, <br /> iste. Aut dolor minima
            voluptate id tempora maiores.
          </p>
          <br />
          <button className=" -z-10 h-[50px] w-[200px] rounded-full bg-[#ffffff8e] flex items-center justify-evenly ">
            <p className=" font-semibold ">Get In Touch</p>
            <div className=" h-[20px] w-[20px] rounded-full bg-black "></div>
          </button>
        </div>
      </div>{" "}
    </>
  );
}
export default Hero;
