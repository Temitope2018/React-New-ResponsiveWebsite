import React from 'react'
import people from '../../assets/people.png'
import icon from '../../assets/icon.png'
import './header.css'
const header = () => {
  return (
    <div className='projectA section__padding' id='home'>
      <div className='projectB'>
        <div className='headerA'>
       <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate eum vero repudiandae perspiciatis! Distinctio eaque minus, illum sint facilis illo dicta molestiae dolor, in reprehenderit veniam numquam vero quis?</p>

       <div className='projectC'>
        <input type='email' placeholder='Your Email Address'/>
        <button type='button'>Get Started</button>
       </div>
       <div className='header'>
        <img src={people} alt='images'/>
        <p>1,600 people requested access a visit in last 24hrs</p>
       </div>
       </div>
       <div className='AI-images'>
         <img src={icon} alt='Ai'/>
       </div>
      </div>
    </div>
  );
}

export default header
