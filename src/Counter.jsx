import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(0);
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return (
    <>
      <h1>
        now:{count} before:{prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};

export default Counter;
