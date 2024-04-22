import { useState } from 'react';

export default function Counter() {
  const [age, setAge] = useState(1);

  function increment() {
    setAge(a => a + 1);
  }

  return (
    <>
      <h1>Page of: {age}</h1>
      <button className="w-16 bg-black m-2 text-white" onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button  className="w-16 bg-black m-2 text-white" onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}
