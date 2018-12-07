import DesktopContainer from '../components/Home/Dekstop'
import MobileContainer from '../components/Home/Mobile'
import PropTypes from 'prop-types'
import React from 'react'
import HomeHeading from '../components/Home/HomeHeading'
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
      <HomeHeading/>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable textAlign='left'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Kami Bergerak Pada Bidang :
            </Header>
            <List bulleted>
              <List.Item >Steel Construction / Structure</List.Item>
                <List.Item >Low Loader / Dump Truck</List.Item>
                <List.Item >Ponton</List.Item>
                <List.Item >Vessel / Water Tank / Cyclone Tank / Pressure Tank / Fuel Tank</List.Item>
                <List.Item>Instalasi Piping Mail Steel & Stainless Steel</List.Item>
                <List.Item>Mechanical / Electrical</List.Item>
                <List.Item>Machine</List.Item>
                <List.Item>Interior, Office, Showroom, Booth, Food Court, Apartemen & Rumah Tinggal, Exhibition</List.Item>
              </List>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Misi Kami
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            “Menjadi Perusahaan yang Terpercaya Dalam Menjalankan Usaha di Bidang Manufacture Engineering & Design”. Untuk itu kami  berkomitmen untuk “Selalu memberikan yang terbaik”
            </p>
            <p style={{ fontSize: '1.33em' }}>
            Yang sekaligus menjadi motto pelayanan kami.
            Produk yang berkualitas, harga yang terjangkau dan tepat waktu menjadi perhatian utama kami terhadap pelanggan.
            Kami berharap bisa menjadi mitra yang baik dan saling menguntungkan.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={require('../assets/krt 2.jpeg')} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout