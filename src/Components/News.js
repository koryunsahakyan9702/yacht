import React from 'react'
import "./News.scss"
import {PiShareFatThin} from "react-icons/pi"
import user from "../images/author-photo.jpg"
export default function News() {
    const date = new Date()
    const day =date.getDay()
    const month =date.getMonth()
    const year=date.getFullYear()
  return (
    <div className="news">
        <div className="news_title">Новости</div>
        <div className="news_items">
            <div className="general_news">
                <div className="img_news"></div>
                <div className="desc">
                <p className="winner">Победитель регаты шкипер Иван Кулешов</p>
                <p className="img_tit">Итоги регаты Sochi Race Week 2020</p>
                <p className="img_about">Свыше сотни участников собирались 
                на побережье Сочи, чтобы посоревноваться за главный 
                приз. В соревнованиях приняли участие как новички, 
                так и моряки, имеющие за плечами немалый опыт. </p>
                </div>
                
                <div className="user">
                    <div className="user_img">
                        <div className="author"><img src={user} /></div>
                        <div className="name">
                            <div className="nameP">Артем Колесников</div>
                            <p>0{day}.0{month}.{year}</p>
                        </div>
                    </div>
                    <div className="share">
                        <PiShareFatThin size={30} color='#163152'/>
                    </div>
                </div>
            </div>
            <div className="second_news">
                <div className="second1">
                <div className="img_news"></div>
                <div className="desc">

                <p className="winner">Участник выставки – яхта Golsling 3.15</p>
                <p className="img_tit">Выставка Sochi Boat Show</p>
                <p className="img_about">Выставка катеров и яхт Sochi Boat Show состоится 
                с 19 по 29 июля 2020 года                    
                 в нашем яхт-клубе. В программе будет  ...</p>
                 </div>
                 <div className="user">
                    <div className="user_img">
                    <div className="author"><img src={user} /></div>
                        <div className="name">
                            <div className="nameP">Артем Колесников</div>
                            <p>0{day}.0{month}.{year}</p>
                        </div>
                    </div>
                    <div className="share">
                    <PiShareFatThin size={20} color='#163152'/>

                    </div>
                </div>
                </div>
                <div className="second2">
                <div className="img_news"></div>
                <div className="desc">

                    <p className="winner">Участница регаты 2019 Ирина Петрова</p>
                    <p className="img_tit">Регате быть!</p>
                    <p className="img_about">Из-за карантина весенние регаты отменили, но мы надеялись, что  летние соревнования состоятся. С радостью сообщаем, что летняя ...</p>
                </div>
                <div className="user">
                    <div className="user_img">
                    <div className="author"><img src={user} /></div>
                        <div className="name">
                            <div className="nameP">Артем Колесников</div>
                            <p>0{day}0{month}.{year}</p>
                        </div>
                    </div>
                    <div className="share">
                    <PiShareFatThin size={20} color='#163152'/>

                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
  )
}
