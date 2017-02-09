import React from 'react';

export default class ContentPortfolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="portfolio" className="portfolio-hp e-block e-block-skin" data-stellar-background-ratio="0.5">
         <div className="pt-section" data-name="Portfolio" id="ptsection-four">

            <div className="container text-center">
               <h3 className="font-accident-one-bold uppercase">Portfolio</h3>
               <h5 className="font-accident-one-bold title-light uppercase hovercolor">Working hard and making the success</h5>
               <div className="dividewhite4"></div>
               <p className="small">
                  Customize your website as you want using different colors and 100% free fonts. Build it from pieces and
                  blocks as simple as Lego. <br/>
                  Electronic Website Template is fully responsive, looks and works perfect on any device.
               </p>
            </div>

            <div className="dividewhite8"></div>
            <div id="isotope-filters" className="port-filter port-filter-light container text-center">
               <ul>
                  <li><a href="#cat1" data-filter="*">All</a></li>
                  <li><a href="#cat2" data-filter=".villas">Villas</a></li>
                  <li><a href="#cat3" data-filter=".castles">Castles</a></li>
                  <li><a href="#cat4" data-filter=".aqua">Aqua</a></li>
               </ul>
            </div>
            <div className="dividewhite4"></div>
            <div className="grid container text-center">

               <div id="posts" className="row popup-container">

                  <div className="grid-item villas col-sm-12">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/00-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/00-01.jpg" className="img-responsive'" alt="img11"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Music <span>Sounds</span></h3>
                                 <p>#web #seo </p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>

                  <div className="grid-item villas col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/01-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/01-01.jpg" className="img-responsive'" alt="img11"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Music <span>Sounds</span></h3>
                                 <p>#web #seo </p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item grid-sizer villas aqua col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/02-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/02-01.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Fire <span>Burns</span></h3>
                                 <p>#web #seo</p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item castles aqua col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/03-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/03-01.jpg" className="img-responsive" alt="img11"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Ice <span>Cold</span></h3>
                                 <p>#marketing</p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item castles aqua col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/04-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/04-01.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Everybody <span>Lies</span></h3>
                                 <p>#marketing</p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item villas castles col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/05-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/05-01.jpg" className="img-responsive" alt="img11"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Music <span>Sounds</span></h3>
                                 <p>#web #seo </p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item uncategorized col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/06-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/06-01.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Fire <span>Burns</span></h3>
                                 <p>#web #seo</p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item villas col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/07-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/07-01.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Fire <span>Burns</span></h3>
                                 <p>#web #seo</p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item castles aqua col-lg-3 col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="effect-goliath">
                           <div className="popup-call">
                              <a href="assets/custom/images/magazine/08-01.jpg" className="gallery-item"><i className="flaticon-plus14"></i></a>
                           </div>
                           <img src="assets/custom/images/magazine/08-01.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="fig-description">
                                 <h3>Fire <span>Burns</span></h3>
                                 <p>#web #seo</p>
                              </div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>

               </div>

            </div>

         </div>
      </section>
    );
  }
}
