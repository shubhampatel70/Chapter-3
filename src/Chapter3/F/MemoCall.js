import React, { useState, useMemo, useCallback } from "react";

function SquaredSum() {
  const [numbers, setNumbers] = useState([]);
  
  const memory = useMemo(() => {
    return numbers.reduce((acc, num) => acc + num * num, 0);
  }, [numbers]);

  const handleAddNumber = useCallback(() => {
    const newNumber = parseInt(prompt("Enter a number:"), 10);
    if (!isNaN(newNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
    }
  }, []);

  const handleClearList = useCallback(() => {
    setNumbers([]);
  }, []);

  return (
    <>
      <h1 style={{color : 'crimson'}}>Task-f</h1>
      <div>
        <h2>List of Numbers</h2>
        <ul style={{listStyle:'none'}}>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <button onClick={handleAddNumber}>Add Number</button>
        <button onClick={handleClearList}>Clear List</button>
        <div>
          <h2>Sum of square of given numbers</h2>
          <p>{memory}</p>
        </div>
      </div>
    </>
  );
}

export default SquaredSum;