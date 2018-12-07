import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Image
} from 'semantic-ui-react'
import cashlez from '../../logo-cashlez.png'
class MobileContainer extends Component {
    constructor(props){
        super(props)
        this.state= {
            fixed:'',
            activeItem:'',
            activeNow:''
        }
    }

    handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { fixed,activeItem } = this.state
    return (
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
            <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as={NavLink} exact to="/" name="Home" active={activeItem === "Home"}>
                Home
            </Menu.Item>
            <Menu.Item as={NavLink} exact to="/gallery" name="Gallery" active={activeItem === "Gallery"}>Gallery</Menu.Item>
            {/* <Menu.Item as='a'>About</Menu.Item> */}
            <Menu.Item as={NavLink} exact to="/contact" name="Contact" active={activeItem === "Contact"}>Contact</Menu.Item>
            </Sidebar>

        <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
            >
            <Segment
                inverted
                textAlign='center'
                style={{padding: '1em 0em' }}
                vertical
            >
                <Container>
                <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                    </Menu.Item>
                </Menu>
                </Container>
            </Segment>

            {children}
            <Segment inverted vertical floated>
      <Container>
        <center><Image src={cashlez}/></center>
      </Container>
    </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Responsive>
    )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export default MobileContainer