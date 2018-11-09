import React, { Component, View, TouchableOpacity } from "react";
import { Content, Card, CardItem, Text, Body, Thumbnail, Grid, Col, Row } from "native-base";
import listsStores from "./listsStore";
import { observable } from "mobx";
import { observer } from "mobx-react/native";

@observer
export default class Delivery extends Component {

  @observable
  people = [];


  addPeopleFromStore (store) {
    this.people = listsStores.deliveries[store];
  }
  
  render() {
    const uris = [
      { store: "costco", url: "https://cdn.iconscout.com/icon/free/png-256/costco-282448.png" },
      { store: "iga", url: "https://archive.li/A4yBK/ab49db9d993e090d7e5afabcbb715e8bbf113d84.gif" },
      { store: "metro", url: "https://www.metro.ca/userfiles/image/publicite/logo-metro.png" },
      { store: "walmart", url: "https://cdn.iconscout.com/icon/free/png-256/walmart-282199.png" },
      { store: "superC", url: "https://www.placedeville.com/app/uploads/sites/11/2018/04/SuperC_Web.png" },
      { store: "maxi", url: "https://www.circulaire-en-ligne.ca/wp-content/uploads/Circulaire-en-ligne-Maxi-et-Maxi-Cie.jpg" }];

    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Where are you going today, Francis?
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Grid>
          <Col size={2}>
            {uris.filter((value, index) => index % 2 === 0).map((value, index) =>
              <Row
                key={index}>
                <Card>
                  <CardItem button onPress={() => this.addPeopleFromStore(value.store)}>
                    <Thumbnail medium
                      source={value}
                    >
                    </Thumbnail>
                  </CardItem>
                </Card>
              </Row>
            )}
          </Col>
          <Col size={2}>
            {uris.filter((value, index) => index % 2 !== 0).map((value, index) =>
              <Row key={index}>
                <Card>
                  <CardItem button onPress={() => this.addPeopleFromStore(value.store)}>
                    <Thumbnail medium
                      source={value}>

                    </Thumbnail>
                  </CardItem>
                </Card>
              </Row>
            )}
          </Col>
        </Grid>
              
       {this.people.map((value, index) =>
         <Card>
         <CardItem button>
         <Text>
           WASSUp
                    </Text>
         </CardItem>
       </Card>
       )}
      </Content>
    );
  }
}
