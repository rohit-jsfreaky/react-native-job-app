import { useState, useEffect } from "react";
import axios from "axios";


 const useFetch =  (endpoint , query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": "6361abc8bcmsh4170b9cfcdd81efp10fd7fjsn8f45e8e13be7",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: {...query},
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
      console.log(response.data.data)
    }catch(e){
      setError(e);
    alert("Something went wrong")
    }
    finally{
        setIsLoading(false);
    }
  }




  useEffect(()=>{
    fetchData()
  },[])

  const refetch = ()=>{
    setIsLoading(true);
    fetchData();
  }


  return {data , isLoading , error , refetch};
};


export default useFetch