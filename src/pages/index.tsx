import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import Insurance from '../../components/Insurance';

export default function Home() {

  const tabbars = ["Home","About Us","Insurance","Agents","Blog","Contact"]

  return (
    <div>
      
      <div className="flex justify-between mx-36 pt-6 items-center">
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

      <div className='flex mx-36 pt-7 gap-8 justify-between'>

        <div className='flex gap-12'>
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
      </div>

      <div className="bg-[url('/assets/top-background.jpg')] relative mt-10  w-full">
        <div className="w-full flex justigy-between relative">
          <div className="absolute text-[10rem] text-white font-bold left-[-8%]">
            INSURANCE
          </div>

          <div className="absolute text-8xl w-72 text-white font-bold right-0 pt-10">
            
            <div className="absolute right-5px">HOME</div> 
            TRAVEL <span>LIFE CAR</span>
          </div>
        </div>
        

        <div className="grid grid-cols-12 mt-20 w-full">
          <div className="col-span-5">
            l
          </div>
          <div className="col-span-6 z-10 grid justify-center">
            <img src="/assets/agent.png" className="w-[600px] h-[600px]" />
          </div>
        </div>
       
      </div>
      
    </div>
  );
}
