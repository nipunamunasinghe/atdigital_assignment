import Navbar from './components/Navbar';
import Section01 from './components/Section01';
import Section02 from './components/Section02';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar2 from './components/Navbar2';


function App() {
  return (
    <div className='bg-white'>

       <div>
          <div>
            <Navbar2 /> 
          </div>
        <HeroSection /> 
      </div> 

      <div className='flex flex-col items-center'>
        <Section01 />    
        <Section02 />
        <FAQ />  
      </div> 

      <div>
         <Footer /> 
      </div>
    </div>   
  );
}

export default App;

