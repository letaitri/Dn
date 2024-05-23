import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

function Testimonial() {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
        <h1 className='primary-heading'>BÌNH LUẬN</h1>
            <p className="primary-text">
            Khám phá những gì khách hàng hài lòng của chúng tôi đang nói về trải nghiệm ăn uống của họ với chúng tôi. Từ những đánh giá tích cực đến những lời chứng thực tích cực, hãy tìm hiểu lý do tại sao họ tiếp tục quay lại để xem thêm.
        </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonial