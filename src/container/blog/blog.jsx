import React from 'react'
import './blog.css'
import {copy1,copy2,copy3,copy4,copy5} from './user.jsx'
const blog = () => {
  return (
    <div className='blog-container'>
      <div className='gradient__text'>
       <h1 className='blog-text'>A lot is happening we are blogging about it</h1>
      </div>

      <div className='blog-section'>
         <div className='blog-section1'>
           <img src={copy1} alt='copy1'/>
           <p className='blog-date'>Aug 20,2024</p>
           <h4>GPT-3 and open AI is the future.Let us explore how it is?</h4>
           <p className='blog-read'>Read Full Article</p>
         </div>
         <div className='blog-section2'>

         <div className='blog-sectionA'>
           <img src={copy2} alt='copy2'/>
           <p className='date-blog'>Aug 20,2024</p>
           <h4>GPT-3 and open AI is the future.Let us explore how it is?</h4>
           <p className='read-blog'>Read Full Article</p>
            </div>

            <div className='blog-sectionA'>
           <img src={copy3} alt='copy3'/>
           <p className='date-blog'>Aug 20,2024</p>
           <h4>GPT-3 and open AI is the future.Let us explore how it is?</h4>
           <p className='read-blog'>Read Full Article</p>
            </div>

            <div className='blog-sectionA'>
           <img src={copy4} alt='copy4'/>
           <p className='date-blog'>Aug 20,2024</p>
           <h4>GPT-3 and open AI is the future.Let us explore how it is?</h4>
           <p className='read-blog'>Read Full Article</p>
            </div>

            <div className='blog-sectionA'>
           <img src={copy5} alt='copy5'/>
           <p className='date-blog'>Aug 20,2024</p>
           <h4>GPT-3 and open AI is the future.Let us explore how it is?</h4>
           <p className='read-blog'>Read Full Article</p>
            </div>

       </div>
      </div>




    </div>
  )
}

export default blog
