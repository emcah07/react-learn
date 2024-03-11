import React from 'react';
import './Home.css'
import tktl from "../../pics/svet.jpg"
import reading from "../../pics/fraud.jpg"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const Home = () => {

    return (
        
        <>
        
            <section className={"sec1"}>
                <div className={"div1sec1"}>
                    <img src={tktl} alt=""/>
                    <div>
                        <h2>
                        Отключения света. <br/>Кыргызстанцы часами<br/> вынуждены сидеть в темноте <br/>и без воды!
                        </h2>
                        <p>
                        Жители регионов страны продолжают жаловаться на ежедневные отключения света. <br/>Энергетики заявляют, что всему виной перегрузка оборудования. <br/>Но удивительное дело, происходит это каждый день <br/>примерно в одно и то же время и на одних и тех же участках.<br/>
                        Ситуация осложняется еще и тем, что во многих городах и селах при отключении света <br/>пропадает питьевая вода. В итоге ни кушать приготовить, ни воды попить,<br/> ни, пардон, в туалет сходить. <br/>
                        Кыргызстанцы уже и готовы посидеть пару часов без света,<br/> но хотят знать время отключений. <br/>
                        «Я жительница Токмака Чуйской области. У нас отключают свет каждый день,<br/> иной раз два раза в день. Живу в частном доме. Топим углем. <br/>Пользуемся электромоторчиком, который гоняет воду в системе. <br/>И вот только разогрею печку, отключают свет. Печка нагревается до 100 градусов и выше.<br/> Расширитель закипает, приходится выгребать из печки разгоревшийся докрасна уголь.<br/> Когда подключают свет, приходится заново топить печку. А у нас дома маленькие дети,<br/> не ходячий 90-летний старик», — пишет читательница.<br/>
                        </p>
                    </div>
                </div>
            </section>
            <section className={"sec2"}>
           
                <div className={"div1sec2"}>
                    <div>
                        <h2>
                            "В Бишкеке задержан подозреваемый в телефонном мошенничестве"
                        </h2>
                        <p>
                        В Бишкеке задержан подозреваемый в телефонном мошенничестве, который за неделю получил 5 миллионов сомов. Об этом сообщает пресс-служба УВД столицы.

По ее данным, 28 февраля 2024 года в УВД Свердловского района Бишкека с заявлением обратилась жительница столицы. Она рассказала, что неизвестные позвонили ей на стационарный телефон примерно в 00.30. Женщине сказали, что ее сноха пострадала в дорожно-транспортном происшествии, необходима определенная сумма денег. Через некоторое время к дому пострадавшей приехал парень на автомобиле, забрал 100 тысяч сомов и $500 и уехал.<br/>
                        </p>
                    
                    </div>
                    <img src={reading} alt=""/>
                </div>
                <div className={"div2sec2"}>
                    <Link to="/news">
                        <Button variant="contained">Смотреть еще</Button>
                    </Link>
                </div>
            </section>
        </>
    );
};



export default Home;