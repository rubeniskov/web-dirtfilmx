import React from 'react';

export default class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="e-bg-skin">
         <a className="gm-toggle-link">
            <div className="gm-toggle">
               <i className="fa fa-map-marker"></i>
            </div>
         </a>
         <div id="gm-panel">
            <div id="google-map" className="bigmap"></div>
         </div>
      </div>
    );
  }
}
