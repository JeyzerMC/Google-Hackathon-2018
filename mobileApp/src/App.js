import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
import TabOne from "./screens/tab/tabOne";
import TabTwo from "./screens/tab/tabTwo";
import TabThree from "./screens/tab/tabThree";

class App extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Basic Tabs</Title>
          </Body>
          <Right />
        </Header>

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
