import React,{useState} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [id,setNumber]=useState()
    const[data,setData]=useState()
    const[isLoading,setIsLoading]=useState(false)
   
    const HandleChange=async (event)=>{
       setNumber(event.target.value)
       setIsLoading(true)
    const response=await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data=await response.json()
    console.log(data)
    setData(data)
    setIsLoading(false)

    }
   
  return(
    <>
    <input type="number" placeholder="number" onChange={HandleChange} value={id}/>
    {isLoading&&<Loader/>}
    {data&&<PhotoFrame url={data.url} title={data.title}/>}
    </> 
    
  )
}


export default App;
