import React, { useState } from "react";
import DrumPad from "./DrumPad";

const pads = [
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    id: "1",
    keyName: "Q",
    keyCode: 81
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    id: "2",
    keyName: "W",
    keyCode: 87
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    id: "3",
    keyName: "E",
    keyCode: 69
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    id: "4",
    keyName: "A",
    keyCode: 65
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    id: "5",
    keyName: "S",
    keyCode: 83
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    id: "6",
    keyName: "D",
    keyCode: 68
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    id: "7",
    keyName: "Z",
    keyCode: 90
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    id: "8",
    keyName: "X",
    keyCode: 88
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    id: "9",
    keyName: "C",
    keyCode: 67
  }
];
const DrumMachine = () => {
  const [display, setDisplay] = useState("Press Pad to play");

  const renderPads = pads.map((a, i) => (
    <DrumPad
      innerText={a.keyName}
      source={a.src}
      padId={a.id}
      keyCode={a.keyCode}
      changeDispl={setDisplay}
    />
  ));
  return (
    <div className="container">
      <div id="drum-machine" className="rounded-lg shadow bg-dark mt-2">
        <div className="d-flex justify-content-center py-3 mx-0 text-light">
          <h2 className="display-4">Drum Machine</h2>
        </div>
        <div id="display" className="container justify-content-center">
          <div className="row justify-content-center">
            <div className="col-3  my-3">
              <p className="text-center badge badge-secondary text-truncate">
                {display}
              </p>
            </div>
          </div>
          <div className="row p-1 mb-2 w-75">{renderPads}</div>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
