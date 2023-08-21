'use client'
import React, { useReducer } from 'react'

const reducer=(state:any,action:any)=>{
    if(action.type=='inc'){
        return state=state+1;
    }else if(action.type=='dec'){
        return state=state-1
    }else if(action.type=='reset'){
        return state=0;
    }

}
let initialVariable=1

const Couter = () => {
    const [state,dispatch]=useReducer(reducer,initialVariable)
  return (
    <div className='flex flex-col justify-center items-center bg-white p-12 rounded-md gap-y-3 '>
        <div >
            <h1 className='font-extrabold text-4xl text-black'>Couter App</h1>
        </div>
        <div className='bg-gray-600 text-white p-12 text-center w-[200px]'>
            <p className='font-semibold text-xl'>{state}</p>

        </div>

        <div className='flex gap-x-3'>
            <button className='bg-green-500 text-xl py-2 px-3 rounded-lg'
            onClick={()=>{
                dispatch({type:'inc'})
            }}
            >increment</button>
            <button className='bg-yellow-500 text-xl py-2 px-3 rounded-lg'
            onClick={()=>{
                dispatch({type:'dec'})
            }}
            >decrement</button>

            <button className='bg-red-500 text-xl py-2 px-3 rounded-lg'
            onClick={()=>{
                dispatch({type:'reset'})
            }}
            >rest</button>
        </div>
        
    </div>
  )
}

export default Couter