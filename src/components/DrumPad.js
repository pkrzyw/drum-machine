import React, { useEffect } from "react";

const DrumPad = props => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = e => {
    if (e.keyCode === props.keyCode) {
      playMusic();
    }
  };
  const playMusic = () => {
    const sound = document.getElementById(props.innerText);
    sound.currentTime = 0;
    sound.play();
    props.changeDispl(props.source);
  };

  return (
    <div className="col-4">
      <button
        className="drum-pad btn btn-block py-3 my-2 justify-content-center"
        type="button"
        id={props.padId}
        onClick={playMusic}
      >
        {props.innerText}
        <audio
          preload="none"
          className="clip"
          id={props.innerText}
          src={props.source}
        />
      </button>
    </div>
  );
};

export default DrumPad;
