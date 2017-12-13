import axios from 'axios'
import { takeLatest, call, put, select } from 'redux-saga/effects'
import { toJS } from 'immutable'

function getSingleMerchant(arr, id){
  return new Promise(function(resolve, reject){
    const result = arr.toJS().filter(item => item.id == id)          
    resolve(result)
  })
}

function* loadMerchant ({ payload }) {
  try{     
    const getMerchants = state => state.get('merchants')
    const merchants = yield select(getMerchants)    
    const singleMerchant = yield getSingleMerchant(merchants, payload)       
    yield put({type:'LOAD_MERCHANT_DONE', payload: singleMerchant[0]})
  }catch(e){
    console.log(e)
  }    
}

function* saga(){    
  yield takeLatest('LOAD_MERCHANT', loadMerchant);
}

export default saga;
