const CompanyReducer = (state = [], action) => {
  console.log('CompanyReducerAction', action)
  if (action.type === 'ADD_COMPANY') {
    return [
      ...state,
      {
        id: new Date().toISOString(),
        ...action.payload
      }
    ]
  }

  if (action.type === 'DELETE_COMPANY') {
    return [
      ...state.filter(e => e.id !== action.payload)
    ]
  }

  return state
}

export default CompanyReducer