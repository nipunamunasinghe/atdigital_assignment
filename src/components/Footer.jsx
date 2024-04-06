import Logo from "../images/Logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 items-center bg-violet-700 w-full mt-10 text-white px-5">
      <div class="md:grid grid-cols-2 w-full pt-[40px] gap-[345px] pb-2 ml-[20px] md:ml-0 ">
        <div class="w-full md:ml-[80px]">
          <div>
            <img alt="footer logo" src={Logo} className="w-4/7" />
          </div>

          <div className="mt-[20px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </div>
        </div>

        <div class="w-full md:flex gap-[128px]">
          <div className="mt-[60px] md:mt-0">
            <div className="text-xl font-semibold">Our Technologies</div>
            <div className="font-semibold mt-2 hover:text-black cursor-pointer">
              ReactJS
            </div>
            <div className="font-semibold mt-2 hover:text-black cursor-pointer">
              Gatsby
            </div>
            <div className="font-semibold mt-2 hover:text-black cursor-pointer">
              NextJS
            </div>
            <div className="font-semibold mt-2 hover:text-black cursor-pointer">
              NodeJS
            </div>
          </div>

          <div className="mt-[60px] md:mt-0">
            <div className="text-xl font-semibold">Our Services</div>
            <div className="font-semibold mt-2 hover:text-black cursor-pointer">
              Social Media Marketing
            </div>
            <div className="font-semibold mt-2 hover:text-black cursor-pointer">
              Web & Mobile App Development
            </div>
            <div className="font-semibold mt-2 hover:text-black cursor-pointer">
              Data & Analytics
            </div>
          </div>
        </div>
      </div>

      <hr className="w-[90%]" />

      <div className="flex items-center gap-4 mb-4">
        <div className="hover:text-black">Privacy Policy</div>
        <div className="w-[1px] bg-white border border-white border-solid h-[17px]" />
        <div className="hover:text-black">Terms & Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
