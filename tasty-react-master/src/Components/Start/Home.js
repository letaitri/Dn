import React from 'react'
import About from './About';
import Work from './Work';

import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Testimonial from './Testimonial';
import Contact from './Contact';
import '../style/Home.css'

import video from '../Assets/eat_food.mp4'

function Home() {
  return (
    <section className='Home'>
            <div className='overlay'></div>
            <video src={video} muted autoPlay loop type="video/mp4"> </video>
    
    <div className='home-container'>
       
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
            <div className='home-text-section'>
            <h1 className='primary-heading'>
                Thưởng Thức Những Bữa Ăn Ngon, Đến Thẳng Đĩa Của Bạn, Luôn Tươi Và Nóng!!
                </h1>
                <p className='primary-text'>
                Thưởng Thức Những Bữa Ăn Ngon Tuyệt Của Chúng Tôi, Được Chế Biến Riêng Cho Bạn Và Mang Đến Tận Nhà, Để Bạn Có Thể Thưởng Thức Từng Miếng Mà Không Phải Chờ Đợi!
                </p>
                <button className='secondary-button'>
                    Đặt Hàn Ngay! <FiArrowRight/>{""}
                </button>
            </div>
            <div className='home-image-section'>
                <img src={BannerImage} alt=''/>
               
            </div>
          
        </div>
          
<About/>
<Work/>
<Contact/>
<Testimonial/>
    </div></section>
  )
}

export default Home