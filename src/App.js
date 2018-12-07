import React, { Component } from 'react';
import './App.css';
import {Router,Switch,Route} from 'react-router-dom'
import history from './history'
import Home from './pages/Home'
import Gallery from './components/Gallery/Galery'
import {suryaPanel as panel} from './components/Gallery/panel'
import {interior} from './components/Gallery/interior'
import {tangki} from './components/Gallery/tangki'
import {kalahein} from './components/Gallery/kalahein'
import GalleryHome from './pages/GalleryHome'
import Contact from './pages/Contact'
import About from './pages/About'


class App extends Component {
  componentDidMount(){
  
  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
        <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/gallery" component={GalleryHome}/>
          <Route  path="/gallery/panel-surya" component={(props)=> <Gallery {...props} images={panel} />}/>
          <Route  path="/gallery/interior" component={(props)=> <Gallery {...props} images={interior} />}/>
          <Route  path="/gallery/tangki" component={(props)=> <Gallery {...props} images={tangki} />}/>
          <Route  path="/gallery/kalahein" component={(props)=> <Gallery {...props} images={kalahein} />}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
