import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import IcecreamList from "./components/IcecreamList"
import { getIcecreamFetch } from "./api/icecream"
// import { API_URL } from "./constants"
import "bootstrap/dist/css/bootstrap.min.css"
// import axios from "axios"
import "./App.css"

function App() {
  const [icecreams, setIcecreams] = useState([])

  useEffect(() => {
    async function fetch() {
      const data = await getIcecreamFetch()
      setIcecreams(data)
    }
    fetch()
  }, [])

  return (
    <Container>
      <IcecreamList list={icecreams} />
    </Container>
  )
}

export default App
