import React from 'react'
import "./News2.scss"
import {PiShareFatThin} from "react-icons/pi"
import user from "../images/author-photo.jpg"
export default function News2() {
    const date = new Date()
    const day =date.getDay()
    const month =date.getMonth()
    const year=date.getFullYear()
  return (
    <div className="cont">
        <div className="cont_tit">Другие новости</div>
        <div className="cont_border"></div>
        <div className="cont_news">
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
        </div>
    </div>
  )
}
