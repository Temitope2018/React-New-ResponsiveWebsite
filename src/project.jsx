import React from 'react'
import { Article, Brand, Cta,  Navbar } from './components/index.jsx';
import { Blog, Features, Footer, Header, Possibility, WhatGp3 } from './container/index.jsx';
import './project.css'

function Project(){

return(
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGp3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
        </div>
);


}
export default Project