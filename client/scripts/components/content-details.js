import React from 'react';

export default class ContentDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="details" className="m-details e-block e-block-skin" data-stellar-background-ratio="0.5">
         <div className="container pt-section" data-name="Details" id="ptsection-two">

            <div className="container text-center">
               <h3 className="font-accident-one-bold uppercase fontcolor-regular">who am i</h3>
               <h5 className="font-accident-one-bold title-light uppercase hovercolor">Working hard and making the success</h5>
               <div className="dividewhite4"></div>
               <p className="small fontcolor-regular">
                  Customize your website as you want using different colors and 100% free fonts. Build it from pieces and
                  blocks as simple as Lego. <br />
                  Electronic Website Template is fully responsive, looks and works perfect on any device.
               </p>
            </div>

            <div className="dividewhite8"></div>

            <div className="row">
               <div className="col-md-3 infoblock">
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-2"><i className="flaticon-photo246"></i></div>
                     <div className="col-lg-9 col-md-8 col-sm-10">
                        <h5 className="font-accident-one-bold uppercase">Creative</h5>

                        <div className="dividewhite1"></div>
                        <p className="small">
                           For extreme size changes, we may want to change the layout altogether, either through a
                           separate style sheet or, more efficiently, through a CSS media query.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 infoblock">
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-2"><i className="flaticon-cups17"></i></div>
                     <div className="col-lg-9 col-md-8 col-sm-10">
                        <h5 className="font-accident-one-bold uppercase">Self-motivated</h5>

                        <div className="dividewhite1"></div>
                        <p className="small">
                           It is possible to shrink things proportionally and rearrange elements as necessary to make
                           everything fit (reasonably well) as a screen gets smaller.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 infoblock">
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-2"><i className="flaticon-profile5"></i></div>
                     <div className="col-lg-9 col-md-8 col-sm-10">
                        <h5 className="font-accident-one-bold uppercase">Punctual</h5>

                        <div className="dividewhite1"></div>
                        <p className="small">
                           Below we have a few examples of responsive Web design in practice today. For many of these
                           websites, there is more variation.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 infoblock">
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-2"><i className="flaticon-stars64"></i></div>
                     <div className="col-lg-9 col-md-8 col-sm-10">
                        <h5 className="font-accident-one-bold uppercase">Multitask</h5>

                        <div className="dividewhite1"></div>
                        <p className="small">
                           One major problem that needs to be solved with responsive Web design is working with images.
                           There are a number of techniques.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
