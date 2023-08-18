import React, { forwardRef } from 'react'
import "./Event.scss"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
 function Event({},ref) {
  return (
    <div className="event" ref={ref}>
        <div className="event-top">
            <div className="event_about">
                <p className="about_date">20 октября - 19 апреля</p>
                <p className="communicate">Стань частью команды</p>
                <div className="event_boreder"></div>
                <p className="about_all">Хотите попробовать себя в яхтинге?
                    Наш клуб готов стать их воротами
                    в морскую культуру! </p>
            </div>
            <div className="event_arrow"><AiOutlineArrowRight size={30} color="#163152" className='x'/></div>
            <div className="imgdiv"></div>
        </div>
        <div className="event_bot">
        <div className="imgdiv"></div>
        <div className="event_arrow"><AiOutlineArrowLeft size={30} color="#163152" className='x'/></div>

        <div className="event_about">
        <p className="about_date">20 октября - 19 апреля</p>
                <p className="communicate">Стань частью команды</p>
                <div className="event_boreder"></div>
                <p className="about_all">Хотите попробовать себя в яхтинге?
                    Наш клуб готов стать их воротами
                    в морскую культуру! </p>
        </div>

        </div>
    </div>
  )
}
export default forwardRef(Event)
