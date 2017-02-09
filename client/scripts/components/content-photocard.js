import React from 'react';

export default class Preloader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="photocard" className="cd-single-item e-block-null e-block-light e-bg-light-texture" data-stellar-background-ratio="0.5">
         <div className="cd-slider-wrapper">
            <ul className="cd-slider">
               <li className="selected"><img src="assets/custom/images/img-1-01.jpg" alt="Product Image 1"/></li>
               <li><img src="assets/custom/images/img-2-01.jpg" alt="Product Image 1"/></li>
               <li><img src="assets/custom/images/img-3-01.jpg" alt="Product Image 2"/></li>
            </ul>

            <ul className="cd-slider-navigation">
               <li><a href="#!" className="cd-prev inactive">Next</a></li>
               <li><a href="#!" className="cd-next">Prev</a></li>
            </ul>

            <a href="#!" className="cd-close">Close</a>
         </div>

         <div className="cd-item-info">
            <h3 className="font-accident-one-bold uppercase">Featured Photos</h3>

            <p className="small">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, tempor dictum purus quis, suscipit sagittis enim. Aliquam sollicitudin lorem est, fringilla fermentum risus pulvinar quis.
            </p>
            <div className="dividewhite2"></div>

            <button type="submit" className=" btn btn-lgr-str">Learn more</button>
         </div>
      </section>
    );
  }
}
