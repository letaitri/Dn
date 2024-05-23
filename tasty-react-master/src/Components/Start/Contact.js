import React from 'react'

function Contact() {
  return (
    <div className='contact-page-wrapper'>
    <h1 className='primary-heading'>Bạn có câu hỏi trong đầu?</h1>
    <h1 className='primary-heading'>Hãy để chúng tôi giúp bạn</h1>
    <div className='contact-form-container'>
        <input type='text' placeholder='email@gmail.com'></input>
        <button className='secondary-button'>Submit</button>
    </div>
</div>
)
}

export default Contact