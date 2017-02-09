import React from 'react';

export default class ContentTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="testmonials-light" className="e-block-ins e-block-skin" data-stellar-background-ratio="0.5">

         <div className="container pt-section" data-name="Testmonials" id="ptsection-seven">

            <div className="text-center">
               <h3 className="font-accident-one-bold uppercase">Testmonials</h3>
               <h5 className="font-accident-one-bold title-light uppercase hovercolor">What my happy clients say</h5>
               <div className="dividewhite8"></div>
            </div>

            <div className="row">
               <div className="col-md-4">
                  <div className="row">
                     <div className="col-xs-3">
                        <img src="assets/custom/images/userpic04.jpg" alt="Rachel James Johnes" className="img-responsive img-circle author-userpic"/>
                     </div>
                     <div className="col-xs-9">
                        <h5 className="font-accident-one-bold text-left uppercase">Hans Zimmer</h5>
                        <p className="small hovercolor">Apple Inc.</p>
                        <p className="text-left small">
                           With more devices come varying screen resolutions, definitions and orientations. New devices
                           with new screen sizes are being developed every day, and each of these devices may be able...
                        </p>
                     </div>
                  </div>
                  <div className="divider-dynamic"></div>
               </div>
               <div className="col-md-4">
                  <div className="row">
                     <div className="col-xs-3">
                        <img src="assets/custom/images/userpic02.jpg" alt="Rachel James Johnes" className="img-responsive img-circle author-userpic"/>
                     </div>
                     <div className="col-xs-9">
                        <h5 className="font-accident-one-bold text-left uppercase">Mario Quinn</h5>
                        <p className="small hovercolor">Adobe</p>
                        <p className="text-left small">
                           With more devices come varying screen resolutions, definitions and orientations. New devices
                           with new screen sizes are being developed every day, and each of these devices
                        </p>
                     </div>
                  </div>
                  <div className="divider-dynamic"></div>
               </div>
               <div className="col-md-4">
                  <div className="row">
                     <div className="col-xs-3">
                        <img src="assets/custom/images/userpic03.jpg" alt="Rachel James Johnes" className="img-responsive img-circle author-userpic"/>
                     </div>
                     <div className="col-xs-9">
                        <h5 className="font-accident-one-bold text-left uppercase">Karl Romm</h5>
                        <p className="small hovercolor">BMW</p>
                        <p className="text-left small">
                           With more devices come varying screen resolutions, definitions and orientations. New devices
                           with new screen sizes are being developed every day, and each of these devices
                        </p>
                     </div>
                  </div>
                  <div className="divider-dynamic"></div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
