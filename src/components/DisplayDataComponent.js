import React from "react";
import { connect } from "react-redux";

class DisplayDataComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Data:</h2>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>City: {this.props.city}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  age: state.age,
  city: state.city,
});

export default connect(mapStateToProps)(DisplayDataComponent);
