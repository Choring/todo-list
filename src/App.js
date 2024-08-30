import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoInput } from './component/TodoInput';
import { TodoList } from './component/TodoList';

function App() {
  return (
    <div className='main-container'>
      <Container className='pt-5'>
        <h1 className='text-center fw-bold text-white'>Choing's TO-DO LIST</h1>
        <TodoInput />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
