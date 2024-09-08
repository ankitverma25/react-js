import {useEffect,useState} from "react"

function useCurrencyinfo(currency){
     const[data,setdata]=useState({})

     useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/66a46dd9a13ed992fe13c61e/latest/${currency}`)
        .then(response => response.json())
        .then(data => setdata(data.conversion_rates))
        console.log(data)
     },[currency])

     return data

}

export default useCurrencyinfo

