import React, { useState, useEffect } from 'react';
import { getDinnerCount, getLunchCount, getUsers } from '@/utils/meals';
import formatTimestamp from '@/lib/formatTimestamp';
type UserMeals = {
    name: string,
    role: string
  }

const AllUsersShow = () => {
  const currentDate = new Date();
  const newDateFormat = formatTimestamp(currentDate.toLocaleString(),'new')
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();

  const [userData, setUserData] = useState<UserMeals[]>([]);

  const [dinnerData, setDinnerData] = useState<{
    total_chicken: number;
    total_rice: number;
    total_fish: number;
  }>();

  async function getUsersDatas() {
    try {
      const userAllData = await getUsers();
      // Update state with fetched data
      setUserData(userAllData);
    } catch (error) {
      console.error('Error fetching lunch count:', error);
    }
  }



  useEffect(() => {
   
   getUsersDatas();
  
  }, []);

  return (
    <div className="flex items-center text-black">
      <div className="overflow-x-auto">
        <table className="sm:min-w-[500px] min-w-[300px] bg-white shadow-md rounded-xl">
         
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Members Name</th>
              <th className="py-3 px-4 text-left">Role</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
          {userData.map((data, index) => (
            <tr key={data.name} className="border-b border-blue-gray-200">
              <td  className="py-3 px-4 ">{data.name}</td>
              <td  className="py-3 px-4">{data.role}</td>
            </tr>
               ))}
           
            {/* <!-- Add more rows as needed --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsersShow;
