import React from 'react'
import Hero from '../../components/Hero/Hero'
import AboutConference from '../../components/AboutConference/AboutConference'
import ExhibitorItem from '../../components/ExhibitorItem/ExhibitorItem'
import Legacy from '../../components/Legacy/Legacy'
import Industry from '../../components/Industry/Industry'
import AboutUsHome from '../../components/AboutUsHome/AboutUsHome'
import Clients from '../../components/Clients/Clients'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutConference />
      <ExhibitorItem />
      <Legacy />
      <Industry />
      <Clients />
      <AboutUsHome />
    </>
  )
}

export default Home
