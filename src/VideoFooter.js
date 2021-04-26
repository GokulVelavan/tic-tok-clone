import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="footer">
      <div className="footer_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="footer_ticker">
          <MusicNoteIcon className="footer_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <div>
        <img
          className="footer_img"
          src="https://www.freeiconspng.com/uploads/burn-disk-icon-5.png"
        />
      </div>
    </div>
  );
}

export default VideoFooter;
