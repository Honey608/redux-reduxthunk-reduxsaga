import React from 'react';
import { Input, Button, List, Typography } from 'antd';

const TodoList = (props) => {
    return (
        <div style={{padding:'15px'}}>
            <div>
                <Input value={props.inputValue} onChange={props.changeInputValue} placeholder={props.inputValue} style={{width:'250px',marginRight:'10px'}}/> 
                <Button onClick={props.clickbtn} type='primary'>添加</Button>
            </div>
            <div style={{marginTop:'10px',width:'300px'}}>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,key) => (
                    <List.Item key={key} onClick={()=>{props.deleteItem(key)}}>
                        <Typography.Text mark></Typography.Text> {item}
                    </List.Item>
                )}
                />
            </div>
        </div>
    )
}

export default  TodoList