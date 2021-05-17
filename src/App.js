// import { useState } from 'react';
import { Link, Route } from "wouter"
import './App.scss';
import Detail from "./pages/Detail";
// import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from "./context/GifsContext";
import React, { Suspense } from "react";

const HomePage = React.lazy(()=> import('./pages/Home'));

function App() {
  return (
    <StaticContext.Provider value= {{name:'Lupe', suscribeteAlCanal: true}}>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
          <Link to='/' className="Logo">Giffy</Link>
          <GifsContextProvider>
          <Route
            path="/"
            component={HomePage} />
          <Route
            path="/search/:keyword"
            component={SearchResults} />
          <Route
            path="/gif/:id"
            component={Detail} />
            </GifsContextProvider>
        </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
