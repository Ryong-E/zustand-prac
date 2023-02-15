import logo from './logo.svg';
import './App.css';
import useCountStore from './store/count/count';
import Child from './Child';

function App() {
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);
  const decreaseCount = useCountStore((state) => state.decreaseCount);
  return (
    <div className="App">
      {count}
      <button onClick={increaseCount}>증가</button>
      <button onClick={decreaseCount}>감소</button>
    </div>
  );
}

export default App;
