import { useState, useEffect } from "react";

const data = (fruits) =>{
    const [data, setData] = useState([])

    useEffect(()=>{
      api
        .get('api/fruit/all')
        .then((response) => setData(response.data))
        .catch((err)=>{
          console.log("Error: " + err);
        })
    }, []);

    console.log(data)

    const fruits = data.splice(0, 22);
}

export default data;