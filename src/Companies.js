import React from 'react'
import { connect } from 'react-redux'

const Companies = (props) => {
  console.log('props', props)
  const { companies, dispatch } = props
  return (
    <div>
      {
        companies.map(({ id, name, address }) => {
          return (
            <div key={id} style={{ paddingBottom: '10px' }}>
              <div>
                <strong>Name: </strong> <span>{name}</span>
              </div>
              <div>
                <strong>Address: </strong> <span>{address}</span>
              </div>
              <button
                onClick={() => {
                  dispatch({
                    type: 'DELETE_COMPANY',
                    payload: id
                  })
                }}
              >Delete {name}</button>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  }
}

export default connect(mapStateToProps)(Companies)