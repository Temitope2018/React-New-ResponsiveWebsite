import React from 'react'
import './brand.css'
import { atlassian,dropbox,google,shopify,slack } from './icon.jsx'
const brand = () => {
  return (
    <div className='brand-container section__padding'>
      <div className='google-image'>
        <img src={google} alt='atlassian'/>
        </div>

        <div className='dropbox-image'>
        <img src={dropbox} alt='dropbox'/>
        </div>

        <div className='atlassian-image'>
        <img src ={atlassian} alt='google'/>
      </div>

      <div className='shopify-image'>
      <img src={shopify} alt='shopify'/>
     </div>

     <div className='slack-image'>
      <img src={slack} alt='slack'/>
     </div>

    </div>
  )
}

export default brand
