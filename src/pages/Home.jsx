import React from 'react'
import Main from '../component/Main.jsx';
import Row from '../component/Row.jsx';
import requests from '../Requests.js';

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Popular" rowID='1' fetchURL={requests.requestPopular}/>
      <Row title="Now Playing" rowID='2' fetchURL={requests.requestNowPlaying}/>
      <Row title="Top Rated" rowDrowID='3' fetchURL={requests.requestTopRated}/>
      {/* <Row title="Latest" fetchURL={requests.requestLatest}/> */}
      <Row title="Up Coming" rowID='4' fetchURL={requests.requestUpComing}/>
      <div className='mt-10'></div>
      

      
    </>
  )
}

export default Home;
