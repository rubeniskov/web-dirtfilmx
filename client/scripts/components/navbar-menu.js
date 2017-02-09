import React from 'react';

export default class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-wrap">
        <header id="header-wrapper-mp" className="head-overlay sticky-menu-light">
           <div className="sticky-header header-dark sticky-overlay nobg" role="navigation">
              <div className="container mp-nav">
                 <div id="site-title"><a href="index.html"><h1 className="font-accident-one-normal">
                    <i className="flaticon-avatar36"></i>Fletcher</h1></a>
                 </div>
                 <nav id="main-menu" className="nav site-navigation primary-navigation">
                    <ul className="sf-menu clearfix" id="example">
                       <li className="m-desktop menu-item active"><a href="#home">Home</a></li>
                       <li className="m-desktop menu-item"><a href="#details">Details</a></li>
                       <li className="m-desktop menu-item"><a href="#portfolio">Portfolio</a></li>
                       <li className="m-desktop menu-item"><a href="#timeline-vertical">Timeline</a></li>
                       <li className="m-desktop menu-item"><a href="https://wrapbootstrap.com/theme/fletcher-personal-landing-page-html-WB029022K?ref=neuethemes" target="_blank">Buy</a></li>
                       <li>
                          <div className="menu-button nav-icon" id="open-button">
                             <div></div>
                          </div>
                       </li>
                    </ul>
                 </nav>

              </div>

           </div>

        </header>
      </div>
    );
  }
}
