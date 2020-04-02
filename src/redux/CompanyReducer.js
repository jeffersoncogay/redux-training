const CompanyReducer = (state = [], action) => {
  if (action.type === 'ADD_COMPANY') {
    return [
      ...state,
      {
        id: state.length + 1,
        ...action.payload
      }
    ]
  }
  if (action.type === 'DELETE_COMPANY') {
    return [
      ...state.filter(e=> e.id !== action.payload)
    ]
  }
  return state
}

export default CompanyReducer