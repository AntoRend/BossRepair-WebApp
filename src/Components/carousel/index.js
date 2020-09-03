import React from 'react'
import OwlCarousel from 'react-owl-carousel2'

import 'react-owl-carousel2/src/owl.carousel.css' // Allows for server-side rendering.
import 'react-owl-carousel2/src/owl.theme.default.css'

import UpdateCards from '../UpdateCardDashboard'

const Carousel = (props) => {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
  }

  //   const events = {
  //     onDragged: function(event) {...},
  //     onChanged: function(event) {...}
  // }

  return (
    <div>
      <OwlCarousel options={options}>
        <UpdateCards
          data={props.userData} 
        />
      </OwlCarousel>
    </div>
  )
}

export default Carousel
