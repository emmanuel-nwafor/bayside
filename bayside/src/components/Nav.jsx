import React, { useState } from "react";
import Nav2 from "/src/components/Nav2.jsx";
import img1 from "/src/assets/img1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="home"></div>
      <nav className="bg-[#2f2f2f] p-4 md:hidden z-10  ">
        <div className="container mx-auto flex justify-evenly h-[85px] items-center">
          <div className="text-white font-semibold text-xl">
            <img src={img1} className=" w-[200px] " alt="" />
          </div>

          <div className=" flex items-center justify-evenly ">
            <div className=" hover:bg-[#dbdbdb] transition-[.2s bg-[#999999] m-[6px] border-2 rounded-full h-[30px] w-[30px] text-center justify-center flex items-center ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEvd1b1rFVEQBfBfNKAQsYqFoBiFIEIUESstlYAhYJQQIoJFLETsFUXxD9DGQrERCdjYWAiBFDYS0gQFxRSpEhIQBbESwS9I7sA+WNbdzb4Hr8nt9s6dc+6cO3O2R5dXT5fxbT2CPvzcRLbduI9RHMRfPMYd7MX57Hs9cPISbcciJvCphuQNzpTE17Afl/CyFc8TDGAF33AB8yUgJ/C+hvwd3uIFPhQr2Ikf6M0AnuEevuQAL2fJVRwh740k3XRZBbEXtz5VyJ7DayzgOB7VVPAcU/l4XqJdOIxZ9Hc4Hw9ws4pgH1bxPXXBng4JQp4nVQTbsIwDHYJH2hEsVRHE/sWsxVoP3Q5XdOChYkKZVcQc3MXRdtBxHU+bEIxgpk3wGLLBNM1/mhDEmejjKw1J/uF01sb/pVS5aTz4EG6nR5usIQq/uZoaI/q/dJURhOGdxC2cqwH/hZjsV3WV5gnO4mFKOFYwwbL8GMZraWpD+9pVrCCseDwZ1RiGsSPJ9Btf8RnhpHHjj5sBt+Jb74/WtPLG57ou0QbqWz0ZBzSqswAAAABJRU5ErkJggg==" />
            </div>
            <div className=" hover:bg-[#dbdbdb] transition-[.2s] bg-[#999999] m-[6px] border-2 rounded-full h-340px] w-340px] text-center justify-center flex items-center ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvt1CFOQ0EQxvFfBSHoguEIxSEqMBgOQELKDUpAYlA1FXgcTbB1xRBsBQJLD1ASJCS0VyCBl4xompLNvryXVHTVZHfn+8/O7ExDzatRs761AxzgFm3s4hND9P7LRM4L9vGB7SWxR3SqANzjcoXQCOdVAN5wGEIvOMFP6pPkpOgbeyF4hUFKvDjPAczRDNELPFQBKHLbCqEb7IT9jEnYrxiXrUHxQ84SkV7jrk7AKZ7KAvo4DuejvybbCnuKr7C7eC8LWPSbRfcWe5UVeQPIarRNDZKTpfYUJSNYdSFnmq4n4BdfByoZ/9M5/QAAAABJRU5ErkJggg==" />
            </div>
            <div className=" hover:bg-[#dbdbdb] transition-[.2s] bg-[#999999] m-[6px] border-2 rounded-full h-340px] w-340px] text-center justify-center flex items-center ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUpJREFUSEvt1T0vREEUxvHfIiKhUItCoZD4AHqJSkGCAomKRomESkOhQKGh9pJoNBKdDh9BVDoSvoHC247cXZObXbO7bOd2k3Pm+Z/nzJy5BU3+Ck3W9w9Idjhu0TAO0I1DrOE1qfCdMIYNtGMe1yEUAx7REwneYBJPCUgbtrAc5d2jPw/4qCD0jClcVYH04RRDFeJfxccOKgFCTmjTKnZzIuM4QlcVeM2A0v5zzOANe1hItK5uQNC7y1wP1HD4DQFq0C2nJAGXxQMMlfYmVB8yZyO5vCRgG5s4wWgVyAVmsY6legE7WMk2LSKsO7L1Sya4n61D7FeAoDOIs0xwojgft1HFfwIIep3ZNQ0O4i+0M57k8oz9NGhxi1K3pyYHYYBacrZLZ5AC5B28Fx++1vxTcYzpCFKPgxgQxMPNm8sDUlU2FP//ZSbb9gmdCD4Zw9bafwAAAABJRU5ErkJggg==" />
            </div>
          </div>

          <div className="lg:hidden">
            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:items-center lg:space-x-6 h-[400px] backdrop-blur-xl md:hidden`}
      >
        <a
          href="#home"
          className=" transition-[0.2s] block p-[25px] hover:bg-[#383838] lg:inline-block lg:mt-0 text-white hover:text-gray-300"
        >
          Projects
        </a>
        <a
          href="#about"
          className=" transition-[0.2s] block p-[25px] hover:bg-[#383838] lg:inline-block lg:mt-0 text-white hover:text-gray-300"
        >
          Services
        </a>
        <a
          href="#services"
          className=" transition-[0.2s] block p-[25px] hover:bg-[#383838] lg:inline-block lg:mt-0 text-white hover:text-gray-300"
        >
          About
        </a>
        <a
          href="#contact"
          className=" transition-[0.2s] block p-[25px] hover:bg-[#383838] lg:inline-block lg:mt-0 text-white hover:text-gray-300"
        >
          Pages
        </a>
        <button className=" text-white h-[60px] w-[140px] hover:bg-[#2f2f2f] transition-[0.2s] bg-[#383838] rounded-lg  m-[20px] ">
          Sign-up
        </button>
      </div>
      {/* </nav> */}
      <Nav2 />
    </>
  );
}

export default Navbar;
