import React,{useState} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [id,setNumber]=useState(0)
    const[data,setData]=useState({})
    const[isLoading,setIsLoading]=useState(false)

    const HandleChange=(event)=>{
       setNumber(event.target.value)
       setIsLoading(true)
       fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(
        response=>response.json()
       ).then(data=>{
        setData(data)
        setIsLoading(false)
       })
    }
  return(
    <>
    <input type="number" placeholder="number" onChange={HandleChange} value={id}/>
    {isLoading?<Loader/>:<PhotoFrame url={data.url} title={data.title}/>}
    </> 
    
  )
}


export default App;
