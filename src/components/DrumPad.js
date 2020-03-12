import React, { Component } from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.playMusic = this.playMusic.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playMusic();
    }
  }
  playMusic() {
    const sound = document.getElementById(this.props.innerText);
    sound.currentTime = 0;
    sound.play();
    this.props.changeDispl(this.props.source);
  }
  render() {
    return (
      <div className="col-4">
        <button
          className="drum-pad btn btn-block py-3 my-2 justify-content-center"
          type="button"
          id={this.props.padId}
          onClick={this.playMusic}
        >
          {this.props.innerText}
          <audio
            preload="none"
            className="clip"
            id={this.props.innerText}
            src={this.props.source}
          />
        </button>
      </div>
    );
  }
}
export default DrumPad;
