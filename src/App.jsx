
import './App.css'

function App() {

  let cardInfo = {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    firstName: "Barbare",
    lastName: "Gogua"
  }
  

  return (
    <>
      <div className="card">
        <img src={cardInfo.image} alt="" />
        <h4>{cardInfo.firstName}</h4>
        <h5>{cardInfo.lastName}</h5>
      </div>
    </>
  )
}

export default App
