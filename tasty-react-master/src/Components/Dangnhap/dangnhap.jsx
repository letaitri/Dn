import React from 'react'
import './dangnhap.css'


const login = () => {
  return (
    <div>
    <div className='loginsignup'>
   <div className='loginsignup-container'>
   <h1>Sign up</h1>
   <div className='loginsignup-fields'>
       <input type='text' placeholder='Your Name....'/>
       <input type='email' placeholder='Email Address....'/>
       <input type='password' placeholder='Password....'/>
   </div>
   <button>Continue</button>
   <p className='loginsignup-login'>
   Bạn đã quên tài khoản?
     <span>Click now</span>
     <div className='loginsignup-agree'>
     <input type='checkbox' name='' id=''/>
     <p>
       Lưu mật khẩu.....
     </p>
     </div>
   </p>
   </div>
  
 </div>
 </div>
)
}

export default login
