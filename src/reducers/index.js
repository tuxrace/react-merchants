const mockData = require('../../mockData')
const loadInitialData = () => {
  if (localStorage.getItem('main')){
    return localStorage.getItem('main',JSON.stringify(mockData))
  } else{
    localStorage.setItem('main',JSON.stringify(mockData))
    return JSON.stringify(mockData)
  }
}
const initialState = {
  merchants: loadInitialData(),
  singleMerchant:null  
}

const reducer = (state = initialState, action) => {  
  console.log(state)
  switch (action.type) {    
    case 'LOAD_MERCHANT_DONE':
      return Object.assign({}, state, {singleMerchant: action.payload})    
    case 'ADD_MERCHANT_DONE':
      return Object.assign({},state, {merchants: action.payload})
    case 'DELETE_MERCHANT_DONE':
      return Object.assign({},state, {merchants: action.payload})
    default:
      return state
  }
}

export default reducer
