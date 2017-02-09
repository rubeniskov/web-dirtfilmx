import React from 'react';

export default class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu-wrap menu-wrap-light">
          <div className="dividewhite4"></div>
          <nav className="menu">
              <ul className="icon-list">
                  <li>
                      <div className="m-usermenu">
                          <div>
                              <div className="article-author-userpic">
                                  <img src="assets/custom/images/userpic05.jpg" alt="Maria Quinn" className="img-circle img-responsive" />
                              </div>
                              <div className="article-author-name">
                                  <h4 className="font-accident-one-bold"><a href="#!">Jessica Fletcher</a></h4>
                                  <p className="nopadding">
                                      <span className="extrasmall white">Landscape Designer</span>
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="dividewhite2"></div>
                  </li>
                  <li className="menu-item"><a href="#home"><i className="fa fa-fw fa-star-o"></i><span>Home</span></a></li>
                  <li className="menu-item"><a href="#details"><i className="fa fa-fw fa-bell-o"></i><span>Details</span></a></li>
                  <li className="menu-item"><a href="#counts-light-bg"><i className="fa fa-fw fa-bell-o"></i><span>Counts</span></a></li>
                  <li className="menu-item"><a href="#portfolio"><i className="fa fa-fw fa-comment-o"></i><span>Portfolio</span></a></li>
                  <li className="menu-item"><a href="#progress"><i className="fa fa-fw fa-bar-chart-o"></i><span>Skills</span></a></li>
                  <li className="menu-item"><a href="#timeline-vertical"><i className="fa fa-fw fa-shopping-cart"></i><span>Timeline</span></a></li>
                  <li className="menu-item"><a href="#photocard"><i className="fa fa-fw fa-recycle"></i><span>Featured</span></a></li>
                  <li className="menu-item"><a href="#testmonials-light"><i className="fa fa-fw fa-bell-o"></i><span>Testmonials</span></a></li>
                  <li className="menu-item"><a href="#feedback"><i className="fa fa-fw fa-bell-o"></i><span>Feedback</span></a></li>
                  <li className="socials">
                      <ul>
                          <li><a href="#!"><i className="flaticon-facebook44"></i></a></li>
                          <li><a href="#!"><i className="flaticon-google110"></i></a></li>
                          <li><a href="#!"><i className="flaticon-pinterest27"></i></a></li>
                          <li><a href="#!"><i className="flaticon-instagram13"></i></a></li>
                          <li><a href="#!"><i className="flaticon-linkedin21"></i></a></li>
                          <li><a href="#!"><i className="flaticon-twitter37"></i></a></li>
                      </ul>
                  </li>
              </ul>
          </nav>
          <div className="close-button nav-icon2" id="close-button">
              <div></div>
          </div>
      </div>
    );
  }
}
