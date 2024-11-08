
import { uri } from './constant';
import { setCookie } from './cookiesFunction';
import { token, role , userid, name} from './cookiesNames';

export const loginPost = async (
    email: string,
    password: string,
   
  ) => {
    try {
      
  
      const data = { email, password };
  
      const response = await fetch(`${uri}/login`, {
        method: "POST",
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

        setCookie(token, responseData.token, 1);
        setCookie(userid, responseData.userid, 1);
        setCookie(name, responseData.name, 1);
        setCookie(role, responseData.role, 1);
  
      return responseData;
    } catch (error) {
      console.error("Error:", error);
  
    }
  };
  
  
  export const getProducts = async () => {
    try {
   
      const response = await fetch(`${uri}/api/product/`, {
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
  