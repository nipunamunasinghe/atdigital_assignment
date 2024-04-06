import Hero_Image from '../images/Hero Image.png';

const HeroSection2 = () => {
  return (
    <div className="relative">
      <div className='w-full'>
        <img alt='cover' src={Hero_Image} className='w-full'/>
      </div>

      <div className="absolute top-[354px] left-[80px] ">
        <div className='w-[630px] h-[306px] bg-gradient-to-l from-[#1cbddd] to-[#4dca79] flex justify-center items-center'>
            <div>
                <div className='text-white text-5xl font-bold text-left capitalize leading-15'>
                    We crush your <br/>competitors, goals, and <br/>sales records - without <br/>the B.S.
                </div>
                <div className='bg-custom-orange text-white text-56px font-bold inline-block mt-[20px] rounded hover:bg-custom-purple'>
                    <button className='mt-[12px] mb-[12px] ml-[20px] mr-[20px]'>
                        GET FREE CONSULTATION
                    </button>
                </div>
            </div>    
        </div>
      </div>
    </div>
  )
}

export default HeroSection2;
