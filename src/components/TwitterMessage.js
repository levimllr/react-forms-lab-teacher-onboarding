import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      remainingLength: this.props.maxChars
    };
  }

  updateRemainingLength = (event) => {
    this.setState({
      message: event.target.value,
      remainingLength: this.props.maxChars - event.target.value.length
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          maxLength={this.props.maxLength}
          onChange={this.updateRemainingLength}
          value={this.state.message}
        />
        <p>{ this.state.remainingLength } characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;