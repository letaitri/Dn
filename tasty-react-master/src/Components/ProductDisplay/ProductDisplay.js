import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'

import star_dull_icon from '../Assets/star_dull_icon.png'
import { Context } from '../../Context/Context'


const ProductDisplay = (props) => {
    const{product} = props;
    const {addToCart} = useContext(Context);
return (
    <div className='ProductDisplay'>
      <div className='ProductDisplay-left'>
        <div className='ProductDisplay-img-list'>
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
        </div>
        <div className='ProductDisplay-img'>
            <img className='ProductDisplay-main-img' 
            src={product.image} alt='' />
        </div>
      </div>
      <div className='ProductDisplay-right'>
        <h1>{product.name}</h1>
        <div className='ProductDisplay-right-star'>
            <img src={star_icon}  alt='' />
            <img src={star_icon}   alt='' />
            <img src={star_icon}    alt='' />
            <img src={star_icon}     alt='' />
            <img src={star_dull_icon} alt='' />
            <p>(122)</p>
        </div>
        <div className='ProductDisplay-right-prices'>
            <div className='ProductDisplay-right-price-old'>${product.old_price}</div>
            <div className='ProductDisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='ProductDisplay-right-description'>
            ABCDEFJ
        </div>
        <div className='ProductDisplay-right-size'>
            <h1>select size</h1>
            <div className='ProductDisplay-right-size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>
            ADD TO CART
        </button>
        <p className='ProductDisplay-right-category'><span>category: </span> women , T-Shit, Crop Top</p>
        <p className='ProductDisplay-right-category'><span>category: </span> women , T-Shit, Crop Top</p>
    </div>
    </div>

  )
}

export default ProductDisplay
