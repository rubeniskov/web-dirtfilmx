import React from 'react';

export default class ContentHorizontalTimeline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="horiz-timeline" className="e-block e-block-light horiz-timeline-light" data-stellar-background-ratio="0.5" >
         <div className="container cd-horizontal-timeline">

            <div className="text-center">
               <h3 className="font-accident-one-bold uppercase white">My Landscape Design Lecture Schedule</h3>
               <h5 className="font-accident-one-bold title-light uppercase hovercolor">Working hard and making the success</h5>
               <div className="dividewhite4"></div>
            </div>

            <div className="dividewhite8"></div>

            <div className="timeline">
               <div className="events-wrapper">
                  <div className="events">
                     <ol>
                        <li><a href="#0" data-date="16/01/2014" className="selected">16 Jan</a></li>
                        <li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
                        <li><a href="#0" data-date="20/04/2014">20 Mar</a></li>
                        <li><a href="#0" data-date="20/05/2014">20 May</a></li>
                        <li><a href="#0" data-date="09/07/2014">09 Jul</a></li>
                        <li><a href="#0" data-date="30/08/2014">30 Aug</a></li>
                        <li><a href="#0" data-date="15/09/2014">15 Sep</a></li>
                        <li><a href="#0" data-date="01/11/2014">01 Nov</a></li>
                        <li><a href="#0" data-date="10/12/2014">10 Dec</a></li>
                        <li><a href="#0" data-date="19/01/2015">29 Jan</a></li>
                        <li><a href="#0" data-date="03/03/2015">3 Mar</a></li>
                     </ol>

                     <span className="filling-line" aria-hidden="true"></span>
                  </div>
               </div>

               <ul className="cd-timeline-navigation">
                  <li><a href="#0" className="prev inactive">Prev</a></li>
                  <li><a href="#0" className="next">Next</a></li>
               </ul>
            </div>

            <div className="events-content">
               <ol>
                  <li className="selected" data-date="16/01/2014">
                     <h2 className="font-accident-one-bold">New York</h2>
                     <em>January 16th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="28/02/2014">
                     <h2 className="font-accident-one-bold">Berlin</h2>
                     <em>February 28th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="20/04/2014">
                     <h2 className="font-accident-one-bold">Frankfurt am Mein</h2>
                     <em>March 20th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="20/05/2014">
                     <h2 className="font-accident-one-bold">London</h2>
                     <em>May 20th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="09/07/2014">
                     <h2 className="font-accident-one-bold">Moscow</h2>
                     <em>July 9th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="30/08/2014">
                     <h2 className="font-accident-one-bold">Kiev</h2>
                     <em>August 30th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="15/09/2014">
                     <h2 className="font-accident-one-bold">Athens</h2>
                     <em>September 15th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="01/11/2014">
                     <h2 className="font-accident-one-bold">Istambul</h2>
                     <em>November 1st, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="10/12/2014">
                     <h2 className="font-accident-one-bold">Antverpen</h2>
                     <em>December 10th, 2014</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="19/01/2015">
                     <h2 className="font-accident-one-bold">Oslo</h2>
                     <em>January 19th, 2015</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>

                  <li data-date="03/03/2015">
                     <h2 className="font-accident-one-bold">Bejing</h2>
                     <em>March 3rd, 2015</em>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                     </p>
                  </li>
               </ol>
            </div>

         </div>
      </section>
    );
  }
}
