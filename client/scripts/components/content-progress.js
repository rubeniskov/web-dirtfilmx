import React from 'react';

export default class ContentProgress extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="progress" className="e-block-ins e-block-light e-bg-light-texture" data-stellar-background-ratio="0.5">
         <div className="container pt-section" data-name="Success" id="ptsection-five">
            <div className="row">

               <div className="col-md-3 text-center">
                  <div className="progressbar" data-animate="false">
                     <div className="circle font-accident-one-normal fontcolor-regular" data-percent="12.5">
                        <div></div>
                        <h4 className="font-accident-one-normal uppercase">Design</h4>
                        <p className="small">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros...
                        </p>
                     </div>
                  </div>
                  <div className="divider-dynamic"></div>
               </div>
               <div className="col-md-3 text-center">
                  <div className="progressbar" data-animate="false">
                     <div className="circle font-accident-one-normal fontcolor-regular" data-percent="24.5">
                        <div></div>
                        <h4 className="font-accident-one-normal uppercase">Flowers</h4>
                        <p className="small">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros...
                        </p>
                     </div>
                  </div>
                  <div className="divider-dynamic"></div>
               </div>
               <div className="col-md-3 text-center">
                  <div className="progressbar" data-animate="false">
                     <div className="circle font-accident-one-normal fontcolor-regular" data-percent="39.5">
                        <div></div>
                        <h4 className="font-accident-one-normal uppercase">Landscape</h4>
                        <p className="small">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros...
                        </p>
                     </div>
                  </div>
                  <div className="divider-dynamic"></div>
               </div>
               <div className="col-md-3 text-center">
                  <div className="progressbar" data-animate="false">
                     <div className="circle font-accident-one-normal fontcolor-regular" data-percent="72.5">
                        <div></div>
                        <h4 className="font-accident-one-normal uppercase">Aqua</h4>
                        <p className="small">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros...
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
