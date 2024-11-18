import img1 from "/src/assets/img1.png";

function Nav() {
  return (
    <>
      <header className=" bg-[#2f2f2f] flex items-center justify-evenly h-[120px] max-md:hidden ">
        <img src={img1} className=" w-[200px] " alt="" />
        <div className=" text-white bg-[#00000096] w-[450px] p-[5px] rounded-full items-center flex justify-evenly ">
          <a href="" className=" hover:underline m-[10px] ">
            Projects
          </a>
          <a href="" className=" hover:underline m-[10px] ">
            Services
          </a>
          <a href="" className=" hover:underline m-[10px] ">
            About
          </a>
          <a href="" className=" hover:underline m-[10px] ">
            Pages
          </a>
          <div className=" bg-white h-[30px] w-[30px] rounded-full "></div>
        </div>

        <div className=" flex items-center justify-evenly ">
          <div className=" hover:bg-[#dbdbdb] transition-[.2s bg-[#999999] m-[6px] border-2 rounded-full h-[40px] w-[40px] text-center justify-center flex items-center ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEvd1b1rFVEQBfBfNKAQsYqFoBiFIEIUESstlYAhYJQQIoJFLETsFUXxD9DGQrERCdjYWAiBFDYS0gQFxRSpEhIQBbESwS9I7sA+WNbdzb4Hr8nt9s6dc+6cO3O2R5dXT5fxbT2CPvzcRLbduI9RHMRfPMYd7MX57Hs9cPISbcciJvCphuQNzpTE17Afl/CyFc8TDGAF33AB8yUgJ/C+hvwd3uIFPhQr2Ikf6M0AnuEevuQAL2fJVRwh740k3XRZBbEXtz5VyJ7DayzgOB7VVPAcU/l4XqJdOIxZ9Hc4Hw9ws4pgH1bxPXXBng4JQp4nVQTbsIwDHYJH2hEsVRHE/sWsxVoP3Q5XdOChYkKZVcQc3MXRdtBxHU+bEIxgpk3wGLLBNM1/mhDEmejjKw1J/uF01sb/pVS5aTz4EG6nR5usIQq/uZoaI/q/dJURhOGdxC2cqwH/hZjsV3WV5gnO4mFKOFYwwbL8GMZraWpD+9pVrCCseDwZ1RiGsSPJ9Btf8RnhpHHjj5sBt+Jb74/WtPLG57ou0QbqWz0ZBzSqswAAAABJRU5ErkJggg==" />
          </div>
          <div className=" hover:bg-[#dbdbdb] transition-[.2s] bg-[#999999] m-[6px] border-2 rounded-full h-[40px] w-[40px] text-center justify-center flex items-center ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvt1CFOQ0EQxvFfBSHoguEIxSEqMBgOQELKDUpAYlA1FXgcTbB1xRBsBQJLD1ASJCS0VyCBl4xompLNvryXVHTVZHfn+8/O7ExDzatRs761AxzgFm3s4hND9P7LRM4L9vGB7SWxR3SqANzjcoXQCOdVAN5wGEIvOMFP6pPkpOgbeyF4hUFKvDjPAczRDNELPFQBKHLbCqEb7IT9jEnYrxiXrUHxQ84SkV7jrk7AKZ7KAvo4DuejvybbCnuKr7C7eC8LWPSbRfcWe5UVeQPIarRNDZKTpfYUJSNYdSFnmq4n4BdfByoZ/9M5/QAAAABJRU5ErkJggg==" />
          </div>
          <div className=" hover:bg-[#dbdbdb] transition-[.2s] bg-[#999999] m-[6px] border-2 rounded-full h-[40px] w-[40px] text-center justify-center flex items-center ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUpJREFUSEvt1T0vREEUxvHfIiKhUItCoZD4AHqJSkGCAomKRomESkOhQKGh9pJoNBKdDh9BVDoSvoHC247cXZObXbO7bOd2k3Pm+Z/nzJy5BU3+Ck3W9w9Idjhu0TAO0I1DrOE1qfCdMIYNtGMe1yEUAx7REwneYBJPCUgbtrAc5d2jPw/4qCD0jClcVYH04RRDFeJfxccOKgFCTmjTKnZzIuM4QlcVeM2A0v5zzOANe1hItK5uQNC7y1wP1HD4DQFq0C2nJAGXxQMMlfYmVB8yZyO5vCRgG5s4wWgVyAVmsY6legE7WMk2LSKsO7L1Sya4n61D7FeAoDOIs0xwojgft1HFfwIIep3ZNQ0O4i+0M57k8oz9NGhxi1K3pyYHYYBacrZLZ5AC5B28Fx++1vxTcYzpCFKPgxgQxMPNm8sDUlU2FP//ZSbb9gmdCD4Zw9bafwAAAABJRU5ErkJggg==" />
          </div>
        </div>
        <button className=" text-white h-[60px] w-[140px] hover:bg-[#6d6d6d] transition-[0.2s] bg-[#1b1b1b] rounded-lg  m-[20px] ">
          Sign-up
        </button>
      </header>
    </>
  );
}
export default Nav;
