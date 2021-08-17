import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      console.log("User effect ran");
      const abortCont = new AbortController();
  
      setTimeout(() => {
          fetch(url, {signal: abortCont.signal}).then((res) => {
              if(!res.ok){
                  throw Error('Could not find the resource');
              }
              return res.json();
            }).then((data) => {
              console.log("Json data from json server" , data);
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch((err) =>{
              console.log("Error message ", err.message);
              if(err.name === 'AbortError'){
                console.log('Abort fetch');

              }else{
                setError(err.message);
                setIsPending(false);
              }

            });
      }, 1000);
  
      return () => {
        abortCont.abort();
      }
    }, [url]);

    return {data, isPending, error};
}
 
export default useFetch;