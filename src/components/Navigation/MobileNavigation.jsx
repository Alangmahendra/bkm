import React, { Component } from 'react'
import {Menu,Sidebar} from 'semantic-ui-css'
export default class MobileNavigation extends Component {
  render() {
    return (
        <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
        <Menu.Item as='a' active>
            Home
        </Menu.Item>
        <Menu.Item as='a'>Gallery</Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
        <Menu.Item as='a'>Contact</Menu.Item>
        </Sidebar>
    )
  }
}
