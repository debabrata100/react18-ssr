import React, { useEffect, useState } from "react";

function Home({ props }) {
  const [count, setCount] = useState(0);
  return (
    <div className="homepage">
      <h1>This Home Page</h1>
      <span>count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
}

export default Home;
