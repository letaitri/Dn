import React from "react";
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import '../style/About.css'

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
        Thực Phẩm Là Một Phần Quan Trọng Của Chế Độ Ăn Uống Cân Bằng
        </h1>
        <p className="primary-text">
        Tại FOODIE, Chúng Tôi Tin Rằng Thực Phẩm Đóng Một Vai Trò Quan Trọng Trong Lối Sống Lành Mạnh.
        </p>
        <p className="primary-text">
        Đây Là Lý Do Tại Sao Chúng Tôi Luôn Cam Kết Mang Đến Bữa Ăn Ngon
        Được Chế Biến Từ Những Nguyên Liệu Chất Lượng, Đảm Bảo Trải Nghiệm Ăn Uống Của Bạn Không Chỉ Thú Vị Mà Còn Bổ Dưỡng.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Xem Thêm</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;