import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import listsStores from "./listsStore";
import Button from "../theme/components/Button";

export default class Primary extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                {listsStores.currentRequest.name ? 
                listsStores.currentRequest.name : 
                "You don't have any pending deliveries"}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Button>
          
        </Button>
      </Content>
    );
  }
}
