import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Companies from './Companies'

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
    this.props.addCompany({
      name,
      address
    })
  }

  render() {
    const { form } = this.state
    const { name, address } = form

    console.log('@PROPS', this.props)

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
        <Companies />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  }
}

//TODO: CONTINUE
const mapActionToProps = (dispatch) => {
  return {
    addCompany: (payload) => dispatch({
      type: 'ADD_COMPANY',
      payload
    }),
    deleteCompany: (payload) => dispatch({
      type: 'DELETE_COMPANY',
      payload
    })
  }
}

export default connect(mapStateToProps, mapActionToProps)(App)
