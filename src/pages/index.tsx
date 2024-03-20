import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Menu } from "@mui/icons-material";

// import Insurance from '../../components/Insurance';

export default function Home() {

  const tabbars = ["Home","About Us","Insurance","Agents","Blog","Contact"]

  return (
    <div>
      
      <div className="flex justify-between mx-10 lg:mx-14 xl:mx-36 pt-6 items-center">
        <img src="/assets/logo.png" className="w-32"/>

        <div className='flex items-center'>
          <div className="flex gap-1 items-center">

            <div className='hover:bg-orange-900 hover:rounded-full  
               hovertext-white text-black
               hover:text-white relative h-7 w-7 flex justify-center items-center'> 
                <InstagramIcon className='text-[0.9rem] '/>
              
            </div>

            <div className='hover:bg-sky-700 hover:rounded-full  
               hovertext-white text-black
               hover:text-white relative h-7 w-7 flex justify-center items-center'> 
                <TwitterIcon className='text-[0.9rem] '/>
            </div>
            

             <div className='group hover:bg-blue-900 hover:rounded-full  
               hovertext-white text-black
               hover:text-white relative h-7 w-7 flex justify-center items-center'> 
               <div className="absolute text-black group-hover:text-white font-bold text-[1rem]">
                  f
               </div>
              
            </div>


          </div>

          <div className='border-r border-slate-300 h-4 ml-3 mr-5'></div>

          <div className='flex items-cente group cursor-pointer'>
              <CallOutlinedIcon className='text-[1.2rem] text-black group-hover:text-blue-600'/>
              <div className='pl-1 text-sm font-semibold text-gray-700 group-hover:text-blue-600'>800-123-4567</div>
          </div>
          
          <div className='border-r border-slate-300 h-4 mx-5'></div>
          
          <div className='flex items-center'>
              <SearchOutlinedIcon className='text-[1.2rem] text-black'/>
              <div className='pl-0.5 text-sm font-semibold text-gray-700'>Search</div>
          </div>
        </div>


      </div>

      <div className='flex px-10 lg:px-16 xl:px-36 pt-7 gap-8 lg:justify-between justify-end sticky top-0 z-20 bg-white py-5'>

        <div className='hidden lg:flex gap-12 items-center'>
        {
          
          tabbars.map((each)=>{
            return(
              <div className='text-gray-700 font-bold text-sm cursor-pointer hover:text-blue-800'>
                {each}
              </div>
            )
          })
         
        }
        </div>


        <div className='border-2 border-green-600 rounded-full py-3 w-40 text-xs text-green-600
          font-bold hover:bg-green-600 hover:text-white cursor-pointer text-center'>
          GET A QOUTE
        </div>

        <div className="block lg:hidden bg-[#0047BB] h-10 w-10 rounded flex items-center justify-center">
          <Menu className="text-white text-xl font-bold"/>
        </div>
      </div>

      <div className="bg-[url('/assets/top-background.jpg')] relative  w-full overflow-hidden">
       
          <div className="hidden lg:block absolute text-[10rem] text-white font-bold lg:left-[-18%] xl:left-[-8%]">
            INSURANCE
          </div>
        
            <div className="hidden lg:block absolute top-10 lg:right-[-30px] xl:right-24 text-8xl font-bold text-white">HOME</div>
            <div className="hidden lg:block absolute top-36 lg:right-[-96px] xl:right-[-28px]  text-8xl font-bold text-white overflow-hidden">TRAVEL</div> 
            <div className="hidden lg:block absolute xl:w-72 top-60 lg:right-[-44px] xl:right-6 text-8xl font-bold text-white">
             
              <div className=" text-8xl font-bold text-white pl-5 pt-3">LIFE</div>
              <div className="  text-8xl font-bold text-white pt-3">CAR</div>
            </div>
            

        <div className="block lg:grid lg:grid-cols-12 pt-16 w-full">
          <div className="lg:col-span-5 flex flex-col justify-center pl-14 xl:pl-24 pt-10 w-3/4 lg:w-full">
            <div className="text-5xl lg:text-4xl xl:text-5xl font-bold leading-[3.5rem] w-full">
              Providing Insurance Protection For You
            </div>
            <div className=" text-xl font-medium pt-5">Surprisingly great rates, get started right now.</div>
            <div className="text-sm lg:text-base font-bold text-white bg-[#0047BB] h-16 w-44 lg:w-52 rounded-full mt-8 lg:mt-5 xl:mt-8 flex items-center justify-center">
              GET STARTED
            </div>
          </div>
          <div className="hidden col-span-6 z-10 lg:grid justify-center">
            <img src="/assets/agent.png" className="w-[600px] h-[600px]" />
          </div>
        </div>
       
      </div>
      
    </div>
  );
}
