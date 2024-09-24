import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
