import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import CompanyReducer from './redux/CompanyReducer'
import EmployeeReducer from './redux/EmployeeReducer'

const store = createStore(combineReducers({
  companies: CompanyReducer,
  employees: EmployeeReducer
}), {
  companies:  [
    {
      id: 1,
      name: 'Company 1',
      address: 'Cebu City'
    },
    {
      id: 2,
      name: 'Company 2',
      address: 'Mandaue City'
    }
  ],
  employees: [
    {
      id: 1,
      name: 'Employee 1',
      company_id: 1
    },
    {
      id: 2,
      name: 'Employee 2',
      company_id: 1
    },
    {
      id: 3,
      name: 'Employee 3',
      company_id: 2
    },
    {
      id: 4,
      name: 'Employee 4',
      company_id: 2
    }
  ]
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);