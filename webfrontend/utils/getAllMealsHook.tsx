import { useState, useEffect } from "react";
import axios from "axios";
import { uri } from "./constant";

// import { jwtToken } from "@/data/cookieNames";
// import { getCookie } from "@/lib/cookieFunctions";




type MealDetailsTypes = {
    date: string;
    sharifLunch: string;
    sharifLunchCount: number;
    sharifDinner: string;
    sharifDinnerCount: number;
    
    zahidLunch: string;
    zahidLunchCount: number;
    zahidDinner: string;
    zahidDinnerCount: number;

    yasinLunch: string;
    yasinLunchCount: number;
    yasinDinner: string;
    yasinDinnerCount: number;

    tamjidLunch:string;
    tamjidLunchCount: number;
    tamjidDinner:string;
    tamjidDinnerCount: number;

    towhidLunch: string;
    towhidLunchCount:number;
    towhidDinner: string;
    towhidDinnerCount: number;
}

type UserMeals = {
  date: string;
  lunchmeal: string;
  lunchcount: number;
  dinner: string;
  dinnercount: number;
}

interface Meal {
  date: string;
  lunchmeal: string;
  lunchcount: number;
  dinner: string;
  dinnercount: number;
}


export default function useGetAllMeals () {
  const [mealsList, setMealsList] = useState<MealDetailsTypes[]>([]); // Initialize with an empty array of Vehicle objects
  const [sharifList, setSharifList] = useState<UserMeals[]>([]);
  const [zahidList, setZahidList] = useState<UserMeals[]>([]);
  const [yasinList, setYasinList] = useState<UserMeals[]>([]);
  const [tamjidList, setTamjidList] = useState<UserMeals[]>([]);
  const [towhidList, setTowhidList] = useState<UserMeals[]>([]);
  let messMeal: MealDetailsTypes[] = [];

   const getMealDetails = async (
    month: string,
    year: string,

   ) => {
    try {
      const res = await axios.get(`${uri}/mealsDetails?month=${month}&messid=5&year=${year}` );
      // Assuming the response data is an array of vehicles
    //  console.log(res.data);
        const SharifAllMeals: UserMeals[] = res.data.Sharif?.map((meal: Meal) => ({

        date: meal.date,
      lunchmeal: meal.lunchmeal,
     lunchcount: meal.lunchcount,
       dinner: meal.dinner,
      dinnercount: meal.dinnercount,
    
      }));
      setSharifList(SharifAllMeals);
     // console.log(sharifList);


      const ZahidAllMeals: UserMeals[] = res.data.Zahid?.map((meal: Meal) => ({

        date: meal.date,
        lunchmeal: meal.lunchmeal,
       lunchcount: meal.lunchcount,
         dinner: meal.dinner,
        dinnercount: meal.dinnercount,
    
      }));
      setZahidList(ZahidAllMeals);

      const YasinAllMeals: UserMeals[] = res.data.Yasin?.map((meal: Meal) => ({

        date: meal.date,
      lunchmeal: meal.lunchmeal,
     lunchcount: meal.lunchcount,
       dinner: meal.dinner,
      dinnercount: meal.dinnercount,
    
      }));
      setYasinList(YasinAllMeals);

      const TamjidAllMeals: UserMeals[] = res.data.Tamjid?.map((meal: Meal) => ({

        date: meal.date,
        lunchmeal: meal.lunchmeal,
       lunchcount: meal.lunchcount,
         dinner: meal.dinner,
        dinnercount: meal.dinnercount,
    
      }));
      setTamjidList(TamjidAllMeals);

      const TowhidAllMeals: UserMeals[] = res.data.Towhid?.map((meal: Meal) => ({

        date: meal.date,
      lunchmeal: meal.lunchmeal,
     lunchcount: meal.lunchcount,
       dinner: meal.dinner,
      dinnercount: meal.dinnercount,
    
      }));
      setTowhidList(TowhidAllMeals);


      
    //   const AllMeals: MealDetailsTypes[] = sharifList.map((vehicle: any) => ({

    //     date: vehicle.Sharif.date,
    // sharifLunch: vehicle.Sharif.lunchmeal,
    // sharifLunchCount: vehicle.Sharif.lunchcount,
    // sharifDinner: vehicle.Sharif.dinner,
    // sharifDinnerCOunt: vehicle.Sharif.dinnercount,
    
    // zahidLunch: vehicle.Zahid.lunchmeal,
    // zahidLunchCount: vehicle.Zahid.lunchcount,
    // zahidDinner: vehicle.Zahid.dinner,
    // zahidDinnerCount: vehicle.Zahid.dinnercount,

    // yasinLunch: vehicle.Yasin.lunchmeal,
    // yasinLunchCount: vehicle.Yasin.lunchcount,
    // yasinDinner: vehicle.Yasin.dinner,
    // yasinDinnerCount: vehicle.Yasin.dinnercount,

    // tamjidLunch:vehicle.Tamjid.lunchmeal,
    // tamjidLunchCount: vehicle.Tamjid.lunchcount,
    // tamjidDinner: vehicle.Tamjid.dinner,
    // tamjidDinnerCount: vehicle.Tamjid.dinnercount,

    // towhidLunch: vehicle.Towhid.lunchmeal,
    // towhidLunchCount:vehicle.Towhid.lunchcount,
    // towhidDinner: vehicle.Towhid.dinner,
    // towhidDinnerCount: vehicle.Towhid.dinnercount
    //   }));
     

      //setMealsList(AllMeals);
      

      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  }
  useEffect(() => {
    // console.log(sharifList);
    // console.log(yasinList);
    // console.log(zahidList);
    // console.log(towhidList);
    // console.log(tamjidList);
    const len = sharifList?.length || 0;
//console.log(len);

   if(len !== 0){

for (let i = 0; i < sharifList.length; i++) {
    const dailyMeal = {
        date: sharifList[i].date,
        sharifLunch: `${sharifList[i].lunchmeal} (${sharifList[i].lunchcount})`,
        sharifLunchCount: sharifList[i].lunchcount,
        sharifDinner: `${sharifList[i].dinner} (${sharifList[i].dinnercount})`,
        sharifDinnerCount: sharifList[i].dinnercount,
        zahidLunch: `${zahidList[i].lunchmeal} (${zahidList[i].lunchcount})`,
        zahidLunchCount: zahidList[i].lunchcount,
        zahidDinner: `${zahidList[i].dinner} (${zahidList[i].dinnercount})`,
        zahidDinnerCount: zahidList[i].dinnercount,

          yasinLunch: `${yasinList[i].lunchmeal} (${yasinList[i].lunchcount})`,
    yasinLunchCount: yasinList[i].lunchcount,
    yasinDinner: `${yasinList[i].dinner} (${yasinList[i].dinnercount})`,
    yasinDinnerCount: yasinList[i].dinnercount,

    tamjidLunch: `${tamjidList[i].lunchmeal} (${tamjidList[i].lunchcount})`,
    tamjidLunchCount: tamjidList[i].lunchcount,
    tamjidDinner: `${tamjidList[i].dinner} (${tamjidList[i].dinnercount})`,
    tamjidDinnerCount: tamjidList[i].dinnercount,

    towhidLunch: `${towhidList[i].lunchmeal} (${towhidList[i].lunchcount})`,
    towhidLunchCount: towhidList[i].lunchcount,
    towhidDinner: `${towhidList[i].dinner} (${towhidList[i].dinnercount})`,
    towhidDinnerCount: towhidList[i].dinnercount
    };
    
    messMeal.push(dailyMeal);
    // Assuming you want to push each dailyMeal object to messMeal
   
}
    
//console.log(messMeal);
setMealsList(messMeal);

   }

  }, [sharifList]);

  return { mealsList, getMealDetails };
}