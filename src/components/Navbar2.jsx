import Logo from '../images/Logo.png';

const Navbar2 = () => {
  return (
    <div className='w-full bg-custom-purple py-4 fixed z-10  '>
        <div className="container mx-auto flex justify-between items-center">
            <img src={Logo} alt='logo' className='pl-[80px]' />

            <div className="space-x-4 text-white flex">
                <button className="hover:text-black px-[28px]">SERVICES</button>
                <button className="hover:text-black px-[28px]">ABOUT US</button>
                <button className="hover:text-black px-[28px]">CONTACT US</button>
                <button className="hover:text-black px-[28px]">CAREERS</button>
            </div>


        </div>
    </div>
  )
}

export default Navbar2