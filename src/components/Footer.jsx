import Logo from '../images/Logo.png';

const Footer = () => {
  return (
    <div className='bg-violet-700 w-full mt-10 text-white '>
        
        <div class="md:grid grid-cols-2 w-full pt-[40px] gap-[345px] pb-2 ml-[20px] md:ml-0 "> 
            <div class="w-full md:ml-[80px]"> 
                <div>
                    <img alt='footer logo' src={Logo} className="w-4/7"/>
                </div>
                    
                <div className='mt-[20px]'>
                    Your goal is our target. Not anything in between. We use online
                    marketing platforms and tools to achieve single objective - your
                    business results.
                </div>
            </div>

{/*-------------------------------------------------------------------------------------------------------------------- */}
            
            <div class="w-full md:flex gap-[128px]"> 
                
                <div className='mt-[60px] md:mt-0'>
                    <div className='text-xl font-semibold'>Our Technologies</div>
                    <div className='font-semibold mt-2'>ReactJS</div>
                    <div className='font-semibold mt-2'>Gatsby</div>
                    <div className='font-semibold mt-2'>NextJS</div>
                    <div className='font-semibold mt-2'>NodeJS</div>
                </div>

                <div className='mt-[60px] md:mt-0'>
                    <div className='text-xl font-semibold'>Our Services</div>
                    <div className='font-semibold mt-2'>Social Media Marketing</div>
                    <div className='font-semibold mt-2'>Web & Mobile App Development</div>
                    <div className='font-semibold mt-2'>Data & Analytics</div>
                </div>
            </div>
        </div>

        <div className='flex font-semibold justify-center'>
            
            <div className='flex mt-6 gap-4 mb-4'>
                <div>Privacy Policy</div>
                <div className="shrink-0 w-px bg-white border border-white border-solid h-[17px]" />
                <div>Terms & Conditions</div>
            </div>
        </div>

    </div>
  )
}

export default Footer