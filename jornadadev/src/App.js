import './App.css';
import Video from "./pages/Video";

function App() {
  return (
    <div className='App'>
      <h1>Tekoteko</h1>
        <div className='app_videos'>
          <Video
            likes={100}
            messages={200}
            shares={300}
            name='Celso'
            description='Goleiro de garra'
            music='É GOOOOOOL'
            url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
          />
          <Video
            likes={10}
            messages={300}
            shares={500}
            name='Brenda'
            description='Brincando com pet'
            music='Meauw'
            url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z'
          />
        </div>
    </div>
  );
}

export default App;
