import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './App';
import CompanyReducer from './reducers/CompanyReducer'
import EmployeeReducer from './reducers/EmployeeReducer'

const store = createStore(combineReducers({
  companies: CompanyReducer,
  employees: EmployeeReducer
}), {
  companies: [
    {
      id: 1,
      name: 'Company 1',
      address: 'Cebu City'
    },
    {
      id: 2,
      name: 'Company 2',
      address: 'Talisay City'
    },
    {
      id: 3,
      name: 'Company 3',
      address: 'Lapu-lapu City'
    },
  ]
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);