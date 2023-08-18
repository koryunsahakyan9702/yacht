import React from 'react'
import "./Table.scss"

export default function Table() {
  const calendar =[
    {
      name:"Кубок Сибири",
      date:"10-15 января",
      class:"Буер Ледовый оптимист",
      cat:"БУЕР",
      geo:"г. Новосибирск",
    },
    {
      name:"Черноморская регата",
      date:"12-18 января",
      class:"29-й, 420, 49-й FX, RS:X",
      cat:"Гонки флота",
      geo:"Кайтбординг",
    }
  ]
  return (
    <div className="table">
        <div className="table_tit">
        Календарь соревнований, январь 2021
        </div>
        <div className="table_border"></div>
        <div className="table_about">
          <div className="about_tit">Название соревнования</div>
          <div className="about_tit">Даты проведения</div>
          <div className="about_tit">Участвующие классы</div>
          <div className="about_tit">Категория</div>
          <div className="about_tit">Место проведения</div>
        </div>
        <div className="about_calendar">
          {calendar.map((item,index)=>{
            return(
              <div className="calendar_title" key={index}>
                {
                  Object.values(item).map((tit,index)=>{
                    return (
                      <div key={index}>
                        {tit}
                      </div>
                    )
                  })
                }
              </div>

            )
          })}
        </div>
    </div>
  )
}
