import React, { useState, useEffect } from 'react';

export default function AboutPage() {
     const [count, setCount] = useState(0);

     useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });

    return (
        <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
    );
}
