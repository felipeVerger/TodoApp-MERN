import React from 'react';
import { useState } from 'react';
import {BsCheckLg} from 'react-icons/bs'
import {RiCloseFill} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import { useDispatch } from 'react-redux'

import moment from 'moment';
import './Todo.scss';
import { deleteTodo, toggleCompleted } from '../../../redux/actions/todos';

const Todo = ({ todo, setCurrentId, theme, todosCompleted}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const isCompleted = todosCompleted.find(completed => completed._id === todo._id)?._id === todo?._id;

  return (
    <div className='todo-container'>
        <div className='todo'>
            <div className='todo-content'>
                <div className='left-todo'>
                    <button 
                        className={isCompleted ? 'completed' : ''}
                        onClick={() => dispatch(toggleCompleted(todo))}
                    >{isCompleted ? <BsCheckLg color='white'/> : null}</button>
                    <p className={theme ? 'light-mode' : ''}>{todo.text}</p>
                    <span>{`created: ${moment(todo.createdAt).fromNow()}`}</span>
                </div>
                <div className='todo-actions'>
                  <AiFillEdit color='gray' fontSize='1.3em' cursor='pointer' onClick={() => setCurrentId(todo._id)}/>
                  <RiCloseFill color='gray' fontSize='1.5em' cursor='pointer' onClick={() => handleDelete(todo._id)}/>
                </div>
            </div>
            <hr color='gray' />
        </div>
    </div>
  )
}

export default Todo