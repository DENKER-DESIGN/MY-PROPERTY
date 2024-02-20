import React from 'react';
import './hero.css'
import allow from'../../assets/images.png'
import pause from'../../assets/pause-icon.jpg'
import play from'../../assets/play-button.jpg'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>

            <div className="hero-explore">
                <p>Engine features</p>
                <img src={allow} alt="No in" />
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(3)} className={heroCount===3?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(4)} className={heroCount===4?"hero-dot orange":"hero-dot"}></li>
                </ul>
                <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={ playStatus?pause:play } alt="" />
                <p>play the display</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
