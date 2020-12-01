import { put, takeEvery } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import axios from 'axios';
import { getData } from './actionCreators'

function* mySages() {
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList() {
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //     const data = res.data.data.list;
    //     const action = getData(data)
    //     put(action)
    // })
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList');
    const action = getData(res.data.data.list)
    yield put(action)
}

export default mySages