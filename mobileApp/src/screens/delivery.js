import React, { Component, View } from "react";
import { Content, Card, CardItem, Text, Body, Thumbnail, Grid, Col, Row } from "native-base";

export default class Delivery extends Component {
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
          <Row>
          <Col size={2}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body>
                <Text>
                  DSFD
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Col>
          <Col size={2}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body>
                <Text>
                  Text
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Col>
          </Row>
        </Grid>
        {Object.entries(uris).map(([key, value]) =>
          <Card key={key} style={{ flex: 0 }}>
            <CardItem>
              <Thumbnail small
                source={{ uri: value }}>
              </Thumbnail>
              <Body>
                <Text>
                  {key}
                </Text>
              </Body>
            </CardItem>
          </Card>
        )}

      </Content>
    );
  }
}
