import React from 'react';
import { Constants } from "expo";
import { Platform } from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <>
        {
          !this.state.loading &&
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
