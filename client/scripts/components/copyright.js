import React from 'react';

export default class Copyright extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="copyrights-wrapper" className="e-bg-skin">
         <div className="container">
            <div className="copyright">
               <div className="copy-attrs"> © 2016 <a href="http://neuethemes.net" target="_blank">Neuethemes</a>. All rightsreserved
               </div>
               <div className="copy-link">
                  <a href="http://neuethemes.net" target="_blank">Legal Notice</a>
               </div>
               <div className="copy-link">
                  <a href="http://neuethemes.net" target="_blank">Terms & Conditions</a>
               </div>
            </div>
         </div>
      </div>
    );
  }
}
