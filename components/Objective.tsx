import Icon from "./Icon";

interface Props{
    icon?: string,
    color?:string,
    title?:string,
    desc?:string
}
const colorConfig = (color?:string,type?:boolean) =>{
    if(type)
        switch(color){
            case "red":
                return "group-hover:before:from-rose-800 group-hover:before:to-rose-400"
            case "blue":
                return "group-hover:before:from-sky-800 group-hover:before:to-sky-400"
            case "green":
                return "group-hover:before:from-teal-600 group-hover:before:to-teal-300"
            case "orange":
                return "group-hover:before:from-orange-700 group-hover:before:to-orange-400"
            default:
                return "group-hover:before:from-rose-800 group-hover:before:to-rose-400"
        }
    else
    switch(color){
        case "red":
            return "group-hover:text-rose-400"
        case "blue":
            return "group-hover:text-sky-400"
        case "green":
            return "group-hover:text-teal-400"
        case "orange":
            return "group-hover:text-orange-400"
        default:
            return "group-hover:text-rose-400"
    }
}
const Objective = ({icon,color,title,desc}:Props) => {
    return (
        <div className='flex flex-col h-72 px-4 items-center justify-start w-1/2 lg:w-1/6 group'>
            <div className='relative w-32'>
                <div className={`hexagone w-32 relative before:bg-gray-300 group-hover:before:bg-gradient-to-r ${colorConfig(color,true)}`}>
                <div className='hexagone absolute inset-0 scale-95 before:bg-[#18181B] '>
                </div>
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                {icon?<Icon name={icon} size={50} className={colorConfig(color,false)}/>:<></>}
                </div>
            </div>
            <h2 className={`font-semibold text-3xl mt-2 ${colorConfig(color,false)}`}>{title}</h2>
            <p className="text-center mt-2 text-gray-500">{desc}</p>
        </div>
    );
}

export default Objective;