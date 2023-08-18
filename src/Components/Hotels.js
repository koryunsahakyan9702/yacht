import React, { forwardRef } from 'react'
import "./Hotels.scss"
import kat from "../images/kat.png"
import cap from "../images/cap.png"
import sof from "../images/double_bed.png"
import hand from "../images/hands.png"
 function Hotels({},ref) {
  return (
    <div className="hotel" ref={ref}>
        <div className="company">
            <div className="comp_title">Кают-компания</div>
            <div className="comb_border"></div>
            <div className="comp_about">
            Наш клуб является партнером одного из лучших 5-звездочных отелей города,Hyatt Regency. 
            Мы обеспечиваем лучшее обслуживание и сервис,  чтобы сделать ваш отдых идеальным. 
            </div>
            <div className="comp_img"></div>
        </div>
        <div className="product">
            <div className="product_tem">
                <div className="product_img">
                    <img src={kat}  />
                </div>
                <h2>Изысканная кухня</h2>
                <p>Блюда средиземноморской кухни от лучших поваров</p>
            </div>
            <div className="product_tem">
            <div className="product_img">
                    <img src={cap}  />
                </div>
                <h2>Фирменные напитки</h2>
                <p>Огромный выбор вкуснейших освежающих коктейлей </p>
            </div>
            <div className="product_tem">
            <div className="product_img">
                    <img src={sof}  />
                </div>
                <h2>Полный комфорт</h2>
                <p>Большие ортопедические двуспальные кровати</p>
            </div>
            <div className="product_tem">
            <div className="product_img">
                    <img src={hand}  />
                </div>
                <h2>Помощь во всем</h2>
                <p>Выполним любую просьбу
                и сделаем все, что захотите
                </p>
            </div>
        </div>
    </div>
  )
}
export default forwardRef(Hotels)