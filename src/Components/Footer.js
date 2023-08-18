import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom';
export default function Footer() {
    const date = new Date();
    const year= date.getFullYear()
  return (
    <div className="footer">
        <div className="logodiv">
            <div className="foot_logo">
            </div>
            <div className="footer_tit">
            Политика конфиденциальности<br/>
            Яхтклуб ©{year} Все права защищены   
            </div>
        </div>
        <div className="footer_about">
            <h2>Компания</h2>
            <Link className='link'>О нас</Link>
            <Link className='link'>Команда</Link>
            <Link className='link' to="/about">Новости</Link>
            <Link className='link'>Блог</Link>
            <Link className='link'>Галерея</Link>
        </div>
        <div className="footer_about">
        <h2>Яхт-клуб</h2>
            <Link className='link'>Правила</Link>
            <Link className='link'>Стоимость</Link>
            <Link className='link'>Анкет</Link>
            <Link className='link'>FAQ</Link>
            <Link className='link'>Партнеры</Link>
        </div>
        <div className="footer_about">
        <h2>Услуги</h2>
           <Link className='link'>Аренда яхты</Link> 
            <Link className='link'>Свадьба на яхте</Link>
            <Link className='link'>День рождения</Link>
            <Link className='link'>Бизнес-встречи</Link>
            <Link className='link'>    Прогулки  </Link>  
        </div>
        <div className="footer_about">
        <h2>Регаты</h2>
       <Link className='link'> Корпоративные регаты</Link>
        <Link className='link'> Календарь мероприятий</Link>
         <Link className='link'>   Стать участником</Link>
        <Link className='link'>Результаты регат</Link>
        <Link className='link'>Обучение</Link>
        </div>
    </div>
  )
}
