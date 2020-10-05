import React, {useState,useContext} from 'react';
import AuthService from '../../Services/AuthService';
import Message from '../Message';
import {AuthContext} from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { Container, Button,  Img, ImgWrapper } from '../../globalStyles';
import Form from '../Universal/Form'

import {
 LoginSection,
 LoginRow,
 LoginColumn,
 LoginCard,
 LoginCardHeader,
 LoginCardHeaderText,

} from './Login.elements';

const Login = props => {
    const [user, setUser] = useState({username: "", password : ""});
    const [message, setMessage] = useState(null);

    const authContext = useContext(AuthContext);

    const onChange = e =>{
        setUser({...user, [e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data => {
            console.log(data);
            const { isAuthenticated, user, message } = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/todos');
            }
            else
                setMessage(message);
        });
    }


    return(
        <>
          <LoginSection >
            <Container>
              <LoginRow>
               <LoginColumn></LoginColumn>
                <LoginColumn>
                  <LoginCard>
                    <LoginCardHeader><LoginCardHeaderText>Login</LoginCardHeaderText></LoginCardHeader>
                    <Form />
                    <form onSubmit={onSubmit}>
                        <h3>Please sign in</h3>
                        <label htmlFor="username" className="sr-only">Username: </label>
                        <input type="text" 
                              name="username" 
                              onChange={onChange} 
                              className="form-control" 
                              placeholder="Enter Username"/>
                        <label htmlFor="password" className="sr-only">Password: </label>
                        <input type="password" 
                              name="password" 
                              onChange={onChange} 
                              className="form-control" 
                              placeholder="Enter Password"/>
                        <button className="btn btn-lg btn-primary btn-block" 
                                type="submit">Log in </button>
                    </form>
                    {message ? <Message message={message}/> : null}
                  </LoginCard>
                </LoginColumn>
              </LoginRow>
            </Container>
          </LoginSection>
        </>
    )
}

export default Login;