import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'
// import Dekstop from '../Home/Dekstop'
// import Mobile from '../Home/Mobile'
import {Container,Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'


export default class GalleryHome extends Component {
  render() {
    return (
        <Container>
          <Button as={NavLink} to="/gallery" secondary style={{width:"100%",marginTop:"10px",marginBottom:"40px"}}>KEMBALI KE GALERY</Button>
          <br/>
          <Gallery images={this.props.images}/>
        </Container>
      )
  }
}
