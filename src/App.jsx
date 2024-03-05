import { useEffect, useState } from 'react';
import Background from './components/Background/Background';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'
import Home from './components/home/home'
import Explore from './components/explore/explore';
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom/cjs/react-router-dom.min.js';


<BrowserRouter>
  <Routes>
    {/* <Route index element={<Home/>}></Route> */}
    <Route index="/" element={<Home />}></Route>
    <Route index="/explore" element={<Explore />}></Route>
  </Routes>
</BrowserRouter>



const App = () => {

  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: " your passion" },
    { text1: "join", text2: " your favoilate" },
    { text1: "patener", text2: " your Dreams" },
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 4 ? 0 : count + 1
      })
    }, 3000);
  }, [])

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <div>
        <Home/>
        <Explore/>
      </div>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );

}
export default App;
