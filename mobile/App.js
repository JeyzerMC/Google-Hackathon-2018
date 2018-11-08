import React from 'react';
import { Constants } from "expo";
import { Platform } from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';
import {observable} from 'mobx';
import {observer} from 'mobx-react/native'

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
            <Header />
            <Content>
              <Button>
                <Text>Click Me!</Text>
              </Button>
            </Content>
          </Container>
        }
      </>
    );
  }
}
