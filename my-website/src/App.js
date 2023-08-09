import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-content">
        <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="Reshma's Portrait" className="App-photo" />
        <div className="App-text">
            <h1>Hi, I'm Reshma! Welcome to my website!</h1>
            <p>
              Here is a little something about me:
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;