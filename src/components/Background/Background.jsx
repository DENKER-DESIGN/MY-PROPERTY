import React from 'react';

import '../Background/Background.css';

import videocomponent from '../../assets/4k Live Wallpaper Neon Car.mp4';
import videocomponent2 from '../../assets/moves.mp4';
import ddimage from '../../assets/dd.jpg'
import eeimage from '../../assets/ee.jpg'
import ffimage from '../../assets/ff.jpg'
import wwimage from  '../../assets/ww.jpg'
import qqimage from  '../../assets/qq.jpg'
const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            // <div>~~~~
            // <h1>hello bro how are you in this morning</h1>
            // <img src={ddimage} alt="no internet connection" />
            // </div>
            <video className='background denker-In' autoPlay loop muted>
                {/* <source src={videocomponent} type='video/mp4' /> */}
                <source src={videocomponent2} type='video/mp4' />
            </video>
        )
    }
    else if (heroCount === 0) {
        return <img src={ddimage} className='background denker-In' />
    }
    else if (heroCount === 1) {
        return <img src={eeimage} className='background denker-In' />
    }
    else if (heroCount === 2) {
        return <img src={ffimage} className='background denker-In' />
    }
    else if (heroCount === 3) {
        return <img src={wwimage} className='background denker-In' />
    }
    else if (heroCount === 4) {
        return <img src={qqimage} className='background denker-In' />
    }
    

}
export default Background;