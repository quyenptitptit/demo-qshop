import React from 'react'
import HelloHome from '../../components/HelloHome/HelloHome'
import Section from '../../components/Section/Section'
import Feedback from '../../components/Feedback/Feedback'

function Home() {
  return (
    <div className='home'>
      <HelloHome />
      <Section />
      <Feedback />
    </div>
    
  )
}

export default Home