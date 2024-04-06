import Section01 from './components/Section01';
import Section02 from './components/Section02';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-white'>
      <Navbar /> 
      <HeroSection /> 
     
      <div className='flex flex-col items-center'>
        <Section01 />    
        <Section02 />
        <FAQ />  
      </div> 

      <Footer /> 
    </div>   
  );
}

export default App;

