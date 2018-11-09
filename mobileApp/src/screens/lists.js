import React, { Component } from "react";
import {
  Content, View, TabHeading, Thumbnail, Tabs, Tab, Text,
  Card, CardItem, Body
} from "native-base";
import { observer } from "mobx-react/native";
import listsStores from "./listsStore";

@observer
export default class Lists extends Component {

  render() {
    return (
      <Content>
        <Tabs onChangeTab={({i, ref}) => {listsStores.currentPage = i;}}>
          {listsStores.lists.map((value, index) =>
            <Tab key={index} heading={
              <TabHeading>
                <View>
                  <Thumbnail small source={{ uri: value.url }} />
                </View>
              </TabHeading>
            }>
              {value.items.map((value2, index2) =>
                <Card key={index2}>
                  <CardItem>
                    <Body>
                      <Text>
                        {value2}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              )}
            </Tab>
          )}
        </Tabs>
      </Content>
    );
  }
}
