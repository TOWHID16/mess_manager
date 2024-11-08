import React, { useState, useEffect } from 'react';
import { getDinnerCount, getIndividualMeal, getLunchCount } from '@/utils/meals';
import formatTimestamp from '@/lib/formatTimestamp';

interface Meal {
    username: string,
    totalChicken: number,
    totalFish: number,
    totalRice: number
  }

  interface MonthlyMeal{
    mealMonth: Meal []
  }
  

const RangeTotalMeal : React.FC<MonthlyMeal> = ({ mealMonth }) => {
  const currentDate = new Date();
  const newDateFormat = formatTimestamp(currentDate.toLocaleString(),'new')
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();


  const [monthlyData, setMonthlyData] = useState<Meal[]>([]);

//   async function dailyMeal() {
//     try {
//       const dinnerCOuntData = await getIndividualMeal(`${newDateFormat}`);
//       // Update state with fetched data
//       setDailyData(dinnerCOuntData);
//     } catch (error) {
//       console.error('Error fetching lunch count:', error);
//     }
//   }

//   useEffect(() => {
//     //dailyMeal();
//   }, []);

  return (
    <div className="flex items-center">
    <div className="flex flex-wrap text-black">
     
        <table  className="min-w-[320px] bg-white shadow-md rounded-xl m-5">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left text-black text-xl">Name</th>
              <th className="py-3 px-4 text-left text-black text-xl">Chickens</th>
              <th className="py-3 px-4 text-left text-black text-xl">Fishes</th>
              <th className="py-3 px-4 text-left text-black text-xl">Rices</th>
            </tr>
          </thead>
          <thead>
         
            <tr  className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Lunch</th>
              <th colSpan={3} className="py-3 px-4 text-left"></th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
          {mealMonth.map((data, index) => (
            <tr key={index} className="border-b border-blue-gray-200">
              <td className="py-3 px-4 f">{data.username}</td>
              <td className="py-3 px-4">{data.totalChicken}</td>
              <td className="py-3 px-4">{data.totalFish}</td>
              <td className="py-3 px-4">{data.totalRice}</td>
            </tr>
        ))}
          </tbody>
        
        </table>
      
    </div>
  </div>
);
};

export default RangeTotalMeal;
