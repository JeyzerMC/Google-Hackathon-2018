import React, { Component } from "react";
import {
  Content, View, TabHeading, Thumbnail, Tabs, Tab, Item, Input,
  Card, CardItem, Button, Icon, Grid, Col
} from "native-base";
import { observer } from "mobx-react/native";
import listsStores from "./listsStore";

@observer
export default class Lists extends Component {

  render() {
    return (
      <Content>
        <Tabs locked={true} onChangeTab={({ i }) => { listsStores.currentPage = i; }}>
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
                    <Grid>
                      <Col size={80}>
                        <Item>
                          <Input onChangeText={(e) => {value2.item = e;}} placeholder="Item name" value={value2.item}/>
                        </Item>
                      </Col>
                      <Col size={20}>
                        <Button rounded onPress={() => {value.items.splice(index2, 1);}}>
                          <Icon name="trash" />
                        </Button>
                      </Col>
                    </Grid>
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
