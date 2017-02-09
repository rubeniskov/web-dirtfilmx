import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="footer" className="e-block-skin">
         <div className="container">
            <div className="row">
               <div className="col-sm-3">
                  <div className="infoblock">
                     <h4 className="font-accident-two-bold uppercase">John Fletcher</h4>
                     <div className="dividewhite2"></div>
                     <p>The Experienced UI/UX Specialist, Web-designer, Photographer, Model</p>
                  </div>
               </div>
               <div className="col-sm-3">
                  <div className="infoblock">
                     <h4 className="font-accident-two-bold uppercase">Contacts</h4>
                     <div className="dividewhite2"></div>
                     <div className="contact">
                        <div className="footer-addr">
                           <div className="footer-icon"><i className="fa fa-home"></i></div>
                           <div className="addr-text">12345, Direct Drive - 110, Daytona Beach, Florida, USA</div>
                        </div>
                        <div className="footer-addr">
                           <div className="footer-icon"><i className="fa fa-phone"></i></div>
                           <div className="addr-text">1 234 567 67 45</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-sm-3">
                  <div className="infoblock">
                     <h4 className="font-accident-two-bold uppercase">Media</h4>
                     <div className="dividewhite2"></div>
                     <ul id="basicuse" className="thumbs">
                        <li><a href="http://www.flickr.com/photos/55166285@N00/1274107940/" title="the sunken garden by perfectweb, on Flickr"><img src="http://farm2.staticflickr.com/1245/1274107940_ede5aa897d_z.jpg" className="img-rounded" alt="the sunken garden"/></a></li>
                        <li><a href="http://www.flickr.com/photos/55166285@N00/1274119018/" title="tree rings by perfectweb, on Flickr"><img src="http://farm2.staticflickr.com/1015/1274119018_1422d64d17_z.jpg" className="img-rounded" alt="tree rings"/></a></li>
                        <li><a href="http://www.flickr.com/photos/55166285@N00/1274114292/" title="study of flowers by perfectweb, on Flickr"><img src="http://farm2.staticflickr.com/1012/1274114292_f847986865_z.jpg" className="img-rounded" alt="study of flowers"/></a></li>
                        <li><a href="http://www.flickr.com/photos/25251822@N07/23506251141/" title="study of flowers by perfectweb, on Flickr"><img src="http://c1.staticflickr.com/1/731/23506251141_0c177771be_c.jpg" className="img-rounded" alt="study of flowers"/></a></li>
                     </ul>
                  </div>
               </div>

               <div className="col-sm-3">
                  <div className="infoblock">
                     <h4 className="font-accident-two-bold uppercase">Follow me</h4>
                     <div className="dividewhite2"></div>
                     <div className="follow">
                        <ul>
                           <li><a href="#!"><i className="flaticon-facebook44"></i></a></li>
                           <li><a href="#!"><i className="flaticon-google110"></i></a></li>
                           <li><a href="#!"><i className="flaticon-pinterest27"></i></a></li>
                           <li><a href="#!"><i className="flaticon-instagram13"></i></a></li>
                           <li><a href="#!"><i className="flaticon-linkedin21"></i></a></li>
                           <li><a href="#!"><i className="flaticon-twitter37"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  }
}
