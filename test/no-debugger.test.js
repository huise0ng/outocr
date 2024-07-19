import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MyComponent({ title }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    debugger;
  }); 

  console.log('This is a debug log'); 

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MyComponent;
