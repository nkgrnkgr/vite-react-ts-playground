import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";
import { PropsForStyled } from "./propsForStyled";

type Props = {
  //
};

const Component: React.FC<Props & PropsForStyled> = ({ className }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={className}>
      <div role="article">{count}</div>
      <div>
        <Button onClick={handleClick}>Add</Button>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  padding: 32px;
`;

export const Counter = StyledComponent;
