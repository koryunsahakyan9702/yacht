import React, { useEffect } from 'react'
import "./Homepage.scss"
import Carousel from "nuka-carousel"
import nextbutt from "../images/right button.png"
import prevtbutt from "../images/left button.png"
import {AiOutlineArrowDown} from "react-icons/ai"
import {GrCaretNext} from "react-icons/gr"
import {GrCaretPrevious} from "react-icons/gr"
import VideoCarusel from './VideoCarusel'
import Event from './Event'
import Services from './Services'
import Table from './Table'
import Hotels from './Hotels'
import News from './News'
import Login from './Login'
import Map from './Map'
import { useRef } from "react"
export default function Homepage({Contref,regRef,auth,setAuth,logRef}){
  const Evref=useRef()
  function handleScroll(elref){
    elref.current?.scrollIntoView({behaivor:"smooth"})
  }
  useEffect(()=>{
    const urlParams=new URLSearchParams(window.location.search)
    const scrollToreg =urlParams.get("scrollToElement")
    if(scrollToreg==="regElement" && regRef.current){
      regRef.current?.scrollIntoView({behaivor:"smooth"})

    }
    else if(scrollToreg==="Contact" && Contref.current){
      Contref.current?.scrollIntoView({behaivor:"smooth"})

    }
    else if(scrollToreg==="logElement" && logRef.current){
      logRef.current?.scrollIntoView({behaivor:"smooth"})

    }
  },[])
  return(
    <>
    <div className="tit">
        <p className="titop"> ПОД ПАРУСОМ</p>
        <p className="titbot"> ВМЕСТЕ</p>
       <div onClick={()=>handleScroll(Evref)}><p className="arrow" > смотреть далее<AiOutlineArrowDown color='white' className='arr' size={14}/ >
    </p>
       </div>
      </div>
    <div className="homepage">
      
        <div className="cardiv">
          <Carousel 
          autoplay={true}
          wrapAround={true}
          defaultControlsConfig={{
            nextButtonText:<GrCaretNext color='white' size={20}/>,
            prevButtonText:<GrCaretPrevious color='white' size={20}/>

          }}
          >
            <div className="carImg">
              
            </div>
            <div className="carImg2"></div>
          </Carousel>
        </div>
        <div className="textdiv">
          <div className="text"> членство</div>
          <p className="text">прогулки</p>
        </div>
    </div>
    <Event ref={Evref}/>
    <Services/>
    <VideoCarusel/>
    <Hotels ref={regRef}/>
    <News/>
    <Table/>
    <Login auth={auth} setAuth={setAuth} ref={logRef}/>
    <Map ref={Contref}/>
    </>
  )
}
