// import { useState } from 'react';
import { Link, Route } from "wouter"
import './App.scss';
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from "./context/GifsContext";


function App() {
  return (
    <StaticContext.Provider value= {{name:'Lupe', suscribeteAlCanal: true}}>
      <div className="App">
        <section className="App-content">
          <Link to='/' className="Logo">Giffy</Link>
          <GifsContextProvider>
          <Route
            path="/"
            component={Home} />
          <Route
            path="/search/:keyword"
            component={SearchResults} />
          <Route
            path="/gif/:id"
            component={Detail} />
            </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
