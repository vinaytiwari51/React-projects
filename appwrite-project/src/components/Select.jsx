import React, { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {

    const id = useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}

      <Select
       className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}

       {...props}
       ref = {ref}
        id = {id}
      >
            {options?.map((option) =>(
                <option
                    key={option}
                    value={option}
                  >
                    {option}
                </option>
            ))}
      </Select>
    </div>
  )
}

export default React.forwardRef(Select)
