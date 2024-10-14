import './App.css';
// importo Homepage
import { Homepage } from './UIElements/Homepage/Homepage';
import { useState, useEffect } from 'react';

function App() {
  const [language, setLanguage] = useState('spanish'); // Estado inicial

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.startsWith('es')) {
      setLanguage('spanish');
    } else {
      setLanguage('english');
    }
  }, []);

  return (
    <div className="App">

      <Homepage language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
