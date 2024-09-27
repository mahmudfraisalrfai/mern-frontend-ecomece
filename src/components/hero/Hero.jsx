import React from 'react'
import './hero.css'
import hand from '../../assets/image/hand-hi.png'
import latest from '../../assets/image/latest.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero_left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>NEW</p>
                    <img src={hand} alt="hand icon" />
                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>latest collection</div>
                <FontAwesomeIcon icon={faArrowRight} size="2x"  />
            </div>
        </div>
        <div className="hero-right">
                <img src={latest} alt="latest" />
        </div>
    </div>
  )
}
