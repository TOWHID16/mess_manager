import { uri } from "./constant";


export const getLunchCount = async (
    today: string,

) => {
    try {
   
      const response = await fetch(`${uri}/lunchCountDaily?messid=5&date=${today}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData); // Log the response data to console
  
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      // You might want to throw the error or handle it in some other way
      throw error;
    }
  };

  export const getDinnerCount = async (
    today: string,
) => {
    try {
   
      const response = await fetch(`${uri}/dinnerCountDaily?messid=5&date=${today}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData); // Log the response data to console
  
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      // You might want to throw the error or handle it in some other way
      throw error;
    }
  };


  export const getIndividualMeal = async (
    today: string,
) => {
    try {
   
      const response = await fetch(`${uri}/dailyIndiviualMeal?messid=5&date=${today}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData); // Log the response data to console
  
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      // You might want to throw the error or handle it in some other way
      throw error;
    }
  };

  export const getMonthlyAllCount = async (
    fromDate: string,
    toDate: string,
) => {
    try {
   
      const response = await fetch(`${uri}/monthlyIndividualMeal?messid=5&fromDate=${fromDate}&toDate=${toDate}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData); // Log the response data to console
  
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      // You might want to throw the error or handle it in some other way
      throw error;
    }
  };



  export const updateMeal = async (
    date: string,
    meal: string,
    amount: number,
    comment: string,
    mealTime: string,
    id: string,
   
  ) => {
    

    try {
      
   
   
      if(mealTime === 'lunch'){
        console.log(mealTime); console.log("its the time")
      const  data = {"lunchmeal": meal, "lunchcount": amount, "lunchcomment": comment};
      const mydata = JSON.stringify(data);
      console.log(mydata);
        //console.log(data);
        try{
          const response = await fetch(`${uri}/lunchupdate/${id}/${date}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: mydata
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const responseData = await response.json();
       // setCookie(jwtToken, res.data.token, 1);
          console.log(response.body);
  
    
        return responseData;

        }catch(err){
          console.log(err);
        }

        
      }
      else{
     const   data = {
          dinner:meal,
          dinnercount: amount,
          dinnercomment: comment
        }
        const response = await fetch(`${uri}/dinnerupdate/${id}/${date}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const responseData = await response.json();
       // setCookie(jwtToken, res.data.token, 1);
          console.log(response.body);
  
    
        return responseData;

      }
  
     
    } catch (error) {
      console.error("Error:", error);
  
    }
  };


  export const getUsers = async () => {
    try {
   
      const response = await fetch(`${uri}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData); // Log the response data to console
  
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      // You might want to throw the error or handle it in some other way
      throw error;
    }
  };

  export const getAllDate = async (
) => {
    try {
   
      const response = await fetch(`${uri}/allDate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      //const dateStrings: string[] = responseData.map((item: { date: string; }) => item.date);
      const formattedDates = responseData.map((dateString: { date: string | number | Date; }) => {
        const date = new Date(dateString.date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    });
    console.log("haiyoo");
    console.log(formattedDates);
    console.log("haiyoo");

      return formattedDates;
    } catch (error) {
      console.error("Error:", error);
      // You might want to throw the error or handle it in some other way
      throw error;
    }
  };



  export const updateRole = async (
    id: string,
    role: string
  ) => {
    

    try {
      
  
      const  data = {"role": role};
      const mydata = JSON.stringify(data);
      console.log(mydata);
        //console.log(data);
        try{
          const response = await fetch(`${uri}/makeManager/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: mydata
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const responseData = await response.json();
       // setCookie(jwtToken, res.data.token, 1);
          console.log(response.body);
  
    
        return responseData;

        }catch(err){
          console.log(err);
        }

        
     
     
    } catch (error) {
      console.error("Error:", error);
  
    }
  };
