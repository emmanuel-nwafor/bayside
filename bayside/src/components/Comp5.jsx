import img8 from "/src/assets/img8.jpeg";
import img10 from "/src/assets/img10.jpeg";
import img11 from "/src/assets/img11.jpeg";
import img12 from "/src/assets/img12.jpeg";
import img13 from "/src/assets/img13.jpeg";

import { Link } from "react-router-dom";

function Comp5() {
  return (
    <>
      <div className=" max-md:m-[30px] h-[100vh] ">
        <h1 className=" text-center font-semibold text-[20px] m-[30px] ">
          OUR TEAM
        </h1>{" "}
        <div className="flex items-center justify-evenly">
          <div className=" max-md:m-[30px] flex justify-center m-[30px] ">
            <div className=" max-md:flex-col max-md:justify-center flex items-center justify-evenly bg-[#cccccc33] rounded-lg p-[30px] ">
              <img
                src={img8}
                alt=""
                className=" max-md:w-[600px] max-md:h-[420px] h-[200px] w-[200px] m-[40px] rounded-lg "
              />
              <div className=" flex-col justify-left items-left ">
                <h1 className=" max-md:m-[50px] text-[40px] m-[10px] text-[#808080] ">
                  Senior Architect
                </h1>
                <p className=" max-md:m-[50px] m-[10px] font-semibold ">
                  Maxwell Morgan
                </p>
                <p className=" max-md:m-[50px] m-[10px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  eligendi itaque nesciunt? <br /> Sit perferendis, laborum
                  assumenda dolore facilis alias totam eos, sed <br />{" "}
                  consequatur ratione, impedit voluptate eaque aut atque
                  tenetur.
                </p>
                <br />
                <div className=" flex-col items-center ">
                  <div className="flex max-md:m-[50px] ">
                    <img
                      src={img10}
                      alt=""
                      className=" h-[50px] w-[50px] rounded-full border-2 border-black "
                    />
                    <img
                      src={img11}
                      alt=""
                      className=" -translate-x-[20px] h-[50px] w-[50px] rounded-full border-2 border-black "
                    />
                    <img
                      src={img12}
                      alt=""
                      className="-translate-x-[40px] h-[50px] w-[50px] rounded-full border-2 border-black "
                    />
                  </div>
                  <br />
                  <p className=" max-md:m-[50px] ">20+ Senior Architects</p>
                </div>
              </div>
            </div>
          </div>
          {/* /////////// */}
          <div className=" flex justify-center m-[30px]">
            <div className=" max-md:flex-col max-md:justify-center flex items-center justify-evenly bg-[#cccccc33] rounded-lg p-[30px] ">
              <img
                src={img12}
                alt=""
                className=" max-md:w-[600px] max-md:h-[420px] h-[200px] w-[200px] m-[40px] rounded-lg "
              />
              <div className=" flex-col justify-left items-left ">
                <h1 className=" max-md:m-[50px] text-[40px] m-[10px] text-[#808080] ">
                  Junior Architect
                </h1>
                <p className=" max-md:m-[50px] m-[10px] font-semibold ">
                  Mitchell Sunday
                </p>
                <p className=" max-md:m-[50px] m-[10px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  eligendi itaque nesciunt? <br /> Sit perferendis, laborum
                  assumenda dolore facilis alias totam eos, sed <br />{" "}
                  consequatur ratione, impedit voluptate eaque aut atque
                  tenetur.
                </p>
                <br />
                <div className=" flex-col items-center ">
                  <div className="flex max-md:m-[50px] ">
                    <img
                      src={img10}
                      alt=""
                      className=" h-[50px] w-[50px] rounded-full border-2 border-black "
                    />
                    <img
                      src={img11}
                      alt=""
                      className=" -translate-x-[20px] h-[50px] w-[50px] rounded-full border-2 border-black "
                    />
                    <img
                      src={img8}
                      alt=""
                      className="-translate-x-[40px] h-[50px] w-[50px] rounded-full border-2 border-black "
                    />
                  </div>
                  <br />
                  <p className=" max-md:m-[50px] ">10+ Junior Architects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /////////// */}
        <div className=" flex justify-center m-[30px]">
          <div className=" max-md:flex-col max-md:justify-center flex items-center justify-evenly bg-[#cccccc33] rounded-lg p-[30px] ">
            <img
              src={img13}
              alt=""
              className=" max-md:w-[600px] max-md:h-[420px] h-[200px] w-[200px] m-[40px] rounded-lg "
            />
            <div className=" flex-col justify-left items-left ">
              <h1 className=" max-md:m-[50px] text-[40px] m-[10px] text-[#808080] ">
                Senior Architect
              </h1>
              <p className=" max-md:m-[50px] m-[10px] font-semibold ">
                Chen Dickson
              </p>
              <p className=" max-md:m-[50px] m-[10px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eligendi itaque nesciunt? <br /> Sit perferendis, laborum
                assumenda dolore facilis alias totam eos, sed <br /> consequatur
                ratione, impedit voluptate eaque aut atque tenetur.
              </p>
              <br />
              <div className=" flex-col items-center ">
                <div className="flex max-md:m-[50px] ">
                  <img
                    src={img10}
                    alt=""
                    className=" h-[50px] w-[50px] rounded-full border-2 border-black "
                  />
                  <img
                    src={img11}
                    alt=""
                    className=" -translate-x-[20px] h-[50px] w-[50px] rounded-full border-2 border-black "
                  />
                  <img
                    src={img8}
                    alt=""
                    className="-translate-x-[40px] h-[50px] w-[50px] rounded-full border-2 border-black "
                  />
                </div>
                <br />
                <p className=" max-md:m-[50px] ">20+ Senior Architects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Comp5;
