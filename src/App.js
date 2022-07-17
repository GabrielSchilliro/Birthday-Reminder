import { useState } from 'react';
import './App.css';
import data from './components/data/data';
import List from './components/List/List';

function App() {
  const [personas, setPersonas] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{personas.length} cumpleañeros hoy</h3>
        <List personas={personas} />
        <button onClick={() => setPersonas([])}>Limpiar Todo</button>
      </section>
    </main>
  );
}

export default App;
