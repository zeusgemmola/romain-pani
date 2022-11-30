import React from "react";
import { AppBar } from "../../components/AppBar/AppBar";

const addAppBarToComponent = (Children) => {
  return class extends React.Component {
    render() {
      return (
        <div className="App">
          <AppBar />
          <main>
            <Children />
          </main>
        </div>
      );
    }
  };
};

export default addAppBarToComponent;
