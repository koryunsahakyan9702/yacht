import React, { useEffect, useRef } from 'react'
import "./About.scss"
import {BsCircleFill} from "react-icons/bs"
import Intro from './Intro'
import Frame from './Frame'
import Part from './Part'
import Rect from './Rect'
import Part2 from './Part2'
import Social from './Social'
import News2 from './News2'
export default function About({Trainref}) {
  
  useEffect(() => {
    // Проверяем параметры запроса
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToElement = urlParams.get('scrollToElement');

    if (scrollToElement === 'targetElement' && Trainref.current) {
      Trainref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [])
  return (
    <div className="about">
        <div className="nav">
            <span className='nav_gen'>Главная <BsCircleFill color="#00C6BD" size={10}/></span>
            <span className='nav_sec'>Новости <BsCircleFill color="#00C6BD" size={10}/></span>
            <span className="it">Открытие школы яхтинга “BigRace”</span>
        </div>
        <Intro/>
        <Frame ref={Trainref}/>
        <div className="about_back"></div>
        <div className="about_name">Михаил Чернов и Николай Петров</div>
        <Part/>
        <Rect/>
        <Part2/>
        <Social/>
        <News2/>
    </div>
  )
}
