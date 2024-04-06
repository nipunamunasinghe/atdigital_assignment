import Hero_Image from "../images/Hero Image.png";

const HeroSection2 = () => {
  return (
    <div className="relative">
      <div className="w-full relative">
        <img alt="cover" src={Hero_Image} className="w-full" />

        {/*Desktop Gradient Section */}
        <div className="md:absolute xs:max-sm:hidden top-[50%] left-[40px] transform-translate-[-50%,-50%] w-full md:w-[640px] h-[306px] bg-gradient-to-l from-[#1cbddd] to-[#4dca79] py-[40px] px-[28px]">
          <div className="flex flex-col justify-center gap-4 text-white h-full w-full">
            <div className="text-[48px] font-bold text-left capitalize leading-[48px]">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </div>

            <div className="flex w-auto">
              <button className="flex flex-col justify-center items-center text-[14px] py-2 px-5 w-[214px] h-[38px] bg-custom-orange hover:bg-custom-purple text-white text-4xl font-bold rounded">
                GET FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Mobile Gradient Section */}
      <div className="sm:hidden">
        <div className="w-full bg-gradient-to-l from-[#1cbddd] to-[#4dca79] flex pl-[20px] pt-[24px] pb-[32px]">
          <div>
            <div className="text-white text-5xl font-bold text-left capitalize leading-15">
              We crush your <br />
              competitors,
              <br /> goals, and sales <br /> records - without <br />
              the B.S.
            </div>
            <div className="bg-custom-orange text-white text-56px font-bold inline-block mt-[20px] rounded hover:bg-custom-purple mb-[15px]">
              <button className="mt-[12px] mb-[12px] ml-[20px] mr-[20px]">
                GET FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
