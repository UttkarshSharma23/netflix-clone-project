import React from 'react'
import Main from '../Main'
import Row from '../Row'
import requests from '../../Request'
const Home = () => {
  return (
    <>
      <Main/>
      <Row rowID='1' title = 'Popular' fetchURL={requests.requestPopular} />
      <Row rowID='2' title = 'Top Rated' fetchURL={requests. requestTopRated} />
      <Row rowID='3' title = 'Latest' fetchURL={requests.requestLatest} />
      <Row rowID='4' title = 'Trending' fetchURL={requests.requestTrending} />
      <Row rowID='5' title = 'Up Coming' fetchURL={requests.requestUpcoming} />
    </>
    
  )
}

export default Home
