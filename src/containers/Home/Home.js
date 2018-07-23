import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react';
import { toggle } from '../../redux/actions';
import { _post, fetch } from '../../Request';
import { Button, ItemCard } from '../../components';

export class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  _onClick = () => {
    const {
      action: { toggle },
      buttonToggle: { isToggle, status },
    } = this.props;

    toggle(isToggle, status);
    return fetch('init', null, null, [['x-apicache-bypass', true]]).then(response => {
      console.log(response);
    });
  };

  render() {
    const { buttonToggle } = this.props;
    const data = [
      {
        name: 'Name',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
      {
        name: 'Namesdf',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
      {
        name: 'Nameewr',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
      {
        name: 'Namef',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
      {
        name: 'Namegds',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
      {
        name: 'Namedf',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
      {
        name: 'Name',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
      {
        name: 'Namesdfq',
        date: '2 days',
        item: 'Nodaji',
        brand: 'Gucci',
        size: 'L',
        price: '$5000000',
      },
    ];
    return (
      <div className="container">
        {/* HIHI */}
        {/* {buttonToggle.isToggle ? 'TRUE' : 'FALSE'} */}
        <Button onClick={this._onClick} />
        <Card.Group itemsPerRow={4} doubling stackable>
          {data.map(data => {
            return <ItemCard data={data} />;
          })}
        </Card.Group>
      </div>
    );
  }
}

// connect to store
const mapStateToProps = state => ({
  buttonToggle: state.toggle,
});

// Acces to dispatch to run
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ toggle }, dispatch),
});

// connect hooks to higher order component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
