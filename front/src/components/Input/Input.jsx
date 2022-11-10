import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../../redux/actions/todos';

import Switch from './Switch/Switch'
import './Input.scss'

const Input = ({ currentId, setCurrentId, theme }) => {
  const [todoData, setTodoData] = useState({
    text: '',
  });
  const dispatch = useDispatch();
  const todo = useSelector((state) => currentId ? state.todos.todos.find((t) => t._id === currentId) : null); 

  useEffect(() => {
    if(todo) setTodoData(todo);
  }, [todo])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentId) {
      dispatch(updateTodo(currentId, todoData));
    } else {
      dispatch(createTodo(todoData))
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setTodoData({ text: '' });
  }

  return (
    <div className='header-container'>
      <div className='content-block'>
        <div className='header'>
          <h1>Todo</h1>
          <Switch/>
        </div>
        <form onSubmit={handleSubmit}>
          <input className={theme ? 'light-mode' : ''} type="text" value={todoData.text} onChange={(e) => setTodoData({...todoData, text: e.target.value})}/>
        </form>
      </div>
    </div>
  )
}

export default Input