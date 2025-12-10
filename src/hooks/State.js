import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h1>Likes: {likes}</h1>
      <button onClick={() => setLikes(likes + 1)}>👍</button>
      <button onClick={() => setLikes(likes - 1)}>👎</button>
    </div>
  );
};

export default State;
