import React from 'react'
import "./Services.scss"
import {BsCircleFill} from "react-icons/bs"

export default function Services() {
    const aboutlist =["2 каюты",
    "4 спальных места",
    "аудиосистема, кондиционер",
    "холодильник, микроволновка",
    "душ, туалет"]
  return (
    <div className="service">
        <div className="service_title">Аренда яхты</div>
        <div className="service_border"></div>
        <div className="service_item">
            <div className="item_about">
                <div className="about_title">Катер Meridian 401</div>
                <div className="img_service"></div>
                <div className="about_desc">Яхта 401 длиной 12.5 метров и шириной 
                4.2 метра, вместимостью 11 человек</div>
                <div className="about_list">
                    {aboutlist.map((item,index)=>{
                        return (
                            <p className="list_item" key={index}><BsCircleFill fill='#00C6BD'
                            color='#00C6BD'
                            className='x'
                            />{item}</p>
                        )
                    })}
                </div>
                <div className="price">
                    <div className="price_title">Цена:</div>
                    <div className="price_money">14 000 ₽/час</div>
                </div>
            </div>
        </div>
    </div>
  )
}
