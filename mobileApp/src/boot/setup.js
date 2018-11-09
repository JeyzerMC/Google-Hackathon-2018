import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import {observable} from "mobx";
import {observer} from "mobx-react/native";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

@observer
export default class Setup extends Component {
  @observable isReady = false;

  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.isReady = true;
  }
  render() {
    if (!this.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
