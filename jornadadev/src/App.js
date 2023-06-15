import './App.css';
import Video from "./pages/Video";

function App() {
  return (
    <div className='App'>
      <h1>Tekoteko</h1>
        <div className='app_videos'>
          <Video/>
          <Video/>
          <Video/>
        </div>
    </div>
  );
}

export default App;
