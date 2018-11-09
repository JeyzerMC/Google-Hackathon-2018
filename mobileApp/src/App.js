import React, { Component } from "react";
import { Container, Tabs, Tab, TabHeading, View, Thumbnail } from "native-base";
import Lists from "./screens/lists";
import Primary from "./screens/primary";
import Delivery from "./screens/delivery";

class App extends Component {
  render() {
    const uris = {
      costco: "https://cdn.iconscout.com/icon/free/png-256/costco-282448.png",
      iga: "https://archive.li/A4yBK/ab49db9d993e090d7e5afabcbb715e8bbf113d84.gif",
      metro: "https://www.metro.ca/userfiles/image/publicite/logo-metro.png",
      walmart: "https://cdn.iconscout.com/icon/free/png-256/walmart-282199.png",
      superC: "https://www.placedeville.com/app/uploads/sites/11/2018/04/SuperC_Web.png",
      maxi: "https://www.circulaire-en-ligne.ca/wp-content/uploads/Circulaire-en-ligne-Maxi-et-Maxi-Cie.jpg",
    };

    return (
      <Container>
        <Tabs>
          <Tab heading={
            <TabHeading>
              <View>
                <Thumbnail small source={{ uri: uris.costco }} />
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
