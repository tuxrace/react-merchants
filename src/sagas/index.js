import axios from 'axios'
import { takeLatest, call, put, select } from 'redux-saga/effects'
import { browserHistory, hashHistory } from 'react-router'

function getSingleMerchant(arr, id){
  return new Promise(function(resolve, reject){
    const result = arr.filter(item => item.id == id)          
    resolve(result)
  })
}

function immutableSplice(arr, start, deleteCount) {
  return [ ...arr.slice(0, start), ...arr.slice(start + deleteCount, arr.length) ]
}

function* all ({ payload }) {
  try{     
    const getMerchants = state => JSON.parse(state.main.merchants)
    const merchants = yield select(getMerchants)    
    const singleMerchant = yield getSingleMerchant(merchants, payload)       
    yield put({type:'LOAD_MERCHANT_DONE', payload: singleMerchant[0]})
  }catch(e){
    console.log(e)
  }    
}

function* loadMerchant ({ payload }) {
  try{     
    const getMerchants = state => JSON.parse(state.main.merchants)
    const merchants = yield select(getMerchants)    
    const singleMerchant = yield getSingleMerchant(merchants, payload)       
    yield put({type:'LOAD_MERCHANT_DONE', payload: singleMerchant[0]})
  }catch(e){
    console.log(e)
  }    
}

function* newMerchant ({ payload }) {
  try{         
    const getMerchants = state => JSON.parse(state.main.merchants)
    const merchants = yield select(getMerchants)
    const updatePayload = Object.assign({}, payload, {id: Math.random().toString(36).substr(2,9)})
    const newUpdateData = merchants.concat(updatePayload)
    localStorage.setItem('main',JSON.stringify(newUpdateData))        
    yield put({type:'ADD_MERCHANT_DONE', payload: newUpdateData})    
    window.location.href="/"
  }catch(e){
    console.log(e)
  }    
}

function* deleteMerchant ({ payload }) {
  try{     
    console.log('dsss')
    const getMerchants = state => JSON.parse(state.main.merchants)
    const merchants = yield select(getMerchants)
    const delIdx = merchants.findIndex(item => item.id === payload.id)
    const newUpdateData = immutableSplice(merchants, delIdx, 1)    
    localStorage.setItem('main',JSON.stringify(newUpdateData))
    // const singleMerchant = yield getSingleMerchant(merchants, payload)       
    yield put({type:'DELETE_MERCHANT_DONE',payload: newUpdateData})
    window.location.reload()
  }catch(e){
    console.log(e)
  }    
}

function* saga(){    
  yield takeLatest('LOAD_MERCHANT', loadMerchant);
  yield takeLatest('NEW_MERCHANT', newMerchant);
  yield takeLatest('LOAD_ALL', all);
  yield takeLatest('DELETE_MERCHANT', deleteMerchant);
}

export default saga;
