//import React, { useState } from 'react';
import React from 'react';
function modal() {
  // Declare a new state variable, which we'll call "count"
 // const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked  times</p>
      <button onClick={() => alert("hello world")}>
        Click me
      </button>
    </div>
  );
};
export default modal;