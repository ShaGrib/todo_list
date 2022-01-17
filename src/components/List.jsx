import React, { useState } from 'react';

const List = (props) => {

    let [listItem, setListItem] = useState('');
    let [completed, setCompleted] = useState(false);
    let [todoList, setTodoList] = useState([]);

    const createListItem = (e) => {
        e.preventDefault();
        console.log("submitted");
        console.log(listItem);
        const todoObj = { listItem, completed };
        console.log(todoObj);
        setTodoList([...todoList, todoObj]);
        document.getElementById('listitem').reset();
    };

    const deleteListItem = (index) => {
        setTodoList(todoList.filter((listItem, i) => i !== index));
    };

    const toggleCompleted = (index) => {
        console.log('completing', index);
        let [...copyOfTodoList] = todoList;
        console.log('copy of todo list', copyOfTodoList);
        copyOfTodoList[index].completed = !copyOfTodoList[index].completed;
        console.log('copy of todo list after updating', copyOfTodoList);
        setTodoList(copyOfTodoList);
    };

    return (
        <>
            <form id='listitem' onSubmit={createListItem}>
                <div className="form-group">
                    <label htmlFor="">List Item: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => setListItem(e.target.value)} />
                </div>
                <input type="submit" value="Create List Item!" />
            </form>
            <hr />
            <h3>Here is your todo list!</h3>
            <ul>
            {
                todoList.map((list, i)=>{
                    return (
                            <li key={i} style={{ textDecoration: listItem.completed ? 'line-through' : 'none' }}>
                            <h1>{list.listItem}<input type="checkbox" name="" id="" onClick={() => toggleCompleted(i)} />
                            <input type="submit" value="Delete" onClick={() => deleteListItem(i)} /></h1>
                            </li>
                        )
                    })
                
            }
            </ul>
        </>
    );
};

export default List;