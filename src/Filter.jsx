import React from 'react'

const Filter = () => {
  return (
    <div>
        <select className='select'>
            <option value="All" className='bg-danger'>All</option>
            <option value="Completed" className='bg-danger'>Completed</option>
            <option value="Not-Completed" className='bg-danger'>Not-Completed</option>

        </select>
    </div>
  )
}

export default Filter