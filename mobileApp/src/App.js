import React, { Component } from "react";
import { Container, Tabs, Tab, Fab, Icon } from "native-base";
import Lists from "./screens/lists";
import Primary from "./screens/primary";
import Delivery from "./screens/delivery";
import listsStores from "./screens/listsStore";

class App extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarPosition="bottom">
          <Tab heading="Lists">
            <Lists />
            <Fab
              active={true}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: "#5067FF" }}
              position="bottomRight"
              onPress={() => {listsStores.lists[listsStores.currentPage].items.push({item: ""});}}>
              <Icon name="add" />
            </Fab>
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
