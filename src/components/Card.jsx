import React from 'react'
import '../../styles/Card.css'

function Card(props) {
  return (
    <article className="card">
      <a href="#" className="card__link">
        <img  className="card__img" src={`../assets/${props.img}`} alt="Card Image" />
        <div className="card__content">
          <h2 className="card__id">{props.id}</h2>
          <h4 className="card__title">{props.title}</h4>
          <p className="card__description">{props.description}</p>
        </div>
      </a>
    </article>
  )
}

export default Card