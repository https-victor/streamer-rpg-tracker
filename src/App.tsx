export const App = (): any => {
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <p>Streamer RPG Tracker</p>

        <p>
          Version: {process.env.REACT_APP_VERSION} | Environment: {process.env.REACT_APP_ENV}
        </p>
      </header>
    </div>
  );
};
