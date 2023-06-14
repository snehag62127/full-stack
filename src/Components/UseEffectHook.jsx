import React,{useState,useEffect, Suspense} from 'react'
import Button from '../Shared/Button';
import Loader from '../Shared/Loader';

const UseEffectHook = () => {
    const [counter,setCounter]=useState(0);
    const [value,setValue]=useState("even");
    const [disable,setDisable]=useState(true) ;
    const [customClass,setCustomClass]=useState("text-green")
    const addHandler=()=>{
        // console.log("Add");
        setCounter(counter+1);
        // checkDisability()  -->>ye kaam ke nahi hai kyunki humne useEffect se isey check kiya hai toh jabhi counter ki value change hogi it will work accordingly 
    };
    const subHandler=()=>{
        // console.log("Sub");
        // if(counter>0)
        // {
        //     setCounter(counter-1); 
        // }

        //OR
        setCounter(counter-1);
        // checkDisability()  -->>ye kaam ke nahi hai kyunki humne useEffect se isey check kiya hai toh jabhi counter ki value change hogi it will work accordingly 
    };
    const checkDisability=()=>{
        // if(counter===0)
        // {
        //     setDisable(true)
        // }
        // else
        // {
        //     setDisable(false)
        // }

        //OR

        counter===0?setDisable(true):setDisable(false)
    };
    const checkNum=()=>{
        counter%2===0 ? setValue("Even") : setValue("Odd")
    };
    const toggleClass=()=>{
        counter%2===0 ? setCustomClass("text-orange") : setCustomClass("text-pink")
    }
    const timer=()=>{
        setTimeout(()=>{
            checkDisability();
            checkNum();
            toggleClass()
        },500)
    }
    // useEffect(()=>{
    //     console.log("use Effect called ",{counter});
    // },[counter]);
    useEffect(()=>{
        // checkDisability();
        // checkNum();
        // toggleClass()
        timer();
    },[timer]);

    
  return (
    <Suspense fallback={<Loader />}>
        <div>
        {/* niche wala 1st div routing jab start hua tab likha hai */}
        <div className='text-center text-6xl'>
            <p>Use Effect</p>
        </div>
        <div className='flex justify-center items-center'>
            <Button buttonname="Add" className="btn btn-neutral my-3" onClick={addHandler} />
        </div>
        <p className='text-6xl text-center'>{counter}</p>
        <div className='flex justify-center items-center'>
            <Button buttonname="Sub" className="btn btn-neutral my-3" onClick={subHandler} disabled={disable} />
        </div>
        <div className='flex justify-center items-center'>
            <span className={'text-4xl text-center font-bold '+customClass}>{value}</span>
        </div>
        
    </div>
    </Suspense>
  )
}

export default UseEffectHook