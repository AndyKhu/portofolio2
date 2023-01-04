import Head from 'next/head'
import { Inter } from '@next/font/google'
import { FaAngleDoubleDown,FaChalkboardTeacher,FaClock, FaLightbulb, FaRegSmileBeam, FaRocket } from 'react-icons/fa';
import { useRef } from 'react';
import Objective from '../components/Objective';
import Image from 'next/image';
import Icon from '../components/Icon';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const itemref = useRef<HTMLDivElement>(null)
  const handleOnClick = ()=>{
    const element = itemref.current
    window.scrollTo(0,element? element.clientHeight : 0)
  }
  return (
    <>
      <Head>
        <title>Andy Khu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <svg className='invisible absolute' width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
              <filter id="round">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
              </filter>
          </defs>
      </svg>
      <main className="flex flex-col overflow-x-hidden bg-black ">
        <div ref={itemref} className='h-screen w-screen flex justify-center items-center'>
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
        <div className='min-h-screen w-screen flex flex-col text-white'>
          <div className='flex h-12 w-full bg-[#18181B] border-b-2 border-b-green-400 items-center px-4 text-xl'>
            <FaRegSmileBeam className='mr-2'/> Hello!
          </div>
          <div>
            <div className='flex justify-center items-center p-8 lg:pb-0 flex-wrap'>
              <Objective icon='FaClock' color='red' title='Fast' desc='Fast load times and lag free interaction, my highest priority.'/>
              <Objective icon='FaChalkboardTeacher' color='blue' title='Responsive' desc='My layouts will work on any device, big or small.'/>
              <Objective icon='FaLightbulb' color='green' title='Intuitive' desc='Strong preference for easy to use, intuitive UX/UI.'/>
              <Objective icon='FaRocket' color='orange' title='Dynamic' desc='Websites don&apos;t have to be static, I love making pages come to life.'/>
            </div>
            <div className='w-full flex justify-center flex-wrap pb-8'>
              <div className='w-full lg:w-2/6 flex flex-col items-center justify-center px-8 text-center'>
                <div className='w-[258px] h-[258px] overflow-hidden rounded-full relative before:h-[130%] before:w-[175px] before:bg-gradient-to-t  before:from-sky-500 before:to-green-600 before:absolute before:left-10 before:-top-5 before:animate-[spin_3s_linear_infinite]'>
                  <div className='absolute top-1 left-1 rounded-full overflow-hidden w-[250px] h-[250px] flex justify-center items-center bg-[#18181B] mb-4'>
                    <Image src="/hero.png" alt='' width={220} height={150}/>
                  </div>
                </div>
                <h3 className='mb-4 font-semibold text-3xl'>Who&apos;s this guy?</h3>
                <p className='text-gray-500'>
                Forward-thinking Software Engineer with background working productively in dynamic environments. Fluent in Javascript programming languages used to develop software. Proud team player focused on achieving project objectives with speed and accuracy.
                </p>
              </div>
              <div className='w-full lg:w-2/6 flex flex-col justify-center px-8 mt-8 lg:mt-0 items-center lg:items-start'>
                <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                  <Icon name="FaTransgender" size={30} className="mr-4 text-sky-300"/>
                  Male
                </p>
                <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                  <Icon name="FaCalendarAlt" size={30} className="mr-4 text-sky-300"/>
                  02 December 1995
                </p>
                <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                  <Icon name="FaEnvelope" size={30} className="mr-4 text-sky-300"/>
                  andykhu02@gmail.com
                </p>
                <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                  <Icon name="FaPhoneSquareAlt" size={30} className="mr-4 text-sky-300"/>
                  +6282162979120
                </p>
                <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                  <Icon name="FaFlag" size={30} className="mr-4 text-sky-300"/>
                  Indonesia
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
