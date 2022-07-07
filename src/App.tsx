import { useEffect } from 'react';
import { useCounterStore } from 'store';

function App() {
  const { bears, increasePopulation } = useCounterStore((state) => ({
    bears: state.bears,
    increasePopulation: state.increasePopulation,
  }));

  useEffect(() => {
    const timer = setTimeout(() => increasePopulation(), 1000);
    return () => clearTimeout(timer);
  }, [bears, increasePopulation]);

  return (
    <div className="App">
      <p>Hello Vite React App!</p>
      <p>
        Page has been open for <code>{bears}</code> seconds.
      </p>
    </div>
  );
}

export default App;
