import React from 'react'

function Navbar() {
  return (



    
    <div className='container m-5'>
        <div className='d-flex justify-content-around'>
            <div >
                My Todos
            </div>
            <div>
                <label htmlFor="filter">Status Filter : </label>
                <span>
                    <select defaultValue={"All"} className='filter ms-1' name="filter" id="filter">
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Not Completed">Not Completed</option>
                    </select>
                </span>

            </div>

        </div>

    </div>
  )
}

export default Navbar