import React from 'react';
import './Footer.css'
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';


const Footer = () => {
    return (
        <>
            <div className={"footer"}>
                <ul>
                    <li>
                        <a href="http://localhost:5173/">
                            <Button>
                                Главная
                            </Button>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:5173/news">
                            <Button>
                                Новости
                            </Button>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Button id='yak'>
                                Связаться
                            </Button>
                        </a>
                    </li>
                </ul>
                <div>
                    <h5>
                        Связаться с нами!
                    </h5>
                    <div className={"contact"}>
                        <p>
                            +996 123 456 789
                        </p>
                        <a href="">
                            <CallIcon/>
                        </a>
                    </div>
                    <div className={"contact"}>
                        <p>
                            daily24.kg
                        </p>
                        <a href="https://www.instagram.com/daily24.kg?igsh=MXU0NW9yODl1YWxodQ=="target='_blank'>
                            <InstagramIcon/>
                        </a>
                    </div>

                    <div className={"contact"}>
                        <p>
                            Ala-Too 24
                        </p>
                        <a href="https://www.youtube.com/@--2485" target='_blank'>
                            <YouTubeIcon/>
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;