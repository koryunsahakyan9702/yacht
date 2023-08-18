import React, { forwardRef } from 'react'
import "./Login.scss"
import { useForm } from 'react-hook-form'

 function Login({auth,setAuth},ref) {
    const {register,handleSubmit,formState:{errors,isValid},reset,watch}=useForm({
        mode:"onBlur",
        
    })
    const checkboxValue = watch('checkboxField');

    function onsub(data){
        console.log(data)
        setAuth(isValid)
    }
  return (
    <div className="login" ref={ref}>
        <div className="inputDiv">
            <div className="login-tit">Станьте участником регаты<br/>
            Sochi Race Week 2021</div>
            <div className="login_border"></div>
            <div className="loginForm">
            Заполните форму ниже и мы свяжемся с вами в ближайшее время
            </div>
            <form className='form_login'
            onSubmit={handleSubmit(onsub)}>
                <p>Имя</p>
                <input type="text" {...register("firstname",{
                    required:"НЕ ЗАПОЛНЕННО ",
                    pattern:{
                        value:/[A-Z][a-z]+/,
                        message:"только букви"
                    }
                 })}/>
                 {errors?.firstname&&<span className='err'>{errors.firstname.message}</span>}
                <p>Телефон</p>
                <input type="tel" {...register("number",{
                    required:"НЕ ЗАПОЛНЕННО ",
                    pattern:/[0-9]+/,
                    minLength:{
                        value:8,
                        message:"не мене 8 цифров"

                    }
                })} />
                {errors?.number&&<span className='err'>{errors?.number?.message || "только цифры"}</span>}
                <p>E-mail</p>
                <input type="email" {...register("email",{
                    required:"НЕ ЗАПОЛНЕННО ",
                    
                })}  />
                {errors?.number&&<span className='err'>{errors?.number?.message || "jhonjhonson@gmail.com"}</span>}
                <div className="check">
                    <input type="checkbox" {...register("checkboxFilef",{
                        required:"'Checkbox is required'"
                    })} />
                    <span>Я даю согласие на обработку персональных данных</span>
                    </div>
                    
                    <button className='butt' disabled={isValid===false}>Отправить</button>
            </form>
        </div>
        <div className="photo"></div>
    </div>
  )
}
export default forwardRef(Login)
