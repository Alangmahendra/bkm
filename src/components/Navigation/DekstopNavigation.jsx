import React, { Component } from 'react'
import {Menu,Container} from 'semantic-ui-css'
import history from '../../history'
export default class DekstopNavigation extends Component {

    galleryPush = (e,{name}) => {
        history.push('/gallery')
        this.setState({isActive:name})
    }

    homePush = (e,{name}) => {
        history.push('/')
        this.setState({isActive:name})
    }

    aboutPush = (e,{name}) => {
        history.push('/about')
        this.setState({isActive:name})
    }

    contactPush = (e,{name}) => {
        history.push('/contact')
        this.setState({isActive:name})
    }
  render() {
      const {isActive} = this.state
    return (
        <Menu
        fixed={this.props.fixed}
        inverted={this.props.inverted}
        pointing={this.props.pointing}
        secondary={this.props.secondary}
        size={this.props.size}
    >
        <Container>
        <Menu.Item as='a' onClick={this.homePush} name="home" active={isActive === 'home'}>
            Home
        </Menu.Item>
        <Menu.Item as='a' onClick={this.galleryPush} name="gallery" active={isActive === 'gallery'}>Gallery</Menu.Item>
        <Menu.Item as='a' onClick={this.aboutPush} name="about" active={isActive === 'about'}>About</Menu.Item>
        <Menu.Item as='a' onClick={this.contactPush} name="contact" active={isActive === 'contact'}>Contact</Menu.Item>
        </Container>
    </Menu>
    )
  }
}
