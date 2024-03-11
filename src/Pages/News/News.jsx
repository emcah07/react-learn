import React from 'react';
import './News.css';
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import botiha from "../../pics/spring.webp";
import crown from "../../pics/sooronbai.jpg"
import guest from "../../pics/workabroad.jpg"



const News = () => {
    return (

        
        <div>
            
            <Header/>
            <section className={"news1"}>
                <div className={"div1news1"}>
                    <img src={botiha} alt=""/>

                    
                    <div>
                        <h2>
                        Весна пришла. На следующей неделе в Бишкеке до +8 градусов
                        </h2>
                        <p>
                        <span>4 марта</span> в столице без осадков.<br />
 Ночью будет морозно, до −6 градусов. Днем воздух прогреется до +3 градусов.
<br />
<span>5 марта</span>  также будет солнечно. <br />
Ночью до −5 градусов, днем до +5 градусов.
<br />

<span>6 марта</span>  в Бишкеке без осадков. <br />
Ночью уже значительно теплее — до −3 градусов, днем воздух прогреется до +8 градусов.
<br />

<span>4 марта</span>  также солнечно. <br />
Ночью до −2 градусов, днем до +8 градусов.
<br />

<span>8-9 марта</span>  в столице преимущественно без осадков. <br />
Кроме того, ожидается дальнейшее небольшое повышение температуры воздуха.
<br />
<br />
<br />
                        </p>
                       
                    </div>
                </div>
            </section>
            <section className={"news2"}>
                <div className={"div1news2"}>
                    <div>
                        <h2>
                        Надо ли лишать Сооронбая Жээнбекова статуса экс-президента? 
                        </h2>
                        <p>
                        «Сейчас президент и председатель ГКНБ активно борются с коррупцией. До этого было много разговоров о коррупционере Райымбеке Матраимове, некоторые депутаты из-за него покинули должности, и до сих пор идет чистка. Но сегодня среди таких есть и забытый Сооронбай Жээнбеков. Он привел Райымбека Матраимова на политическую арену. Сооронбай Жээнбеков живет за счет государства, водит госмашину и получает государственные деньги», — сказал Акылбек Тумонбаев.
                        </p>
                    </div>
                    <img src={crown} alt=""/>
                </div>
            </section>
            <section className={"news1"}>
                <div className={"div1news1"}>
                    <img src={guest} alt=""/>
                    <div>
                        <h2>
                        Что необходимо знать, <br />выезжая на работу за границу.
                        </h2>
                        <p>
                        При поиске работы за рубежом не соглашайтесь <br />на предложения нелегальной подработки.<br /> В случае нелегального трудоустройства <br />будет невозможно получить достойную оплату труда, <br />реализовать положенные социальные гарантии <br />(например, оказание медицинской помощи).
                        <br />Внимательно изучите предложение работодателя <br />и проверьте правильность оформлен
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
       
    );
};

export default News;