import { useState } from "react";

const Counter = () => {

    const [count,setcount]= useState(0);

    const handlecount=()=>{
        setcount(count+1)
    }
    const handlecountless=()=>{
        if(count>0){
            setcount(count-1)
        }
  
    }
    return ( 
        <>
        <button onClick={handlecount} className="btn btn-primary">++</button> &nbsp;
        <button onClick={handlecountless} className="btn btn-danger">--</button>
        <hr/>
        <h1>{count}</h1>
        </>

     );
}
 
export default Counter;