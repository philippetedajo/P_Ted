import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <ReactHowler
        src="https://opengameart.org/sites/default/files/level3.mp3"
        // src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        playing={isPlaying}
        loop={true}
      />
      {isPlaying ? (
        <div className="cursor-pointer" onClick={handleToggle}>
          Pause
        </div>
      ) : (
        <div className="cursor-pointer" onClick={handleToggle}>
          Play
        </div>
      )}
    </div>
  );
};

export default Player;
