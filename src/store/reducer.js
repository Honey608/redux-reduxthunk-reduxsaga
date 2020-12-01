import { CHANGEINPUT, ADDITEM, DELETEITEM, GET_DATA} from './actionTypes';

const defuaultState = {
    value: 'write Something',
    list: [
        '早8点开晨会,分配今天的代码任务',
        '早9点和项目经理开需求沟通会',
        '早9点和项目经理开需求沟通会'
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defuaultState, action) => {
    if(action.type === CHANGEINPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.value = action.value;
        return newState;
    }
    if(action.type === ADDITEM) { 
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.value)
        newState.value = ''
        return newState
    }
    if(action.type === DELETEITEM) { 
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === GET_DATA) { 
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState
    }
    return state;
}