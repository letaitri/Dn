import React, { useContext } from 'react'
import './CartItem.css'
import { Context } from '../../Context/Context'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItems,RemoveFromCart} = useContext(Context);
  return (
    <div className='cartitem'>
      <div className='cartitems-formatmain'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
<hr/>
   {all_product.map((e)=>{
    if(cartItems[e.id]>0)
    {
        return <div>
         <div className='cartitems-format cartitems-format-main'>
        <img src='' alt='' className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>${e.new_price*cartItems[e.id]}</p>
        <img className='cartitems-remove-icon' src={remove_icon}  onClick={()=>{RemoveFromCart(e.id)}}       alt=''/>
    </div><hr/></div>
    }
    return null;
   })}
<div className='cartitems-down'>
    <div className='cartitems-total'>
        <h1>cart Totals</h1>
        <div>
            <div className='cartitem-total-item'>
                <p>Sub</p>
                <p>${getTotalCartAmount}</p>    
            </div>
            <div className='cartitems-total-item'>
                <p>Shipinh Free</p>
                <p>Fee</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount}</h3>
            </div>
        </div>
            <button>PROOOOOo</button>

    </div>
    <div className='cartitem-promocode'>
        <p>ifcartitems-quantity</p>
        <div className='cartitems-promobox'>
            <input type='text' placeholder='promo code'/>
            <button>Submit</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default CartItem
