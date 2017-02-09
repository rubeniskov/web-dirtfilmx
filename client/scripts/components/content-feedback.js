import React from 'react';

export default class Preloader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="feedback" className="feedback e-block e-block-light feedback-light" data-stellar-background-ratio="0.8">
         <div className="container pt-section text-center" data-name="Feedback" id="ptsection-eight">
            <div className="row">
               <div className="col-md-12">
                  <h3 className="font-accident-one-bold uppercase white">Want to hire me?</h3>
                  <h5 className="font-accident-one-bold title-light uppercase hovercolor">drop me a line and by my happy client</h5>
                  <div className="dividewhite8"></div>
               </div>
               <div className="col-md-12 dividewhite4"></div>
               <div className="col-md-2"></div>
               <div className="col-md-8 e-centered">
                  <div className="dividewhite2"></div>
                  <div id="form-messages"></div>
                  <form id="ajax-contact" method="post" action="assets/custom/php/form.php" className="wpcf7-form">
                     <div className="field">
                        <input type="text" id="name" name="name" placeholder="Name" required/>
                     </div>

                     <div className="field">
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                     </div>

                     <div className="field">
                        <textarea id="message" name="message" placeholder="Message" rows="7" cols="30"  required></textarea>
                     </div>

                     <div className="dividewhite2"></div>

                     <div className="field">
                        <button type="submit" className="btn btn-lg btn-grey-str">Send message</button>
                     </div>
                  </form>
               </div>
               <div className="col-md-2"></div>
               <div className="col-md-12 divider-dynamic"></div>
            </div>
         </div>
      </section>
    );
  }
}
