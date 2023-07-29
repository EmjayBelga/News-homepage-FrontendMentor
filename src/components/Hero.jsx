import React from 'react'
import '../../styles/Hero.css'

function Hero() {
  return (
    <>
      <div className="hero">
        <picture className="hero__img">
          <source 
            className="hero__desktop-img"
            srcSet="../assets/image-web-3-desktop.jpg"
            media="(min-width: 640px)"
          />
          <img className="hero__mobile-img" src="../assets/image-web-3-mobile.jpg" alt="Header Image" />
        </picture>
      </div>  
        
      <div className="hero__title-wrapper">
        <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
          <div>
            <p className="hero__description">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?</p>
            <button className="hero__btn">Read more</button>
          </div>
      </div>
    </>
      
  )
}

function NewSection(props) {
  return (
    <article className="article">
      <a href="#" className="article__link">
        <h3 className="article__title">{props.title}</h3>
        <p className="article__description">{props.description}</p>
      </a>
      <hr />
    </article>
  )
}

export {Hero, NewSection}; 

