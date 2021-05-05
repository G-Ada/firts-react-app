// import { useState } from 'react';
import { Link, Route } from "wouter"
import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {
  // const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
      <section className="App-content">
        <h1>APP</h1>
        <Link to='/gif/rick'>Gifs de Rick</Link>
        <Link to='/gif/morty'>Gifs de Morty</Link>
        <Link to='/gif/panda'>Gifs de Pandas</Link>
        <Route
          path="/gif/:keyword"
          component={ListOfGifs} />
        {/* <button onClick={()=> setKeyword('mapache')}>Cambiar keyword</button> */}
      </section>
    </div>
  );
}

export default App;
