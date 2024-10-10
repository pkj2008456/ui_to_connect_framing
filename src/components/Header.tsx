import React from 'react';
import { useState, useEffect } from 'react';


const Header: React.FC = () => {
  const [RealTime, setRealTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRealTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timeInterval); //這個函數會在組件卸載時執行，清除定時器。
  }, []);
  return (
    <header className=" d-flex justify-content-between align-items-center py-3 rounded" style={{backgroundColor:"rgba(137, 179, 165,0.2)"}}>
      <h1>Client Home</h1>
      <div>
        <span>{RealTime}</span>
      </div>
    </header>
  );
};

export default Header;
