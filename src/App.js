import "./App.css";
import Video from "./Video";
import React, { useState, useEffect } from "react";

import db from "./Firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ channel, description, song, likes, shares, messages, url }) => (
            <Video
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
              url={url}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
