import { FaRegSmileBeam } from "react-icons/fa";
import { RefObject, useState } from "react";
import Icon from "./Icon";
import Objective from "./Objective";
import Image from "next/image";

const About = ({navref,section,refall}:{navref:RefObject<HTMLDivElement>,section:string,refall:{main:RefObject<HTMLDivElement>,home:RefObject<HTMLDivElement>,about:RefObject<HTMLDivElement>,porto:RefObject<HTMLDivElement>,contact:RefObject<HTMLDivElement>}}) => {
    const sections = ['home','about','portofolio','contact']
    const [show,setShow] = useState(false)
    const handleOnClick = (e:string)=> {
        const mainElement = refall.main.current
        const aboutPosition = refall.home.current?.clientHeight?refall.home.current?.clientHeight:0
        const portoPosition = aboutPosition + (refall.about.current?.clientHeight?refall.about.current?.clientHeight:0)
        const contactPosition = portoPosition + (refall.porto.current?.clientHeight?refall.porto.current?.clientHeight:0)
        if(mainElement){
            if(e == "home"){
                mainElement.scrollTo(0,0)
            }else if(e == "about")
                mainElement.scrollTo(0,aboutPosition)
            else if(e == "portofolio")
                mainElement.scrollTo(0,portoPosition)
            else if(e == "contact")
                mainElement.scrollTo(0,contactPosition)
        }
    }
    return (
        <>
            <div ref={navref} className={`flex h-12 w-full bg-[#18181B] border-b-2 border-b-green-400 items-center px-4 text-xl relative justify-end md:justify-start`}>
                <ul className="w-full h-full items-center hidden md:flex">
                    {sections.map((item,index)=>{
                        return <li onClick={()=>{handleOnClick(item)}} key={index} className={`px-8 uppercase cursor-pointer hover:box-cst2 hover:bg-clip-text hover:text-transparent ${section==item?"box-cst2 bg-clip-text text-transparent":""}`}>{item}</li>
                    })}
                </ul>
                <button className="p-2 inline-block md:hidden" onClick={()=>{setShow(prev => !prev)}}><Icon name="FaBars"/></button>
                <ul className={`w-full bg-[#18181b] absolute top-[108%] left-0 z-40 overflow-hidden transition ${show?"scale-100":"scale-0"}`}>
                {sections.map((item,index)=>{
                    return <li onClick={()=>{handleOnClick(item);setShow(false)}} key={index} className={`px-8 py-3 uppercase cursor-pointer hover:box-cst2 hover:bg-clip-text hover:text-transparent ${section==item?"box-cst2 bg-clip-text text-transparent":""}`}>{item}</li>
                })}
            </ul>
            </div>
            <div className="pt-12">
                <div className='flex justify-center items-center p-8 lg:pb-0 flex-wrap'>
                <Objective icon='FaClock' color='red' title='Fast' desc='Fast load times and lag free interaction, my highest priority.'/>
                <Objective icon='FaChalkboardTeacher' color='blue' title='Responsive' desc='My layouts will work on any device, big or small.'/>
                <Objective icon='FaLightbulb' color='green' title='Intuitive' desc='Strong preference for easy to use, intuitive UX/UI.'/>
                <Objective icon='FaRocket' color='orange' title='Dynamic' desc='Websites don&apos;t have to be static, I love making pages come to life.'/>
                </div>
                <div className='w-full flex justify-center flex-wrap pb-8'>
                <div className='w-full lg:w-2/6 flex flex-col items-center justify-center px-8 text-center'>
                    <div className='w-[258px] h-[258px] overflow-hidden rounded-full relative before:h-[130%] before:w-[175px] before:box-cst2 before:absolute before:left-10 before:-top-5 before:animate-[spin_3s_linear_infinite]'>
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
                    <Icon name="FaTransgender" size={30} className="mr-4 text-[#36E4DA]"/>
                    Male
                    </p>
                    <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                    <Icon name="FaCalendarAlt" size={30} className="mr-4 text-[#1DE0B1]"/>
                    02 December 1995
                    </p>
                    <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                    <Icon name="FaEnvelope" size={30} className="mr-4 text-[#1DE0B1]"/>
                    andykhu02@gmail.com
                    </p>
                    <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                    <Icon name="FaPhoneSquareAlt" size={30} className="mr-4 text-[#00DC82]"/>
                    +6282162979120
                    </p>
                    <p className='flex items-center text-2xl mb-8 text-gray-300 min-w-[300px]'>
                    <Icon name="FaFlag" size={30} className="mr-4 text-[#00DC82]"/>
                    Indonesia
                    </p>
                    
                </div>
                </div>
            </div>
        </>
    );
}

export default About;