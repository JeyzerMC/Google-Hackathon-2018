import React, { Component } from "react";
import { Content, View, TabHeading, Thumbnail, Tabs, Tab, Text, ScrollableTab } from "native-base";

export default class Lists extends Component {
  render() {
    const uris = {
      costco: "https://cdn.iconscout.com/icon/free/png-256/costco-282448.png",
      iga: "https://www.jobillico.com/medias/logo-entreprise/0/0/exp_logo_20974_fr_2018_07_04_10_27_42.jpg",
      superC: "https://www.placedeville.com/app/uploads/sites/11/2018/04/SuperC_Web.png",
      metro: "https://www.metro.ca/userfiles/image/publicite/logo-metro.png",
      walmart: "https://cdn.iconscout.com/icon/free/png-256/walmart-282199.png",
      maxi: "https://www.circulaire-en-ligne.ca/wp-content/uploads/Circulaire-en-ligne-Maxi-et-Maxi-Cie.jpg",
    };

    return (
      <Content>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {Object.entries(uris).map(([key, value]) =>
            <Tab key={key} heading={
              <TabHeading>
                <View>
                  <Thumbnail small source={{ uri: value }} />
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
