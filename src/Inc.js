import {
  useState,
  useEffect,
  useRef
} from 'react';

import moment from 'moment';

const useInterval = (cb) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  });

  useEffect(() => {
    let timerId = setInterval(() => {
      //savedCb.current(timerId);
    }, 2000)
  
    return () => {
      clearInterval(timerId); 
    }
  }, [])
}

const end = moment().add(10, 's');;

const Width = () => {
  const [width, setWidth] = useState(0);
  
  useInterval((timerId) => {
    if (moment().isAfter(end)) {
      clearInterval(timerId); 
    }
    
    setWidth(width + 1);
  });

  return width;
}

export {
  Width
}