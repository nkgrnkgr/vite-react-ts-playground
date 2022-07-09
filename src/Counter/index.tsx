import { useState } from "react";

const Component: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div role="article">{count}</div>
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export const Counter = Component;
