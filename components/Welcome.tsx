import { RefObject } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const Welcome = ({itemref,handleOnClick}:{itemref:RefObject<HTMLDivElement>,handleOnClick:()=>void}) => {
    return (
        <div ref={itemref} className='h-screen w-screen flex justify-center items-center relative'>
          <div className='absolute left-0 top-0 md:left-4 md:top-4'>
            <svg width="300" height="300" data-name="corner-top-left" xmlns="http://www.w3.org/2000/svg"  data-inlinesvg=".inlineSvgFile-1">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" stopColor='#00DC82'></stop>
                  <stop offset=".5" stopColor='#1DE0B1'></stop>
                  <stop offset="1" stopColor='#36E4DA'></stop>
                </linearGradient>
              </defs>
              <path fill="url('#grad1')" d="M8 0h292l-20 15H18a5 5 0 0 0-5 5v258L0 300V8a8 8 0 0 1 8-8Z"></path>
            </svg>
          </div>
          <div className='absolute right-0 bottom-0 md:right-4 md:bottom-4'>
            <svg width="300" height="300" data-name="corner-bottom-right" xmlns="http://www.w3.org/2000/svg" data-inlinesvg=".inlineSvgFile-3">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0" stopColor='#00DC82'></stop>
                  <stop offset=".5" stopColor='#1DE0B1'></stop>
                  <stop offset="1" stopColor='#36E4DA'></stop>
                </linearGradient>
              </defs>
              <path fill="url('#grad2')" d="M292 300H0l15-15h265a5 5 0 0 0 5-5V20l15-20v292a8 8 0 0 1-8 8Z"></path>
            </svg>
          </div>
            <div className='box-cst border border-transparent rounded-lg text-white transition-all p-8 pb-16 lg:p-14 lg:pb-24 text-3xl lg:text-5xl relative group'>
              <h1>Hello, I&apos;m <span className="group-hover:text-green-400 transition-colors duration-500">Andy Khu</span></h1>
              <p className="mt-5 text-2xl lg:text-4xl">I&apos;m a Frontend Developer</p>
              <div className="absolute -bottom-10 lg:-bottom-14 left-0 right-0 flex justify-center">
                <div onClick={handleOnClick} className="h-20 w-20 lg:h-28 lg:w-28  cursor-pointer rounded-full flex justify-center items-center border-2 box-cst border-transparent relative after:rounded-full after:border-2 after:box-cst after:border-transparent after:absolute after:inset-0 after:animate-ping ">
                  <FaAngleDoubleDown className="z-10 animate-bounce -mb-4"/>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Welcome;