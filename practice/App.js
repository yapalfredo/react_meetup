import Todo from './components/Todo';

import './index.css'


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React Course'/>
      
    </div>
  );
}

export default App;