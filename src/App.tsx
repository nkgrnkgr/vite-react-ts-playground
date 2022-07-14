import { Counter } from "./Counter";

const Component: React.FC = () => {
  const ar = [1, 2, 3];
  return (
    <div>
      {ar.map((id) => (
        <Counter key={id} counterId={id} />
      ))}
    </div>
  );
};

export const App = Component;
