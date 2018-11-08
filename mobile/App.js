import React from 'react';
import { Constants } from "expo";
import { Platform } from "react-native";
import { observable } from 'mobx';
import { observer } from 'mobx-react/native'
import { Container, Header, Tab, Tabs, Left, Button, Icon, Body, Title, Right } from 'native-base';

import Lists from './components/lists';
import Main from './components/main';
import Shipper from './components/shipper';

@observer
export default class App extends React.Component {
  @observable loading = true;

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.loading = false;
  }

  render() {
    return (
      <>
        {
          !this.loading &&
          <Container style={{ paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight }}>
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
                <Lists />
              </Tab>
              <Tab heading="Tab2">
                <Main />
              </Tab>
              <Tab heading="Tab3">
                <Shipper />
              </Tab>
            </Tabs>
          </Container>
        }
      </>
    );
  }
}
