import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState } from 'react';
import API_KEY from './config';

function App() {

  const [gifs, setGifs] = useState([])
  const [error, setError] = useState(null)

  const handleSubmit = async (query) => {
    event.preventDefault();
    const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`)
    if (data) setGifs(data)
    if (error) setError(error)
  }

  if (error) return <p>{error.message}</p>

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch handleSubmit={handleSubmit} />
        <br />
        <GifContainer gifs={gifs} setGifs={setGifs} setError={setError} />
      </div>
    </div>
  );
}

export default App;
