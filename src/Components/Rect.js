import React from 'react'
import "./Rect.scss"
import {FaQuoteLeft} from "react-icons/fa6"
export default function Rect() {
  return (
    <div className="rect">
        <div className="rect_general">
            <div className="rect_tit">Ставить себе цели, двигаться к 
            ним шаг за шагом, стремиться
            к знаниям. Самое важное – постоянно набираться опыта
            и знаний. И обязательно верить в себя!</div>
            <div className="rect_name">совет всем любителям яхтинга от <span>Коллина Трейси</span></div>
        </div>
        <div className="qote"><FaQuoteLeft size={100} color='#00C6BD'/></div>
    </div>
  )
}
