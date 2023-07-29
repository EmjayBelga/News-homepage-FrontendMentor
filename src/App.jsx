import React from 'react'
import Navbar from './components/Navbar'
import {Hero, NewSection} from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import NewSectionData from './NewSectionData'
import CardData from './CardData'
import '../styles/App.css'

function App() {
  const news = NewSectionData.map(data => {
    return (
      <NewSection
        key={data.id} 
        title={data.title}
        description={data.description}
      />
    )
  })

  const cards = CardData.map(data => {
    return (
      <Card
        key={data.id}
        id={data.id} 
        img={data.img}
        title={data.title}
        description={data.description}
      />
    )
  })

  return (
    <div className="container">
      <Navbar />

      <main className="hero__wrapper">
          <Hero />
        <aside className="new">
          <h2 className="new__title">New</h2>
          {news}
        </aside>
      </main>

      <section className="card__container">
        {cards}
      </section>
      
      <Footer />
    </div>
  )
}

export default App


