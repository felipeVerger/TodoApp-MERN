import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../redux/actions/todos';

import './Switch.scss';

const Switch = () => {
  const [isOn, setIsOn] = useState(true);
  const dispatch = useDispatch();

  const handleChange = () => {
    setIsOn(!isOn);
    dispatch(changeTheme(isOn))
  }

  return (
    <div 
      className={isOn ? "container active" : 'container' }
      data-darkmode={isOn}
      onClick={handleChange}
      style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode='wait' initial={false}>
          <motion.i
            className={`icon far fa-${isOn ? 'moon' : 'sun'}`}
            key={isOn ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }} 
            transition={{ duration: .2 }}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Switch;