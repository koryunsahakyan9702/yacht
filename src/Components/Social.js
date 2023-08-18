import React from 'react'
import "./Social.scss"
import {BiLogoInstagram,BiLogoFacebook} from "react-icons/bi"
import {FiTwitter} from "react-icons/fi"
export default function Social() {
  return (
    <div className="social">
        <div className="butt_div">
            <div className="send">Обучение</div>
            <div className="send">Калининград</div>
            <div className="send">Интервью</div>
        </div>
        <div className="fb_div">
            <span>Поделиться статьей:</span>
            <a href="#"><BiLogoFacebook size={20}/></a>
            <a href="#"><FiTwitter size={20}/></a>
            <a href="#"><BiLogoInstagram size={20}/></a>
        </div>
    </div>
  )
}
