import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, addAmount } from './features/counter/counterSlice';
export const App = (): any => {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>Streamer RPG Tracker</p>

        <button onClick={() => dispatch(addAmount(10))}>add 10</button>
        <p>
          <button onClick={() => dispatch(increment())}>count is: {count}</button>
        </p>

        <p>
          Version: {process.env.REACT_APP_VERSION} | Environment: {process.env.REACT_APP_ENV}
        </p>
      </header>
    </div>
  );
};
