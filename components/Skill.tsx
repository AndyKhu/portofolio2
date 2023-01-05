import Link from "next/link";

const Skill = ({skill,skills,handleSelectSKill}:{skill:string,skills:string[],handleSelectSKill:(e:string)=>void}) => {
    return (
        <>
            <div className='flex justify-center items-center p-8 pt-20'>
                <h1 className='text-4xl font-semibold text-white relative after:inset-x-8 after:rounded-full after:h-1 after:bg-white after:-bottom-6 after:absolute test box-cst2 text-transparent bg-clip-text h-12'>Project & Skill</h1>
            </div>
            <div className=''>
                <div className='flex justify-center w-full p-6'>
                <ul className='font-bold text-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4'>
                    {skills.map((item,index)=>{
                return <li key={index} onClick={()=>handleSelectSKill(item)} className={`inline-block cursor-pointer min-w-[150px] py-3 px-8 text-center hover:-translate-y-3 transition  ${skill === item?"box-cst border-2 border-transparent text-white":""} rounded hover:bg-[#141417] group`}><span className="group-hover:box-cst2 group-hover:bg-clip-text group-hover:text-transparent">{item}</span></li>
                    })}
                </ul>
                </div>
                <div className='px-8 py-10 flex gap-20 items-center justify-center flex-wrap'>
                {skill == "Java" || skill == "SQL" || skill == "ALL" ?
                <a target="_blank" href="https://app.waruna-group.co.id/wea/" rel="noopener noreferrer">
                    <div className='relative cursor-pointer bg-[#2e2e2e] flex justify-center items-center w-[300px] h-[350px] group after:test0 before:test0 before:absolute before:-inset-y-4 before:inset-x-12 before:border-t-4 before:border-b-4 before:border-[#89ec5b] before:skew-y-[15deg] before:z-[1] hover:before:skew-y-0 before:transition  after:absolute after:inset-y-12 after:-inset-x-4 after:border-l-4 after:border-r-4 after:border-[#89ec5b] after:skew-x-[15deg] after:z-[1] hover:after:skew-x-0 after:transition'>
                        <div className='relative flex flex-col justify-center items-center text-center gap-4 px-4 w-full h-full overflow-hidden bg-[#2e2e2e] z-10'>
                        <div className='w-[80px] h-[80px] ring-2 ring-[#89ec5b] text-[#89ec5b] font-semibold text-lg flex justify-center items-center bg-[#2e2e2e] transition-all  group-hover:bg-[#89ec5b] group-hover:text-[#2e2e2e] group-hover:border-2 group-hover:border-[#2e2e2e]'>HRIS</div>
                        <div>
                            <h3 className='font-semibold text-lg'>HRIS</h3>
                            <p className='text-sm text-[#9e9e9e] '>HRIS is an attendance application used by PT. Waruna Nusa Sentana.<br/>HRIS uses the Vaadin framework, postgresql database and the Java programming language </p>
                            <button className='ring-2 ring-[#89ec5b] text-[#89ec5b] py-1 px-8 rounded mt-8 group-hover:bg-[#89ec5b] transition-colors group-hover:text-[#2e2e2e] font-bold group-hover:border-2 group-hover:border-[#2e2e2e]'>Go</button>
                        </div>
                        </div>
                    </div>
                </a>
                :<></>}
                {skill == "Javascript" || skill == "SQL" ||skill == "VueJs" || skill == "ALL" ?
                <a target="_blank" href="https://xhris.waruna-group.co.id/" rel="noopener noreferrer">
                    <div className='relative cursor-pointer bg-[#2e2e2e] flex justify-center items-center w-[300px] h-[350px] group after:test2 before:test2 before:absolute before:-inset-y-4 before:inset-x-12 before:border-t-4 before:border-b-4 before:border-sky-400 before:skew-y-[15deg] before:z-[1] hover:before:skew-y-0 before:transition  after:absolute after:inset-y-12 after:-inset-x-4 after:border-l-4 after:border-r-4 after:border-sky-400 after:skew-x-[15deg] after:z-[1] hover:after:skew-x-0 after:transition'>
                        <div className='relative flex flex-col justify-center items-center text-center gap-4 px-4 w-full h-full overflow-hidden bg-[#2e2e2e] z-10'>
                        <div className='w-[80px] h-[80px] ring-2 ring-sky-400 text-sky-400 font-semibold text-lg flex justify-center items-center bg-[#2e2e2e] transition-all  group-hover:bg-sky-400 group-hover:text-[#2e2e2e] group-hover:border-2 group-hover:border-[#2e2e2e]'>XHRIS</div>
                        <div>
                            <h3 className='font-semibold text-lg'>XHRIS</h3>
                            <p className='text-sm text-[#9e9e9e] '>XHRIS is an official travel application used by PT. Waruna Nusa Sentana.<br/>XHRIS uses the VueJs, Vuetify, postgresql database and the Javascript programming language</p>
                            <button className='ring-2 ring-sky-400 text-sky-400 py-1 px-8 rounded mt-8 group-hover:bg-sky-400 transition-colors group-hover:text-[#2e2e2e] font-bold group-hover:border-2 group-hover:border-[#2e2e2e]'>Go</button>
                        </div>
                        </div>
                    </div>
                </a>
                :<></>}
                {skill == "NextJs" ||skill == "ReactJs" ||skill == "Javascript" || skill == "ALL" ?
                <a target="_blank" href="https://dashboard-next-tailwind.vercel.app/" rel="noopener noreferrer">
                    <div className='relative cursor-pointer bg-[#2e2e2e] flex justify-center items-center w-[300px] h-[350px] group after:test3 before:test3 before:absolute before:-inset-y-4 before:inset-x-12 before:border-t-4 before:border-b-4 before:border-amber-500 before:skew-y-[15deg] before:z-[1] hover:before:skew-y-0 before:transition  after:absolute after:inset-y-12 after:-inset-x-4 after:border-l-4 after:border-r-4 after:border-amber-500 after:skew-x-[15deg] after:z-[1] hover:after:skew-x-0 after:transition'>
                        <div className='relative flex flex-col justify-center items-center text-center gap-4 px-4 w-full h-full overflow-hidden bg-[#2e2e2e] z-10'>
                        <div className='w-[80px] h-[80px] ring-2 ring-amber-500 text-amber-500 font-semibold text-lg flex justify-center items-center bg-[#2e2e2e] transition-all  group-hover:bg-amber-500 group-hover:text-[#2e2e2e] group-hover:border-2 group-hover:border-[#2e2e2e]'>Next</div>
                        <div>
                            <h3 className='font-semibold text-lg'>Next Dashboard v1</h3>
                            <p className='text-sm text-[#9e9e9e] '>Next Dashboard v1 is a experimental admin panel template<br/>Next Dashboard v1 uses the NextJs, Tailwindcss and the Javascript programming language</p>
                            <button className='ring-2 ring-amber-500 text-amber-500 py-1 px-8 rounded mt-8 group-hover:bg-amber-500 transition-colors group-hover:text-[#2e2e2e] font-bold group-hover:border-2 group-hover:border-[#2e2e2e]'>Go</button>
                        </div>
                        </div>
                    </div>
                </a>
                :<></>}
                {skill == "NextJs" ||skill == "ReactJs" ||skill == "Javascript" || skill == "ALL" ?
                <a target="_blank" href="https://next-dashboard-tailwind-v2.vercel.app/" rel="noopener noreferrer">
                <div className='relative cursor-pointer bg-[#2e2e2e] flex justify-center items-center w-[300px] h-[350px] group before:absolute after:test4 before:test4 before:-inset-y-4 before:inset-x-12 before:border-t-4 before:border-b-4 before:border-rose-500 before:skew-y-[15deg] before:z-[1] hover:before:skew-y-0 before:transition  after:absolute after:inset-y-12 after:-inset-x-4 after:border-l-4 after:border-r-4 after:border-rose-500 after:skew-x-[15deg] after:z-[1] hover:after:skew-x-0 after:transition'>
                    <div className='relative flex flex-col justify-center items-center text-center gap-4 px-4 w-full h-full overflow-hidden bg-[#2e2e2e] z-10'>
                    <div className='w-[80px] h-[80px] ring-2 ring-rose-500 text-rose-500 font-semibold text-lg flex justify-center items-center bg-[#2e2e2e] transition-all  group-hover:bg-rose-500 group-hover:text-[#2e2e2e] group-hover:border-2 group-hover:border-[#2e2e2e]'>Next</div>
                    <div>
                        <h3 className='font-semibold text-lg'>Next Dashboard v2</h3>
                        <p className='text-sm text-[#9e9e9e] '>Next Dashboard v2 is a experimental admin panel template<br/>Next Dashboard v2 uses the NextJs, Tailwindcss and the Javascript programming language</p>
                        <button className='ring-2 ring-rose-500 text-rose-500 py-1 px-8 rounded mt-8 group-hover:bg-rose-500 transition-colors group-hover:text-[#2e2e2e] font-bold group-hover:border-2 group-hover:border-[#2e2e2e]'>Go</button>
                    </div>
                    </div>
                </div>
                </a>
                :<></>}
                </div>
            </div>
          </>
    );
}

export default Skill;