import React from 'react'
import './infor.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'

const infor = () => {
  return (
    <div className='infor'>
    <h1>.........MÓN ĂN ĐANG HOT.........</h1>
    <hr/>

      <div className='infor_item'>
          
      {data_product.map((item,i)=>{
            return <Item key={i} 
            id={item.id} 
            name={item.name}
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default infor
