"use client";
import React, { useState, useEffect } from "react";

import RunningMeal from './RunningMeal'
import IndividualMeal from './IndividualUpdate'
import { Button } from "@/components/ui/button"
import { UpdateMealModal } from './updateModal'
import { name } from '@/utils/cookiesNames'
import { getCookie } from '@/utils/cookiesFunction'
import {  Send } from "lucide-react"
import { getMonthlyAllCount } from "@/utils/meals";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import DatePicker from "./DatePicker";
import formatTimestamp from "@/lib/formatTimestamp";
import RangeTotalMeal from "./RangeTotalMeal";
interface Meal {
  username: string,
  totalChicken: number,
  totalFish: number,
  totalRice: number
}


const HomeContents = () => {
  const currentDate = new Date();
  const newDateFormat = formatTimestamp(currentDate.toLocaleString(),'new');
  const currentMonth = currentDate.getMonth() ;
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();

  const [myName, setName] = useState<string>('');
  const [datingFrom, setDatingFrom] = useState<string>(`${currentYear}-${currentMonth}-1`);
  const [datingTo, setDatingTo] = useState<string>(newDateFormat);
  const [monthlyData, setMonthlyData] = useState<Meal[]>([]);
  
	

	async function updateRoleFunc() {
   
		try {
		 
			const gotName = await getCookie(name);
			setName(gotName);
		   
	} catch (error) {
		  console.error('Error fetching lunch count:', error);
		}
	  }

    
    async function getMontlyCount() {
     try {

       
        const response = await getMonthlyAllCount(datingFrom,datingTo);
        setMonthlyData(response);
        console.log(response);
         
    } catch (error) {
        console.error('Error fetching lunch count:', error);
      }
      }


      const handleButtonClick = () => {
        getMontlyCount();
            console.log("heloo")
      };

	  useEffect(() => {
		updateRoleFunc();
    getMontlyCount();
	   
	}, []);
  return (
    <div className=' w-full h-full p-10 pr-14'>
        <div className='w-full flex justify-between '>
            <div className='text-black text-3xl font-bold sm:xl'>Hey, {myName}</div>
            <UpdateMealModal>
            <Button ></Button>
          </UpdateMealModal>


            
        </div>
        <div className='w-full h-1 bg-slate-500 my-8'></div>
        <div className="flex flex-wrap">
          <div className="mr-8">
          <div className='text-xl text-black font-bold sm:xl my-8'>Todays Update </div>
            <RunningMeal/>
          </div>

          <div >
          <div className='text-xl text-black font-bold sm:xl my-8'>Monthly Update </div>

         <DatePicker setDatingFrom={setDatingFrom} setDatingTo={setDatingTo} fromTo="from" /> <div className="inline-block w-3"></div>
         <DatePicker setDatingFrom={setDatingFrom} setDatingTo={setDatingTo} fromTo="to"/>

            <Button onClick={handleButtonClick} className=" border-2 hover:bg-black hover:text-white rounded-xl border-black mx-5 py-2"><Send/></Button>
          <RangeTotalMeal mealMonth={monthlyData}/>
          </div>
       

        </div>
        

        <div className='text-xl text-black font-bold sm:xl my-8'>Individual members Update </div>
        <IndividualMeal />

    </div>
  )
}

export default HomeContents