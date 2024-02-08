import React from "react";
import NameComponent from "./components/NameComponent";
import AgeComponent from "./components/AgeComponent";
import CityComponent from "./components/CityComponent";
import DisplayDataComponent from "./components/DisplayDataComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showData: false };
  }

  toggleData = () => {
    this.setState({ showData: !this.state.showData });
  };

  render() {
    return (
      <div>
        <h1>Form</h1>
        <NameComponent />
        <AgeComponent />
        <CityComponent />
        <button onClick={this.toggleData}>Toggle Data</button>
        {this.state.showData && <DisplayDataComponent />}
      </div>
    );
  }
}

export default App;
