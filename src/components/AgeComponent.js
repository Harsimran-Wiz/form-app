import React from "react";
import { connect } from "react-redux";
import { setAge } from "../redux/ageSlice";

class AgeComponent extends React.Component {
  render() {
    return (
        <div>
            <label htmlFor="age">Age: </label>
        <input id="age"
          value={this.props.age}
          onChange={(e) => this.props.setAge(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  age: state.age,
});

const mapDispatchToProps = { setAge };

export default connect(mapStateToProps, mapDispatchToProps)(AgeComponent);