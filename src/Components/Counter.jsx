import React from 'react'
import Button from '../Shared/Button'
import Input from '../Shared/Input'

const Counter = () => {
  return (
    <>
        <div className='text-center'>
            <p className='text-gray-dark lg:text-8xl md:text-7xl sm:text-5xl pt-2 pb-2 mt-2 mb-2 font-slackside'>
                COUNTER
            </p>
            <div className='lg:pr-5 lg:pl-5 lg:pt-4 lg:pb-4 md:pt-2 md:pb-2 text-gray-light lg:bg-gray-dark break-words md:bg-gray sm:bg-green'>
                <p className='flex justify-center items-center lg:text-5xl md:text-4xl'>Hello Tailwind</p>
            </div>
        </div>
        <div className='flex justify-center items-center my-5 mx-5'>
            <Input 
            type="text" 
            placeholder="Enter First Name" 
            className="mt-3 mb-3 p-3 rounded-lg"
            label="FName"
            />
        </div>
        <div className='flex justify-center items-center my-5 mx-5'>
            <Input 
            type="text" 
            placeholder="Enter Last Name" 
            className="mt-3 mb-3 p-3 rounded-lg"
            label="LName"
            />
        </div>
        {/* <div className="flex justify-center items-center lg:mt-6 md:mt-4 sm:mt-2">
            <Button buttonname='Submit' className="rounded"/>
            <Button buttonname='Add' className="rounded mr-2 ml-2"/>
            <Button buttonname='Subtract' className="rounded"/>
        </div> */}
        <div className="flex justify-center items-center lg:mt-6 md:mt-4 sm:mt-2">
            <Button buttonname='Submit' className="btn btn-neutral"/>
            <Button buttonname='Add' className="btn btn-neutral mr-2 ml-2"/>
            <Button buttonname='Subtract' className="btn btn-neutral"/>
        </div>
        
    </>
  )
}

export default Counter