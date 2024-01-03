import { useState, useEffect } from 'react';
import cls from './BlinkingCursor.module.scss';
const BlinkingCursor = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor(prevState => !prevState);
    }, 500); // Интервал между переключениями видимости курсора (в миллисекундах)

    return () => {
      clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    };
  }, []);

  return (
    <div>
      <p className={showCursor ? cls.Cursor : cls.Hidden}>{showCursor ? '|' : ' '}</p>
    </div>
  );
};

export default BlinkingCursor;