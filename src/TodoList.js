import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { changeInputValue, clickbtn, deleteItem, getTolist, getMyListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickbtn = this.clickbtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange)
    }
    render () {
        return (
            <TodoListUI 
                inputValue = {this.state.value}
                changeInputValue = {this.changeInputValue}
                clickbtn = {this.clickbtn}
                list = {this.state.list}
                deleteItem = {this.deleteItem}
            />
        )
    }
    componentDidMount () {
        // const action = getTolist()
        // store.dispatch(action)
        const action =  getMyListAction();
        store.dispatch(action)
        console.log(action)
    }
    storeChange () {
        this.setState (store.getState())
    }
    changeInputValue (e) {
        const action =changeInputValue(e.target.value)
        store.dispatch(action)
    }
    clickbtn () {
        const action = clickbtn()
        store.dispatch(action)
    }
    deleteItem (index) {
        const action = deleteItem(index)
        store.dispatch(action)
    }
}

export default TodoList;