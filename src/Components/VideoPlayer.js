import React from 'react'
import "./VideoCarusel.scss"
import Carousel from "nuka-carousel"
import { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function VideoPlayer() {
const [videos,setVideos]=useState([
  {
      videoID:1,
      url:"https://media.istockphoto.com/id/1389791405/video/aerial-view-of-luxury-speed-boat-cruising-in-the-ocean.mp4?s=mp4-640x640-is&k=20&c=S4vikZ8H5mWQEVGidRXoK9nxE2GxCuCgYA5KHLt6yGo="
  },
  
  {
      videoID:2,
      url:"https://media.istockphoto.com/id/1402994803/video/yacht-sailing-in-maya-bay-andaman-sea-krabi-thailand.mp4?s=mp4-640x640-is&k=20&c=VzaDRka1xpNBDgmpwCLRFhtPrEuCcouBVqO-MgmFjR4="
  },
  {
      videoID:3,
      url:"https://media.istockphoto.com/id/1372478747/video/luxury-private-motor-yacht-under-way-sailing-at-sea.mp4?s=mp4-640x640-is&k=20&c=7HcqBMeNpaUraYKIQFSqhoJClTtUaBI-S2BEhy9XgeM="
  },
 
])
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleSlideClick = (index) => {
    
   
    setActiveIndex(index);
      };
    
      const playVideo = (index) => {
        if (videoRefs.current[index]) {
          videoRefs.current[index].play();
          videoRefs.current[index].requestFullscreen();

        }
      };
    
      
        
      
    
     
    
  

  

  return (
    <Swiper slidesPerView={3}>
      {videos.map((video, index) => (
        <SwiperSlide
          key={index}
          className={`slider-slide ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleSlideClick(index)}
          onDoubleClick={()=>{playVideo(index)}}
          alt="double click for play"
        >
          <video ref={(video) => (videoRefs.current[index] = video)}
            src={video.url}
            
            ></video>
            
        </SwiperSlide>
      ))}
    </Swiper>

    
  )
}
