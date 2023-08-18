import React from 'react'
import "./Header.scss"
import logoImg from "../images/logotype.png"
import accountImg from "../images/account.png"
import { NavLink, Outlet,  } from 'react-router-dom'
import Footer from './Footer'
import accountAuth from "../images/author-photo.jpg"
export default function Header({scrollDown,Contref,regRef,auth,logRef,Trainref}) {
  
  return (
    
    <>
    <div className="header">
        <div className="logo__div">
           <NavLink to="/"><img src={logoImg}/></NavLink> 
        </div>
        <div className="about__div">
            <NavLink className="about_title" to="/">Наш клуб</NavLink>
            <NavLink className="about_title" to="/?scrollToElement=regElement"  onClick={()=>scrollDown(regRef)}> Регаты</NavLink>
            <NavLink className="about_title" to="/?scrollToElement=logElement" onClick={()=>scrollDown(logRef)}>Команда</NavLink>
            <NavLink className="about_title" to="/about?scrollToElement=targetElement" onClick={()=>scrollDown(Trainref)}>Обучение</NavLink>
            <NavLink className="about_title" to="/about">новости</NavLink>
            <NavLink className="about_title" to="/?scrollToElement=Contact" onClick={()=>scrollDown(Contref)}>Контакты</NavLink>
            <NavLink className="about_title">
              <img src={auth?accountAuth:accountImg} className='accimg'/>
            </NavLink>

        </div>
        </div>
        <Outlet/>
        <Footer/>
        </>
  )
}
