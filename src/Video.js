import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import video1 from "./videos/1564674844-disney.mp4";
import video2 from "./videos/1564676115-marvel.mp4";
import video3 from "./videos/1564676296-national-geographic.mp4";
import video4 from "./videos/1564676714-pixar.mp4";
import video5 from "./videos/1608229455-star-wars.mp4";
function Video({ channel, description, song, likes, shares, messages, url }) {
  const [playing, setplaying] = useState(false);
  const videoRef = useRef(null);

  const playvideo = () => {
    if (playing) {
      videoRef.current.pause();
      setplaying(false);
    } else {
      videoRef.current.play();
      setplaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={playvideo}
        ref={videoRef}
        src={url}
      ></video>
      {/* video side_bar */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* video foote
      r */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
