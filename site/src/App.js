import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The work from home logbook app</h1>
        <img 
          alt="An animation showing how to set your home network in the work from home log book app."
          className="App-logo" 
          src={require("./wfh-log-animation.gif")}
        />
        <p>
          Stay ATO compliant with the logbook app. Easily claim work-from-home deductions by automatically recording 
          your WiFi network name hourly. Access the .csv log conveniently from the taskbar.
        </p>
        <p>
        <span>
          <a 
            className="App-link"
            href="https://github.com/dylan-george-field/work-from-home-logger/releases/latest/download/wfh-log.exe"
            target="_blank"
            rel="noopener noreferrer"
            id="download">
              Download 🪟
          </a>
           | 
          <a
           className="App-link"
           href="https://github.com/dylan-george-field/work-from-home-logger/wiki"
           target="_blank"
           rel="noopener noreferrer">
            Wiki
          </a>
        </span>
        </p>
        <p>
          <img 
            alt="A screenshot of the wfh-log app in the windows taskbar."
            src={require("./wfh-log-taskbar.png")}
          />
        </p>
        <p>Place the wfh-log.exe in your startup folder 😉</p>
        <p>
        <img 
           alt="A scrolling animation of the work from home log using microsoft notepad."
           src={require("./wfh-log-notepad.gif")}
           className="App-logo"
        />
        </p>
      </header>
      <footer>
        <a href="https://www.georgefield.com.au/contact" rel="noreferrer" target="_blank">Send feedback</a>
      </footer>
    </div>
  );
}

export default App;
