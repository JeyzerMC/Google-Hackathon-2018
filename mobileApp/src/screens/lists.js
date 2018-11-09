import React, { Component } from "react";
import { Content, View, TabHeading, Thumbnail, Tabs, Tab, Text, ScrollableTab } from "native-base";

export default class Lists extends Component {
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
      <Content>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {Object.keys(uris).map((key) =>
            <Tab key={key} heading={
              <TabHeading>
                <View>
                  <Thumbnail small source={{ uri: uris[key] }} />
                </View>
              </TabHeading>
            }>
              <Text>
                {key}
              </Text>
            </Tab>
          )}
        </Tabs>
      </Content>
    );
  }
}
