import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import PostList from './components/post-list';
import Preloader from './components/preloader';
import NavbarMenu from './components/navbar-menu';
import SidebarMenu from './components/sidebar-menu';
import SliderGallery from './components/slider-gallery';
import Content from './components/content';
import GoogleMaps from './components/google-maps';
import Footer from './components/footer';
import Copyright from './components/copyright';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Preloader></Preloader>
        <div id="home">
            <div className="pt-section" data-name="Home" id="ptsection-one"></div>
        </div>
        <SidebarMenu></SidebarMenu>
        <NavbarMenu></NavbarMenu>
        <SliderGallery></SliderGallery>
        <Content></Content>
        <GoogleMaps></GoogleMaps>
        <Footer></Footer>
        <Copyright></Copyright>
        <div id="back-top"><a href="#top"></a></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
