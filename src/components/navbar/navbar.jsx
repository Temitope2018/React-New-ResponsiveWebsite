import React, {useState} from 'react'
import './navbar.css'
import images from '../../assets/lines.png'




const navbar = () => {
const [toggleName, setToggleName] = useState(false)

  return (
    <div className="project">
     <div className='section1'>
      <div className='sectionA'>
      <h1>GPT-3</h1>
     </div>
     <div className='sectionB'>
     <p><a href="#home">Home</a></p>
  <p><a href="#whatGp3">What is GPT?</a></p>
  <p><a href="#features">Open AI</a></p>
  <p><a href="#possibility">Case Studies</a></p>
  <p><a href="#library">Library</a></p>
     
     </div>
     <div className='sectionC'>
      <p>Sign In</p>
      <button>Sign Up</button>
     </div>
    
{toggleName?
<div className='section2'>
<p onClick={()=>setToggleName(false)}>❌</p>
</div>:
<div className='section2'>
<img src={images} alt='images' onClick={()=>setToggleName(true)}/>
 </div>
}


 
    
    
     </div>
     {toggleName &&(
    <div className='section3 scale-up-center'>
      <div className='sectionD'>
      <p><a href="#home">Home</a></p>
  <p><a href="#whatGp3">What is GPT?</a></p>
  <p><a href="#features">Open AI</a></p>
  <p><a href="#possibility">Case Studies</a></p>
  <p><a href="#library">Library</a></p>
      </div>
    </div>
  )}
 
   
    </div>
  )
}

export default navbar
