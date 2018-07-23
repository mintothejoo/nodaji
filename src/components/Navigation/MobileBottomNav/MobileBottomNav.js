import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MobileBottomnav extends Component {
  state = { activeItem: '' };
  handleItemClick = (event, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu secondary widths={5}>
        <Menu.Item name="Nothing" active={activeItem === 'nothing'} onClick={this.handleItemClick} />
        <Menu.Item name="Nothing" active={activeItem === 'nothing'} onClick={this.handleItemClick} />
        <Menu.Item name="Nothing" active={activeItem === 'nothing'} onClick={this.handleItemClick} />
        <Menu.Item name="Logo" className="mobile-nav-logo" active={activeItem === 'nothing'} onClick={this.handleItemClick} />
        <Menu.Item name="LOGOUT" className="mobile-login-logout" active={activeItem === 'nothing'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}
