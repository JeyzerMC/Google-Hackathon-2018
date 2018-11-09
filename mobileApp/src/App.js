import React, { Component } from "react";
import { Container, Tabs, Tab, TabHeading, View, Text, Icon } from "native-base";
import Lists from "./screens/lists";
import Primary from "./screens/primary";
import Delivery from "./screens/delivery";

class App extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={
            <TabHeading>
              <View>
                <Icon name="briefcase" />
              </View>
              <View>
                <Text>Tab Text</Text>
              </View>
            </TabHeading>
          }>
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
