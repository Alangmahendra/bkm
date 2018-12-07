import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {
  Button,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
    <Segment
      inverted
      style={{minHeight: 550,marginTop:'-2em'}}
      vertical
    >
      <Header
        as='h1'
        content='BERLIAN KARYA MANDIRI'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'bold',
          marginBottom: 0,
          marginTop: mobile ? '1em' : '2em',
          fontFamily:'Times New Roman'
        }}
      />
      <Header
        as='h2'
        content='GENERAL CONTRACTOR & TRANSPORT EQUIPMENT'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'bold',
          marginTop: mobile ? '1em' : '2em',
          fontFamily:'Times New Roman'
        }}
      />
      <Button as={NavLink} exact to="/contact" primary size='huge'>
        Hubungi Kami
        <Icon name='right arrow' />
      </Button>
      </Segment>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

export default HomepageHeading