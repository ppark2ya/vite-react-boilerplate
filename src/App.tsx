import Counter from 'components/counter';
import globalStyles from 'styles/global';
import { tw } from 'twind';

function App() {
  return (
    <div className={tw(globalStyles)}>
      <Counter />
    </div>
  );
}

export default App;
