import React from 'react';

export default class ContentCountLight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="counts-light-bg" className="counts e-block-ins e-block-dark e-bg-dark-texture" data-stellar-background-ratio="0.5">
         <div className="container pt-section" data-name="Counts" id="ptsection-three">
            <div className="count-container row">
               <div className="col-lg-3 col-sm-6 col-xs-12 count">
                  <div>
                     <div className="count-icon">
                        <i className="flaticon-photo246"></i>
                     </div>
                     <span className=".integers digit font-accident-two-bold">120</span>

                     <div className="count-text font-accident-one-bold">Awesome Gardens</div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6 col-xs-12 count">
                  <div>
                     <div className="count-icon">
                        <i className="flaticon-badges2"></i>
                     </div>
                     <span className=".integers digit font-accident-two-bold">650</span>

                     <div className="count-text font-accident-one-bold">Species of plants</div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6 col-xs-12 count">
                  <div>
                     <div className="count-icon">
                        <i className="flaticon-lights7"></i>
                     </div>
                     <span className=".integers digit font-accident-two-bold">9356</span>

                     <div className="count-text font-accident-one-bold">Square meters</div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6 col-xs-12 count">
                  <div>
                     <div className="count-icon">
                        <i className="flaticon-cups17"></i>
                     </div>
                     <span className=".integers digit font-accident-two-bold">100</span>

                     <div className="count-text font-accident-one-bold">Happy Clients</div>
                  </div>
               </div>
            </div>
            <div className="dividewhite2"></div>
         </div>
      </section>
    );
  }
}
