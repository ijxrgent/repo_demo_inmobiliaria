import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import All from './components/All'
import WhatsApp from './components/WhatsApp'
import Requisitos from './components/Requisitos'
import Contact from './components/Contact'
import Consigne from './components/Consigne'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <All />
              <Chatbot />
              <WhatsApp />
            </>
          }
        />
        <Route path="/requisitos" element={<Requisitos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consigne" element={<Consigne />} />
      </Routes>
    </Router>
  )
}

export default App
