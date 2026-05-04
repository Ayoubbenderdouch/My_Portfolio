import React from 'react'
import './Portfolio.css'

const portfolioItems = [
  {
    id: 1,
    title: 'Diline Academy',
    description: 'Online Turkish language learning platform for Algerian students. A1 to C2 levels with live sessions, quizzes, and PDF materials.',
    image: 'https://dilin.academy/images/logo.png',
    liveUrl: 'https://dilin.academy/',
  },
  {
    id: 2,
    title: 'Mido Froid',
    description: 'Algerian e-commerce platform for home appliances & spare parts. Delivery across all 58 wilayas with cash on delivery.',
    image: 'https://midoufroid.com/logo.png',
    liveUrl: 'https://midoufroid.com/',
  },
]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {portfolioItems.map(({ id, title, description, image, liveUrl }) => (
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='portfolio__item-cta'>
              <a href={liveUrl} className='btn btn-primary' target='_blank' rel='noreferrer'>
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
