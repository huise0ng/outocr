import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MyComponent({ title }) {
  const [count, setCount] = useState(0);

  // 의존성 배열이 누락된 useEffect 훅
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    debugger;  // 이 줄은 오류를 발생시킵니다
  }); // eslint-disable-line react-hooks/exhaustive-deps

  console.log('This is a debug log'); // 이 줄은 오류를 발생시킵니다

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
