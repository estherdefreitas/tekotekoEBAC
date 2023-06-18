import React, {useEffect, useState} from "react";
import './App.css';
import Video from "./pages/Video";
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [videos, setVideos] = useState([])

  async function getVideos() {
    const videosCol = collection(db, 'videos');
    const videoSnapshot = await getDocs(videosCol);
    const videosList = videoSnapshot.docs.map(doc => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, [])


  return (
    <div className='App'>
      <h1>Tekoteko</h1>
        <div className='app_videos'>
          { videos.map((item) => {
            return(
              <Video
                likes={item.likes}
                messages={item.messages}
                shares={item.shares}
                name={item.name}
                description={item.description}
                music={item.music}
                url={item.url}
              />
            )
          }) }
        </div>
    </div>
  );
}

export default App;
