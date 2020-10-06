import React, {useState, useRef, useContext, useEffect} from 'react';
import AuthService from '../../Services/AuthService';
import {AuthContext} from '../../Context/AuthContext';
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
 LoginButton,
} from './Register.elements';

const Register = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    //for development ONLY
    const [role, setRole] = React.useState("");

    let timerID = useRef(null);
    let history = useHistory();
    
    useEffect(()=>{
      return ()=>{
          clearTimeout(timerID);
      }
  },[]);

    const resetForm = () => {
      setUsername("")
      setPassword("")
      setRole("")

    }

    
    const onSubmit = e =>{
        e.preventDefault();
        AuthService.register({username, password, role}).then(data => {
            console.log(data);
            //implement error detection
            resetForm();
            timerID = setTimeout(()=>{
             history.push('/login');
          },2000)
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
                    <LoginCardHeader><LoginCardHeaderText>Register</LoginCardHeaderText></LoginCardHeader>
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
                       <Input
                        type="role"
                        label="role"
                        value={role}
                        onChange={val => setRole(val)}
                      />
                        <LoginButton primary onClick={onSubmit}>register</LoginButton>
                      </LoginFields>
                  </LoginCard>
                </LoginColumn>
              </LoginRow>
            </LoginContainer>
          </LoginSection>
        </LoginWrapper>
    )
}

export default Register;