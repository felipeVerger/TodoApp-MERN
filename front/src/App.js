import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './redux/actions/todos';

import Input from './components/Input/Input';
import Todos from './components/Todos/Todos'
import bg_img_dark from './assets/images/bg-desktop-dark.jpg';
import bg_img_light from './assets/images/bg-desktop-light.jpg';

import './App.scss';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, currentId]);

  return (
    <div className={theme ? 'app-container light-mode' : 'app-container'} >
        <img src={theme ? bg_img_light : bg_img_dark} />
        <Input currentId={currentId} setCurrentId={setCurrentId} theme={theme}/>
        <Todos setCurrentId={setCurrentId}/>
    </div>
  );
}

export default App;
