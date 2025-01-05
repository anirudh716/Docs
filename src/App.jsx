import React, {useState} from 'react';
import Background from './Components/Background';
import Foreground from './Components/Foreground';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function App() {
  const[darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);
  return (
    <div className={`${darkMode ? "bg-zinc-800 text-white" : "bg-zinc-200 text-black"} relative w-full h-screen`} >
      <button onClick={toggleTheme} className="fixed top-5 right-5 p-2 bg-zinc-600 rounded-lg z-50">{darkMode ? <MdLightMode /> : <MdDarkMode />}</button>
      <Background darkMode={darkMode}/>
      <Foreground darkMode={darkMode}/>
    </div>
  );
}

export default App;

