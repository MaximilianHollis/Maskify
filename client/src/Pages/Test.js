import React, { useState, useContext, useEffect } from 'react';
import DataService from '../Services/DataService';
import Message from '../Elements/Message';
import { AuthContext } from '../Context/AuthContext';

const Test = () => {
    const [data, setData] = useState({ mask: "" });
    const [data, setData] = useState({ noMask: "" });
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        TodoService.getTodos().then(data => {
            setTodos(data.todos);
        });
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        TodoService.postTodo(todo).then(data => {
            const { message } = data;
            resetForm();
            if (!message.msgError) {
                TodoService.getTodos().then(getData => {
                    setTodos(getData.todos);
                    setMessage(message);
                });
            }
            else if (message.msgBody === "UnAuthorized") {
                setMessage(message);
                authContext.setUser({ username: "", role: "" });
                authContext.setIsAuthenticated(false);
            }
            else {
                setMessage(message);
            }
        });
    }

    const onChange = e => {
        setTodo({ name: e.target.value });
    }

    const resetForm = () => {
        setTodo({ name: "" });
    }

    return (
        <div>
            <ul className="list-group">
                {
                    todos ?
                        todos.map(todo => {
                            return <TodoItem key={todo._id} todo={todo} />
                        }) :
                        (<p>nothing</p>)
                }
            </ul>
            <br />
            <form onSubmit={onSubmit}>
                <label htmlFor="todo">Enter Todo</label>
                <input type="text"
                    name="todo"
                    value={todo.name}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Please Enter Todo" />
                <button className="btn btn-lg btn-primary btn-block"
                    type="submit">Submit</button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    );

}

export default Test;