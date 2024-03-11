import React from 'react';
import logo from "../../pics/logo 24.png"
import './Header.css'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={"header"}>
            <a href="http://localhost:5173/">
                <img src={logo} alt=""/>
            </a>
            
            <div className={"insideheader"}>
                <ul>
                    <li>
                        <Link to="/">
                            <Button>Главная</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                            <Button>Новости</Button>
                        </Link>
                    </li>
                    <li>
                        <a href="#yak">
                            <Button >Сообщить новость</Button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};





export default Header;