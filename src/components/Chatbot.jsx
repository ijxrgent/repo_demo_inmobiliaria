import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot,
  faMinus,
  faXmark,
  faPaperPlane,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import './styles/Chatbot.css'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: '¡Hola! Soy Caribe Bot, tu asistente virtual. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    // Agregar mensaje del usuario
    setMessages([...messages, { text: inputValue, sender: 'user' }])
    setInputValue('')

    // Simular respuesta del bot después de un breve retraso
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Gracias por tu mensaje. Un agente te responderá pronto.',
          sender: 'bot',
        },
      ])
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className={`chatbot-wrapper ${isMinimized ? 'minimized' : ''}`}>
      <div className="chatbot">
        <div className="header-bot">
          <div className="bot-profile">
            <div className="bot-icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <div className="bot-info">
              <p className="bot-name">Caribe Bot</p>
              <p className="bot-status">En línea</p>
            </div>
          </div>
          <div className="window-options">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="window-btn"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="window-btn close-btn"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="chat">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <div className="message-icon">
                    <FontAwesomeIcon
                      icon={message.sender === 'bot' ? faRobot : faUser}
                    />
                  </div>
                  <div className="message-content">
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
              />
              <button onClick={handleSendMessage} className="send-btn">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Chatbot
