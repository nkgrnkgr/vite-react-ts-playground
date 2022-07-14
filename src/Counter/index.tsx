import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { PropsForStyled } from "./propsForStyled";
import { useCount } from "./useCount";

type Props = {
  counterId: number;
};

const Component: React.FC<Props & PropsForStyled> = ({
  className,
  counterId,
}) => {
  const { count, setCount } = useCount(counterId);

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

const StyledComponent: React.FC<Props> = styled(Component)`
  padding: 32px;
`;

export const Counter = StyledComponent;
