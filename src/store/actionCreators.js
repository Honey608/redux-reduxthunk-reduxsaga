import { CHANGEINPUT, ADDITEM, DELETEITEM, GET_DATA, GET_MY_LIST} from './actionTypes';
import axios from 'axios';

export const changeInputValue = (value)=> ({
    type: CHANGEINPUT,
    value: value
})

export const clickbtn = (value)=> ({
    type: ADDITEM,
})

export const deleteItem = (index)=> ({
    type: DELETEITEM,
    index
})

export const getData = (data)=> ({
    type: GET_DATA,
    data
})

export const getTolist = ()=> {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data.data.list;
            const action = getData(data)
            dispatch(action)
        })
    }
}

export const getMyListAction =()=> ({
    type: GET_MY_LIST
})
