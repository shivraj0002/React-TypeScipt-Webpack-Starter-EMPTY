import React from 'react'
import './styles.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>This is react template {process.env.API_URL}</h1>
    </div>
  )
}

export default App
