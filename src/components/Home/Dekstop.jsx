import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
    Image
} from 'semantic-ui-react'
import cashlez from '../../logo-cashlez.png'
class DesktopContainer extends Component {
    constructor(props){
        super(props)
        this.state= {
            fixed:'',
            activeItem:'',
            activeNow:''
        }
    }
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
    const { children } = this.props
    const { fixed,activeItem } = this.state
    return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
        >
            <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
            >
            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
                style={{fontFamily:'Times New Roman'}}
            >
                <Container>
                <Menu.Item as={NavLink} exact to="/" name="Home" active={activeItem === "Home"}>
                    Home
                </Menu.Item>

                <Menu.Item as={NavLink} exact to="/gallery" name="Gallery" active={activeItem === "Gallery"}>
                    Gallery
                </Menu.Item>

                {/* <Menu.Item as={NavLink} exact to="/about" name="About" active={activeItem === "About"}>
                    About
                </Menu.Item> */}

                <Menu.Item as={NavLink} exact to="/contact" name="Contact" active={activeItem === "Contact"}>
                    Contact
                </Menu.Item>
                </Container>
            </Menu>
            </Segment>
        </Visibility>
        {children}
    <Segment inverted vertical id="footer">
      <Container>
        <center><Image src={cashlez}/></center>
      </Container>
    </Segment>
        </Responsive>
    )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export default DesktopContainer