import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Titlebar />
      <Navbar />
      <TodoList/>
    </div>
  );
}

export default App;
