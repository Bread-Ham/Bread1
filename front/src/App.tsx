import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [url, setUrl] = useState('')


  const handleClick = async () => {
    //appel a ham puis je reçois une url
      const response = await axios.get('http://localhost:4000/login');
      const data = response.data.json();
      setUrl(data.url);
  }

  return (
    <>
      <button onClick={handleClick}>Me connecter avec HAM</button>
      {url && <p>Received URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>}
    </>
  )
}

export default App
