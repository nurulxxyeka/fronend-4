import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Landing from "./Pages/Landing";
import NotFound from "./Pages/notfound";

function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  )
}

export default App