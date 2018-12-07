import React, { Component } from 'react'
import {Button,Popup,Grid,Form,Container,Input,TextArea} from 'semantic-ui-react'
import Dcontainer from '../components/Home/Dekstop'
import Mcontainer from '../components/Home/Mobile'
import { connect } from 'react-redux';
import {kontakForm} from '../actions/kontakForm'
import { bindActionCreators } from 'redux';


const styles = {
  warningValidate: {
    fontSize: '13px',
    color: 'red'
  }
}

const ResponsiveContainer = ({children}) =>(
  <div>
    <Dcontainer>{children}</Dcontainer>
    <Mcontainer>{children}</Mcontainer>
  </div>
)

class ContactPage extends Component {
  constructor(props){
    super(props)
    this.state={
      nama:'',
      email:'',
      pesan:'',
      namaValid: '',
      emailValid: '',
      pesanValid: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

 async handleSubmit(e){
    e.preventDefault();
    // eslint-disable-next-line
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultEmail = regexEmail.test(this.state.email)

    if (this.state.nama !== '') {
      this.setState({ namaValid: '' })
    } else {
      this.setState({ namaValid: 'Harap isikan nama anda.' })
    }

    if (this.state.email !== '') {
      if (resultEmail) {
        this.setState({ emailValid: '' })
      } else {
        this.setState({ emailValid: 'Format email anda salah. Contoh: john@gmail.com' })
      }
    } else {
      this.setState({ emailValid: 'Harap isikan email anda.' })
    }

    if (this.state.pesan !== '') {
      this.setState({ pesanValid: '' })
    } else {
      this.setState({ pesanValid: 'Harap isikan pesan anda.' })
    }

    if (this.state.namaValid === '' && this.state.pesanValid === '' && resultEmail) {
      const {nama,email,pesan} = this.state
      try {
        const send = await this.props.kontakForm(nama,email,pesan)
        this.setState({
          nama: '',
          email: '',
          pesan: ''
        })
        // window.location.reload()
      }catch(error){
        alert('Ooops!,coba hubungi kami via Whatsapp')
      }
    } else {
      console.log('Tidak simpan')
      console.log(`email(${this.state.emailValid}), nama(${this.state.namaValid}), pesan(${this.state.pesanValid}))`)
    }

  }


  render() {
    const {nama,email,pesan} = this.state
    return (
      <ResponsiveContainer>
        <Container style={{marginTop:"50px",paddingBottom:"60px"}}>
        <h1>HUBUNGI KAMI</h1>
        <Grid textAlign="left">
            <Grid.Column computer={8} mobile={16}>
            <Form size="big" onSubmit={this.handleSubmit}>
            <Grid.Column computer={8} mobile={16}>
              <Form.Field>
                <label>Nama</label>
                <Input type="text" name="nama" value={nama} onChange={this.handleOnChange}/>
                <p style={styles.warningValidate}>{this.state.namaValid}</p>
              </Form.Field>
                </Grid.Column>

                <br/>
                <Grid.Column computer={8} mobile={16}>
                <Form.Field>
                <label>Email</label>
                <Input type="email" name="email" value={email} onChange={this.handleOnChange}/>
                <p style={styles.warningValidate}>{this.state.emailValid}</p>
                </Form.Field>
                </Grid.Column>

                <br/>
                <Grid.Column computer={8} mobile={16}>
                <Form.Field>
                  <label>Pesan</label>
                  <TextArea name="pesan" values={pesan} onChange={this.handleOnChange} />
                  <p style={styles.warningValidate}>{this.state.pesanValid}</p>
                </Form.Field>
                </Grid.Column>
                <br/>

                <Grid.Column computer={8} mobile={16}>
                <Button type="submit" style={{width:"100%"}} secondary>KIRIM</Button>
                </Grid.Column>

            </Form>
            </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <div style={{position:"relative", display:"table", background: "rgb(245, 245, 245)", borderRadius:"20px", marginBottom: "20px",width:"100%", padding: "10px", marginTop: "20px"}}>
            <Popup 
                trigger={<Button
                target="_blank"
                href="https://api.whatsapp.com/send?phone=6281280620366"
                circular
                positive
                icon="phone"
                />}
                inverted
                content="whatsapp"
                position="left center"/>
                <span style={{color:"rgb(111, 111, 111)",padding:" 5px 8px 5px 50px", fontSize: "18px", float: "left",width:"100%",marginTop:"-34px"}}>+6281 280 620 366</span>
            </div>
            <div style={{position:"relative", display:"table", background: "rgb(245, 245, 245)", borderRadius:"20px", marginBottom: "20px",width:"100%", padding: "10px", marginTop: "20px"}}>
            <Popup 
                trigger={<Button
                target="_blank"
                href="https://mail.google.com/"
                circular
                primary
                icon="mail"
                />}
                inverted
                content="Email"
                position="left center"/>
                <span style={{color:"rgb(111, 111, 111)",padding:" 5px 8px 5px 50px", fontSize: "18px", float: "left",width:"100%",marginTop:"-34px"}}>info[at]berliankaryamandiri.com</span>
            </div>
          </Grid.Column>
        </Grid>
        </Container>
      </ResponsiveContainer>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    test: state.contactForm
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  kontakForm
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ContactPage)
