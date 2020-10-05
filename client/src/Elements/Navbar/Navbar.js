import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Link } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';
import { Button } from '../../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
  } from './Navbar.elements';
  
const Navbar = props =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                   <Nav>
                       <NavbarContainer>
                           <NavLogo to='/' onClick={closeMobileMenu}>
                                <NavIcon />
                                MASKIFY
                           </NavLogo>
                           <MobileIcon onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}
                          </MobileIcon>
                          <NavMenu onClick={handleClick} click={click}>
                              <NavItem>
                                  <NavLinks to='/' onClick={closeMobileMenu}>
                                      Home
                                  </NavLinks>
                              </NavItem>
                              <NavItem>
                                  <NavLinks to='/services' onClick={closeMobileMenu}>
                                      Services
                                  </NavLinks>
                              </NavItem>
                              <NavItem>
                                  <NavLinks to='/login' onClick={closeMobileMenu}>
                                      Login
                                  </NavLinks>
                              </NavItem>
                              <NavItemBtn>
                                {button ? (
                                <NavBtnLink to='/register'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                                ) : (
                                <NavBtnLink to='/register'>
                                    <Button onClick={closeMobileMenu} fontBig primary>
                                    SIGN UP
                                    </Button>
                                </NavBtnLink>
                                )}
                            </NavItemBtn>
                          </NavMenu>
                       </NavbarContainer>
                   </Nav>
                </IconContext.Provider>
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <Nav>
                        <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>
                                <NavIcon />
                                MASKIFY
                           </NavLogo>
                           <MobileIcon onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}
                          </MobileIcon>
                          <NavMenu onClick={handleClick} click={click}>
                              <NavItem>
                                  <NavLinks to='/dashboard' onClick={closeMobileMenu}>
                                      Dashboard
                                  </NavLinks>
                              </NavItem>
                              <NavItem>
                                  <NavLinks to='/todos' onClick={closeMobileMenu}>
                                      Todos
                                  </NavLinks>
                              </NavItem>
                              {
                                user.role === "admin" ? 
                                <NavItem>
                                <NavLinks to='/admin' onClick={closeMobileMenu}>
                                    Admin
                                </NavLinks>
                            </NavItem> : null
                            }  
                            <NavItem>
                                  <NavLinks to='/' onClick={onClickLogoutHandler}>
                                      Logout
                                  </NavLinks>
                              </NavItem>


                            </NavMenu>
                        </NavbarContainer>
                    </Nav>
                </IconContext.Provider>

            </>
        )
    }
    return(
        <nav>
            <div>
                <ul>
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;