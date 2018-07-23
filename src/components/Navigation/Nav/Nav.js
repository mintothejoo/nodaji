import React, { Component } from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import './style.scss';
export default class Nav extends Component {
  state = { activeItem: '' };

  render() {
    const { activeItem } = this.state;
    return (
      <div className="nav-container">
        <Menu secondary className="desktop-view-nav">
          <Menu.Item name="logo" className="nav-logo" active={activeItem === 'logo'} />
          <Menu.Item className="search-component">
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item className="login-logout">
            <Button basic> Login / Sign Up </Button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
