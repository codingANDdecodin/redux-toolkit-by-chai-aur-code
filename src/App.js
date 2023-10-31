import logo from './logo.svg';
import './App.css';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <AddTodos></AddTodos>
      <Todos></Todos>
    </div>
  );
}

export default App;
