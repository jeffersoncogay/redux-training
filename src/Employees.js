import React from 'react'

const Employees = (props) => {
  return (
    <div>
      <h3>Employees</h3>
      {
        props.employees.map((e, i) => (
          <div key={i}>Name: {e.name}</div>
        ))
      }
    </div>
  
  )
}

export default Employees