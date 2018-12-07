import React, { Component } from 'react'
import Dcontainer from '../components/Home/Dekstop'
import Mcontainer from '../components/Home/Mobile'
import {Grid,Card,Container,Segment} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import {suryaPanel} from '../components/Gallery/panel'
import thumbnail2 from './thubnail2.png'
import {tangki} from '../components/Gallery/tangki'
import {kalahein} from '../components/Gallery/kalahein'

const ResponsiveContainer = ({children}) =>(
  <div>
    <Dcontainer>{children}</Dcontainer>
    <Mcontainer>{children}</Mcontainer>
  </div>
)
export default class GalleryHome extends Component {
  render() {
    return (
      <ResponsiveContainer>
          <Container style={{marginTop:'100px',paddingBottom:"60px"}}>
            <Grid centered>
                <Grid.Column computer={5} mobile={16}>
                  <Card color="red" image={suryaPanel[0]} as={NavLink} to="/gallery/panel-surya"/>
                </Grid.Column>
                <Grid.Column computer={5} mobile={16}>
                  <Card color="red" image={thumbnail2} as={NavLink} to="/gallery/interior"/>
                </Grid.Column>
                <Grid.Column computer={5} mobile={16}>
                  <Card color="red" image={tangki[0]} as={NavLink} to="/gallery/tangki"/>
                </Grid.Column>
                <Grid.Column computer={5} mobile={16}>
                  <Card color="red" image={kalahein[0]} as={NavLink} to="/gallery/kalahein"/>
                </Grid.Column>
            </Grid>
          </Container>
      </ResponsiveContainer>
    )
  }
}
