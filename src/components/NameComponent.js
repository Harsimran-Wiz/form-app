import React from "react";
import { connect } from "react-redux";
import { setName } from "../redux/nameSlice";

class NameComponent extends React.Component {
  render() {
    return (
        <div>
            <label htmlFor="name">Name: </label>
        <input id="name"
          value={this.props.name}
          onChange={(e) => this.props.setName(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
});

const mapDispatchToProps = { setName };

export default connect(mapStateToProps, mapDispatchToProps)(NameComponent);
