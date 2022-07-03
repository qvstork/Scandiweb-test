import { useState, useEffect } from 'react'; 

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch(url)
          .then(res => {
            return res.json();
          })
          .then((data) => {
            console.log(data); 
            setData(data);
            setIsLoading(false);
          })
      }, [url])
    return { data, isLoading }      
}

export default useFetch