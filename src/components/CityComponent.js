import React from "react";
import { connect } from "react-redux";
import { setCity } from "../redux/citySlice";

class CityComponent extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="city">City: </label>
        <input id="city"
          value={this.props.city}
          onChange={(e) => this.props.setCity(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = { setCity };

export default connect(mapStateToProps, mapDispatchToProps)(CityComponent);
