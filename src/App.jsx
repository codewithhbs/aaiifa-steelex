import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AiifaExhibitor from './pages/AiifaExhibitor/AiifaExhibitor'
import AiifaInviteeDelegate from './pages/AiifaInviteeDelegate/AiifaInviteeDelegate'
import AiifaAdvertisementForm from './pages/AiifaAdvertisementForm/AiifaAdvertisementForm'

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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
