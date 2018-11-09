import React, { Component } from "react";
import {
  Container,
  Tabs,
  Tab} from "native-base";
import TabOne from "./screens/tabOne";
import TabTwo from "./screens/tabTwo";
import TabThree from "./screens/tabThree";

class App extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Tab1">
            <TabOne />
          </Tab>
          <Tab heading="Tab2">
            <TabTwo />
          </Tab>
          <Tab heading="Tab3">
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default App;
