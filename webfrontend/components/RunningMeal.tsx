import React, { useState, useEffect } from 'react';
import { getDinnerCount, getLunchCount } from '@/utils/meals';
import formatTimestamp from '@/lib/formatTimestamp';

const RunningMeal = () => {
  const currentDate = new Date();
  const newDateFormat = formatTimestamp(currentDate.toLocaleString(), 'new');
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();

  const [isClient, setIsClient] = useState(false);
  const [lunchData, setLunchData] = useState<{
    total_chicken: number;
    total_rice: number;
    total_fish: number;
  }>();

  const [dinnerData, setDinnerData] = useState<{
    total_chicken: number;
    total_rice: number;
    total_fish: number;
  }>();

  async function getLuncMeals() {
    try {
      const lunchCountData = await getLunchCount(`${newDateFormat}`);
      // Update state with fetched data
      setLunchData(lunchCountData);
    } catch (error) {
      console.error('Error fetching lunch count:', error);
    }
  }

  async function getDinnerMeals() {
    try {
      const dinnerCOuntData = await getDinnerCount(`${newDateFormat}`);
      // Update state with fetched data
      setDinnerData(dinnerCOuntData);
    } catch (error) {
      console.error('Error fetching lunch count:', error);
    }
  }

  useEffect(() => {
    setIsClient(true);
    getLuncMeals();
    getDinnerMeals();
  }, []);

  return (
    <div className="flex items-center text-black">
      <div className="overflow-x-auto">
        <table className="sm:min-w-[500px] min-w-[350px] bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Date:</th>
              <th colSpan={3} className="py-3 px-4 text-left">
                {isClient ? newDateFormat : ''}
              </th>
            </tr>
          </thead>
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Times</th>
              <th className="py-3 px-4 text-left">Chicken</th>
              <th className="py-3 px-4 text-left">Rice</th>
              <th className="py-3 px-4 text-left">Fish</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4 font-bold">Lunch</td>
              <td className="py-3 px-4">{lunchData?.total_chicken}</td>
              <td className="py-3 px-4">{lunchData?.total_rice}</td>
              <td className="py-3 px-4">{lunchData?.total_fish}</td>
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4 font-bold">Dinner</td>
              <td className="py-3 px-4">{dinnerData?.total_chicken}</td>
              <td className="py-3 px-4">{dinnerData?.total_rice}</td>
              <td className="py-3 px-4">{dinnerData?.total_fish}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RunningMeal;
