import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {Link} from 'react-router-dom';
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
                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link>  
                    <Link to="/login">
                        <li>
                            Login
                        </li>
                    </Link>  
                    <Link to="/register">
                        <li>
                            Register
                        </li>
                    </Link>  
                </IconContext.Provider>
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link> 
                    <Link to="/todos">
                        <li>
                            Todos
                        </li>
                    </Link> 
                    {
                        user.role === "admin" ? 
                        <Link to="/admin">
                            <li>
                                Admin
                            </li>
                        </Link> : null
                    }  
                    <button type="button" onClick={onClickLogoutHandler}>Logout</button>
                </IconContext.Provider>

            </>
        )
    }
    return(
        <nav>
            <Link to="/">
                <div className="navbar-brand">Maskify</div>
            </Link>
            <div>
                <ul>
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;