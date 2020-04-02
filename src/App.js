import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Companies from './Companies'
import Employees from './Employees'

class App extends PureComponent{
  constructor(props) {
    super(props)

    this.state = {
      form: {
        name: '',
        address: ''
      }
    } 
  }

  handleInputChange = (event) => {
    const { id, value } = event.target
    this.setState({
      form: {
        ...this.state.form,
        [id]: value
      }
    })
  }

  handleSave = () => {
    const { form: { name, address } } = this.state
    this.props.AddCompany({
      name, address
    })
  }

  deleteCompany = (id) => {
    this.props.DeleteCompany(id)
  }

  render() {
    const { form } = this.state
    const { employees } = this.props
    const { name, address } = form

    return (
      <div className="App">
        <header className="App-header">
          <h2>Companies</h2>
        </header>
        <div style={{ paddingBottom: '20px' }}>
          <input
            placeholder='Name'
            id='name'
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            placeholder='Address'
            id='address'
            value={address}
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleSave}
          >Save</button>
        </div>
        <Companies 
          deleteCompany={this.deleteCompany}
        />
        <Employees
          employees={employees}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies,
  employees: state.employees
})

const mapActionToProps = (dispatch) => {
  return {
    AddCompany: (payload) => {
      dispatch({
        type: 'ADD_COMPANY',
        payload
      })
    },
    DeleteCompany: (payload) => {
      dispatch({
        type: 'DELETE_COMPANY',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(App);
