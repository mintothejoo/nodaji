import React, { Component } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import PlaceHolder from '../../../assets/img/placeholder.png';
import Avatar from '../../../assets/img/avatar.jpg';

import './style.scss';

export default class ItemCard extends Component {
  render() {
    const { name, date, item, brand, size, price } = this.props.data;
    return (
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={Avatar} />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{date}</Card.Meta>
        </Card.Content>
        <Image src={PlaceHolder} />
        <Card.Content>
          <Card.Header>{item}E</Card.Header>
          <Card.Meta>{brand}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Grid columns={2} className="extra-content">
            <Grid.Column>
              <Card.Description className="floated-left">{size}</Card.Description>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Card.Description className="floated-right">{price }</Card.Description>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
