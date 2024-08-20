import React from 'react'
import './possibility.css'
import  image  from '../../assets/Artificial.jpg';

const Possibility = ()=>{

return(
    <div className='possibility-containers section__padding' id='possibility'>
           <div className='possibility-texts'>
            <h4>Request Early Access to Get Started</h4>
            <div className='gradient__text'>
              <h1 className='possibility-gradients'>The Possibilities are beyond your imagination</h1>
            </div>
            <p className='possibility-section2'>Yet bed any for travelling assistance indulgence unpleasure box of the order thoughts all exercise blessing indulgence way every thinking of alteration boosterous the attachment party we years to climb the a low asked of </p>
            <div className='gradient__text'>
            <h3 className='possibility-section3'>Request Early Access to Get Started</h3>
            </div>
           </div>
         <div className='possibility-image'>
           <img src={image} alt='image'/>
         </div>
         
    </div>
);

}
export default Possibility