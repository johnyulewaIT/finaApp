import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { IoIosCard } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { HiBanknotes } from "react-icons/hi2";
import { FaPeopleArrows } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { SiWebmoney } from "react-icons/si";
const Sidebar = () => {
  return (
    <div className=' h-screen bg-indigo-600 dark:bg-slate-950/50  shadow-lg '>
      <div className=' flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
        <div className='flex flex-col gap-10 px-4 mt-4'>
          <div className='flex items-center justify-center gap-2'>
            <SiWebmoney className='text-indigo-900 dark:text-white text-xl md:text-4xl'/>
            <div className=' hidden md:flex font-bold '>FinaApp</div>
          </div>
          <div className='flex flex-col gap-5 text-md sm:text-xs md:text-sm lg:text-lg'>
            <div className='flex items-center  gap-2'>
              <div><AiFillDashboard/></div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer '>Dashboard</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><IoIosCard/></div>
              <div className='hidden sm:flex'>Cards</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><MdOutlinePayments/></div>
              <div className='hidden sm:flex'>Payments</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><MdOutlineAccountBalance/></div>
              <div className='hidden sm:flex'>Accounts</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><HiBanknotes/></div>
              <div className='hidden sm:flex'>Loans</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><FaPeopleArrows/></div>
              <div className='hidden sm:flex'>Beneficiary</div>
            </div>
          </div>
        </div>
        <div className='flex items-center text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-4 gap-2 hover:text-slate-100 cursor-pointer'>
          <div><IoSettingsOutline/></div>
          <div className='hidden sm:flex'>Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
