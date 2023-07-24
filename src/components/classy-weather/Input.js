import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search from location..."
          value={this.props.location}
          onChange={this.props.onChangeLocation}
        />
      </div>
    );
  }
}

export default Input;
