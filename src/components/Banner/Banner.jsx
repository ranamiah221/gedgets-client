import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { FaFireAlt } from "react-icons/fa";
import { PiPolygonLight } from "react-icons/pi";

import img1 from "../../assets/b9-crud-10/Hero/2.png";
import img2 from "../../assets/b9-crud-10/Hero/lgFreeze.png";
import img3 from "../../assets/b9-crud-10/Hero/applelaptop.png";
import SectionTitle from '../sectionTitle/SectionTitle';
import SectionTwo from '../sectionTwo/SectionTwo';
const Banner = () => {
  
 

  return (

     <AwesomeSlider className='h-screen'>
    <div className='bg-red-200 w-full h-full flex items-center px-32'>
        <div className='w-1/2 space-y-3'>
             <SectionTitle subTitle='Top Brand' title='Your Trusted Source for Quality Gadgets' icon={<FaFireAlt></FaFireAlt>}></SectionTitle>
              <SectionTwo description='Stay ahead with the latest tech trends and innovations.' buttonIcon={<PiPolygonLight></PiPolygonLight>} buttonText='Explore Now'></SectionTwo>
        </div>
         <div className='w-1/2'>
         <img src={img1} alt="" />
         </div>
    </div>
    <div className='bg-red-200 w-full h-full flex items-center px-20'>
        <div className='w-1/2 space-y-3'>
             <SectionTitle subTitle='Top Brand' title='Shop Smart, Shop TechWonders' icon={<FaFireAlt></FaFireAlt>}></SectionTitle>
              <SectionTwo description='Explore a wide range of cutting -edge electronic devices.' buttonIcon={<PiPolygonLight></PiPolygonLight>} buttonText='Explore Now'></SectionTwo>
        </div>
         <div className='w-1/2'>
         <img src={img2} alt="" />
         </div>
    </div>
    <div className='bg-red-200 w-full h-full flex items-center px-20'>
        <div className='w-1/2 space-y-3'>
             <SectionTitle subTitle='Top Brand' title='Discover the Future of Electronics' icon={<FaFireAlt></FaFireAlt>}></SectionTitle>
              <SectionTwo description='Find the perfect tech solutions for your lifestyle.' buttonIcon={<PiPolygonLight></PiPolygonLight>} buttonText='Explore Now'></SectionTwo>
        </div>
         <div className='w-1/2'>
         <img src={img3} alt="" />
         </div>
    </div>
    
  </AwesomeSlider>
  
   
  );
};

export default Banner;
