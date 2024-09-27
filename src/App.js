import './App.css';
// importo Homepage
import { Homepage } from './UIElements/Homepage/Homepage';
import { useState } from 'react';
var languages = 'spanish';

function App() {
  const [language, setLanguage] = useState(languages); // Crear el estado para 'language'

  return (
    <div className="App">

      <Homepage language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
