import React, { Component } from "react";
import { Container, Tabs, Tab } from "native-base";
import Lists from "./screens/lists";
import Primary from "./screens/primary";
import Delivery from "./screens/delivery";

class App extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarPosition="bottom">
          <Tab heading="Lists">
            <Lists />
          </Tab>
          <Tab heading="Current">
            <Primary />
          </Tab>
          <Tab heading="Delivery">
            <Delivery />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default App;
