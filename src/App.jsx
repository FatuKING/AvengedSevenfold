import { useState } from "react"
import { ModalMeme } from "./modal/ModalMeme.jsx"
import confetti from "canvas-confetti"

function App() {
  const [activeModal, setActiveModal] = useState(false)
   const [activeModal2, setActiveModal2] = useState(false)
  const showModal = () => {
    setActiveModal(!activeModal)
    if (!activeModal) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

    const showModal2 = () => {
    setActiveModal2(!activeModal2)
  }
  
  return (
    <>
      <main>
        <h1>Invitación al recital</h1>

        <figure>
          <img src="/logo.png" alt="" />
        </figure>

        <p>25 de septiembre <br />Movistar Arena</p>

        <h2>¿Asistirás?</h2>

        <div className="buttonsSelector">
          <button onClick={showModal}>Sí</button>

          <button onClick={showModal2}>No</button>
        </div>

        {activeModal && <ModalMeme meme={'/meme2.jpg'} />}
        {activeModal2 && <ModalMeme meme={'/meme.jpg'} />}
      </main>
    </>
  )
}

export default App
