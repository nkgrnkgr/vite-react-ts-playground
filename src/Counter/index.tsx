import { Button } from "@mui/material";
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
        <Button onClick={handleClick}>Add</Button>
      </div>
    </div>
  );
};

export const Counter = Component;
