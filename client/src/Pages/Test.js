import React, { useState, useContext, useEffect } from 'react';
import DataService from '../Services/DataService';
import { AuthContext } from '../Context/AuthContext';
import Message from '../Elements/Message';

const Todos = () => {
    const [mask, setMask] = useState({ mask: "" });
    const [masks, setMasks] = useState([]);
    const authContext = useContext(AuthContext);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        DataService.getMasks().then(data => {
            resetForm();
            setMasks(data.masks);
        });
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        console.log(mask)
        DataService.postMask(mask).then(data => {
            const { message } = data;
            resetForm();
            if (!message.msgError) {
                DataService.getMasks().then(getData => {
                    //needs a proper callback
                    setMasks(getData.masks);
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
        setMask({ mask: e.target.value });
    }

    const resetForm = () => {
        setMasks({ mask: "" });
    }

    return (
        <div>
            <ul className="list-group">
                {
                   /*  masks ?
                        masks.map(mask => {
                            return <p key={mask._id}>{mask}</p>
                        }) :
                        (<p>nothing</p>) */
                }
            </ul>
            <br />
            <form onSubmit={onSubmit}>
                <label htmlFor="todo">Enter Todo</label>
                <input type="text"
                    name="todo"
                    value={mask.name}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Please Enter Todo" />
                <button className="btn btn-lg btn-primary btn-block"
                    type="submit">Submit</button>
            </form>
        </div>
    );

}

export default Todos;