import React, { Component } from "react";
import {
  Content, View, TabHeading, Thumbnail, Tabs, Tab, Text,
  Card, CardItem, Button, Icon, Left, Right
} from "native-base";
import { observer } from "mobx-react/native";
import listsStores from "./listsStore";

@observer
export default class Lists extends Component {

  render() {
    return (
      <Content>
        <Tabs locked={true} onChangeTab={({ i, ref }) => { listsStores.currentPage = i; }}>
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
                    <Left>
                      <Text>
                        {value2}
                      </Text>
                    </Left>
                    <Right>
                      <Button rounded>
                        <Icon name="create" />
                      </Button>
                    </Right>
                    <Right>
                      <Button rounded>
                        <Icon name="trash" />
                      </Button>
                    </Right>
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
