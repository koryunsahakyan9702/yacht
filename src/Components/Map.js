import React, { forwardRef } from 'react'
import "./Map.scss"
import {BiLogoInstagram,BiLogoFacebook} from "react-icons/bi"
import {FiTwitter} from "react-icons/fi"

 function Map({},ref) {
  return (
    <div className="map" ref={ref}>
        <div className="mapImg"></div>
        <div className="contact">
            <div className="contact_tit">Контакты</div>
            <div className="cont_border"></div>
                <div className="tel">
                    <span className="tel1">Адрес:</span>
                    <span className="tel2">г. Сочи, ул. Бзугу, 9</span>
                </div>
                <div className="tel">
                <span className="tel1">Телефон:</span>
                <span className="tel2">8 (622) 62-05-63</span>
                </div>
                <div className="tel">
                <span className="tel1">E-mail:</span>
                <span className="tel2">yachtclub-sochi@mail.ru</span>
                </div>
                <div className="tel">
                <span className="tel1">Мы в социальных сетях:</span>
                </div>
                <div className="tel">
                    <a href="#"><BiLogoFacebook size={25}/></a>
                    <a href="#"><FiTwitter size={25}/></a>
                    <a href="#"><BiLogoInstagram size={25}/></a>


                </div>
        </div>
    </div>
  )
}
export default forwardRef(Map)
