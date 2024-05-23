import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      title: "ĐẢM BẢO CHẤT LƯỢNG",
      text: "Chúng tôi duy trì các tiêu chuẩn chất lượng cao nhất trong mọi món ăn chúng tôi phục vụ, tìm nguồn cung ứng nguyên liệu một cách tỉ mỉ và duy trì các quy trình vệ sinh nghiêm ngặt để đảm bảo trải nghiệm ăn uống an toàn và thú vị.",
    },
    {
      image: ChooseMeals,
      title: "ĐƠN HÀNG CÓ THỂ TÙY CHỈNH",
      text: " Điều chỉnh bữa ăn theo sở thích của bạn với các tùy chọn tùy chỉnh của chúng tôi, cho phép bạn tạo ra trải nghiệm ăn uống phù hợp với sở thích của mình một cách hoàn hảo.",
    },
    {
      image: DeliveryMeals,
      title: "GIAO ĐỒ ĂN TỐT VÀ NHANH",
      text: "Chúng tôi ưu tiên giao hàng nhanh chóng, Từ nhà bếp đến bàn ăn của bạn trong thời gian kỷ lục, cam kết của chúng tôi về dịch vụ nhanh chóng có nghĩa là bạn sẽ không bao giờ phải đợi lâu để bữa ăn ngon của mình được giao đến.",
    },
  ];
return (
<div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'></p>
        <h1 className='primary-heading'>NÓ HOẠT ĐỘNG NHƯ THẾ NÀO?</h1>
        <p className='primary-text'>
        chúng tôi hiểu tầm quan trọng của dịch vụ tốt. Đội ngũ nhân viên thân thiện của chúng tôi có mặt ở đây để đảm bảo bạn có trải nghiệm ăn uống thú vị từ đầu đến cuối.
        </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data)=>(
                <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work