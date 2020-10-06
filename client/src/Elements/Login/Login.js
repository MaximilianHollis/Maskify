import React, {useState,useContext, useEffect} from 'react';
import AuthService from '../../Services/AuthService';
import {AuthContext} from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { Container, Button,  Img, ImgWrapper } from '../../globalStyles';
import Input from '../Universal/Input'
import { useHistory } from "react-router-dom";

import {
 LoginSection,
 LoginRow,
 LoginColumn,
 LoginCard,
 LoginCardHeader,
 LoginCardHeaderText,
 LoginContainer,
 LoginWrapper,
 LoginFields,

} from './Login.elements';

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    let history = useHistory();
    

    const authContext = useContext(AuthContext);


    
    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login({username, password}).then(data => {
            console.log(data);
            const { isAuthenticated, user, message } = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/todos');
            }
        });
    }


    return(
        <LoginWrapper>
          <LoginSection>
            <LoginContainer>
              <LoginRow>
               <LoginColumn></LoginColumn>
                <LoginColumn>
                  <LoginCard>
                    <LoginCardHeader><LoginCardHeaderText>Login</LoginCardHeaderText></LoginCardHeader>
                      <LoginFields>
                        <Input
                        type="username"
                        label="username"
                        value={username}
                        onChange={val => setUsername(val) }
                      />
                       <Input
                        type="password"
                        label="password"
                        value={password}
                        onChange={val => setPassword(val)}
                      />
                      </LoginFields>
                    
                    <form onSubmit={onSubmit}>
                        <button className="btn btn-lg btn-primary btn-block" 
                                type="submit">Log in </button>
                    </form>
                  </LoginCard>
                </LoginColumn>
              </LoginRow>
            </LoginContainer>
          </LoginSection>
        </LoginWrapper>
    )
}

export default Login;