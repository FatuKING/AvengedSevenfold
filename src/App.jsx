function App() {
  const btnDecline = () => {
    
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
          <a href="https://wa.me/1122836655?text=%C2%A1S%C3%AD%21%20Me%20encantar%C3%ADa%20ir%20al%20recital" target="_blank"><button>Sí</button></a>

          <button onClick={btnDecline}>No</button>
        </div>

      </main>
    </>
  )
}

export default App
