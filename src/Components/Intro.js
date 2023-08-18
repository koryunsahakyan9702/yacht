import React from 'react'
import "./Intro.scss"

export default function Intro() {
  return (
    <div className="intro">
        <div className="intro-tit">
            <div className="introdate">30 января 2021</div>
            <div className="intro-big">Открытие школы яхтинга “BigRace” в Калининграде</div>
            <div className="intro-author">
                <div className="name_author">
                <span className="author_sp">Автор статьи: </span>
                <span className="intro-name">Константин Жуков</span>
                </div>
                <div className="name_author">
                <span className="author_sp">Фотограф:</span>
                <span className="intro-name"> Леонид Яровой</span>
                </div>
            </div>
            <div className="intro-text">Профессиональное сообщество 
            яхтсменов празднует открытие крупнейшей
             школы яхтинга в Калининграде.
            Кто в ней преподает, чему там можно научиться и
            на кого она рассчитана? Обо всем этом нам рассказал Михаил 
            Чернов, известный спортсмен и владелец компании BigRace.</div>
        </div>
        <div className="intro-img"></div>
    </div>
  )
}
