import React, { useState, useEffect } from 'react';
import { getDinnerCount, getIndividualMeal, getLunchCount } from '@/utils/meals';
import formatTimestamp from '@/lib/formatTimestamp';

interface Meal {
    username: string,
    lunchmeal: string,
    lunchcount: number,
    lunchcomment: string,
    dinner: string,
    dinnercount: number,
    dinnercomment: string
  }
  

const IndividualMeal = () => {
  const currentDate = new Date();
  const newDateFormat = formatTimestamp(currentDate.toLocaleString(),'new')
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();


  const [dailyData, setDailyData] = useState<Meal[]>([]);

  async function dailyMeal() {
    try {
      const dinnerCOuntData = await getIndividualMeal(`${newDateFormat}`);
      // Update state with fetched data
      setDailyData(dinnerCOuntData);
    } catch (error) {
      console.error('Error fetching lunch count:', error);
    }
  }

  useEffect(() => {
    dailyMeal();
  }, []);

  return (
    <div className="flex items-center">
    <div className="flex flex-wrap text-black">
      {dailyData.map((data, index) => (
        <table key={index} className="min-w-[320px] bg-white shadow-md rounded-xl m-5">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left text-black text-xl">{data.username}</th>
            </tr>
          </thead>
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Lunch</th>
              <th colSpan={3} className="py-3 px-4 text-left">{data.lunchmeal} ({data.lunchcount})</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4 font-bold">Comment</td>
              <td colSpan={3} className="py-3 px-4">{data.lunchcomment}</td>
            </tr>
          </tbody>
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Dinner</th>
              <th colSpan={3} className="py-3 px-4 text-left">{data.dinner} ({data.dinnercount})</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4 font-bold">Comment</td>
              <td colSpan={3} className="py-3 px-4">{data.dinnercomment}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  </div>
);
};

export default IndividualMeal;
