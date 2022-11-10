import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../../redux/actions/todos';

import Todo from './Todo/Todo';
import './Todos.scss';

const Todos = ({ setCurrentId }) => {
  const [filters, setFilters] = useState('all');
  const { todos, theme, todosCompleted } = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const filterArray = filters === 'all' ? todos : filters === 'active' ? todos : filters === 'completed' ? todosCompleted : null;

  return (
    <div className='todos-container'>
      <div className={theme ? 'content-block light-mode' : 'content-block'} >
        <div className='todos-list'>
          {filterArray?.map(todo => (
            <Todo key={todo._id} todo={todo} setCurrentId={setCurrentId} theme={theme} todosCompleted={todosCompleted}/>
          ))}
        </div>
        <div className='todos-actions'>
          <span>{`${todos?.length} items left`}</span>
          <div className='filters'>
            <button className={theme ? 'active' : ''} onClick={() => setFilters('all')}>All</button>
            <button className={theme ? 'active' : ''} onClick={() => setFilters('active')}>Active</button>
            <button className={theme ? 'active' : ''} onClick={() => setFilters('completed')}>Completed</button>
          </div>
          <button className={theme ? 'active' : ''} onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default Todos