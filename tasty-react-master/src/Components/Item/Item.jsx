import React from 'react'
import './Item.css';
import { NavLink } from 'react-router-dom';


const Item = (props) => {
  return (
    <div className='item'>
  <NavLink to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt=''/>
<img src={props.image} alt=""/> </NavLink>
  <p>{props.name}</p>
      <div className="item-prices">
      <div className="item-prices-new">
          ${props.new_price}
        </div>    
        <div className="item-price-old">
          ${props.old_price}
            <div> <button className='button-add-product' 
            
             >ĐẶT NGAY</button></div>
        </div>
      </div>
    </div>
  )
}

export default Item 