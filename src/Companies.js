import React from 'react'
import { connect } from 'react-redux'

const Companies = (props) => {
  const { deleteCompany, companies, dispatch } = props
  console.log('zzzz', props)
  return (
    <div>
      {
        companies.map(({ id, name, address, employees }) => {
          return (
            <div key={id} style={{ paddingBottom: '10px' }}>
              <div>
                <strong>Name: </strong> <span>{name}</span>
              </div>
              <div>
                <strong>Address: </strong> <span>{address}</span>
              </div>
              <div>
                <strong>Employees: </strong>
              </div>
              <button
                onClick={() => {
                  deleteCompany(id)
                }}
              >
                Delete Company
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  companies: state.companies
})

export default connect(mapStateToProps)(Companies)