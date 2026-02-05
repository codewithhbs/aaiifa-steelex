import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AiifaExhibitor from './pages/AiifaExhibitor/AiifaExhibitor'
import AiifaInviteeDelegate from './pages/AiifaInviteeDelegate/AiifaInviteeDelegate'
import AiifaAdvertisementForm from './pages/AiifaAdvertisementForm/AiifaAdvertisementForm'
import Exhibitors from './pages/Exhibitors/Exhibitors'
import Roadshow from './pages/Roadshow/Roadshow'
import Ahmedabad from './pages/Roadshow/Ahmedabad/Ahmedabad'
import Hyderabad from './pages/Roadshow/Hyderabad/Hyderabad'
import Jalna from './pages/Roadshow/Jalna/Jalna'
import Kolkata from './pages/Roadshow/Kolkata/Kolkata'
import Raipur from './pages/Roadshow/Raipur/Raipur'
import Layout from './pages/Layout/Layout'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aiifa-exhibitor" element={<AiifaExhibitor />} />
        <Route path="/aiifa-visitors" element={<AiifaExhibitor />} />
        <Route path="/aiifa-delegate" element={<AiifaExhibitor />} />
        <Route path="/aiifa-invitee-delegate" element={<AiifaInviteeDelegate />} />
        <Route path="/aiifa-advertisement-form" element={<AiifaAdvertisementForm />} />
        <Route path="/aiifa-exhibitors" element={<Exhibitors />} />
        <Route path="/aiifa-roadshow" element={<Roadshow />} />
        <Route path="/roadshow/ahmedabad" element={<Ahmedabad />} />
        <Route path="/roadshow/hyderabad" element={<Hyderabad />} />
        <Route path="/roadshow/jalna" element={<Jalna />} />
        <Route path="/roadshow/kolkata" element={<Kolkata />} />
        <Route path="/roadshow/raipur" element={<Raipur />} />
        <Route path="/aiifa-layout" element={<Layout />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
