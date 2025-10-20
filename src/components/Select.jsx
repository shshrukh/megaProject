import React, { useId, useRef } from 'react'

const Select = ({options, label, className= "", type, ...props},ref) => {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id}></label>}
        <select 
            {...props}
            id={id}
            ref={ref }  
            className={`${className}`}  
        >
            {options?.map((option)=>{
                <options
                    key = {option}
                    value= {option}
                >
                    {option}
                </options>
            })}
        </select>

    </div>
  )
}

export default useRef(Select)
