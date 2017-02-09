import React from 'react';

export default class ContentVerticalTimeline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="timeline-vertical" className="e-block e-block-skin" data-stellar-background-ratio="0.5">
         <div className="container pt-section" data-name="Timeline" id="ptsection-six">

            <div className="text-center">
               <h3 className="font-accident-one-bold uppercase">My Professional Timeline</h3>
               <h5 className="font-accident-one-bold title-light uppercase hovercolor">Working hard and making the success</h5>
               <div className="dividewhite4"></div>
               <p className="small">
               Customize your website as you want using different colors and 100% free fonts. Build it from pieces and
               blocks as simple as Lego. <br/>
               Electronic Website Template is fully responsive, looks and works perfect on any device.
               </p>
            </div>

            <div className="dividewhite8"></div>

            <ul className="timeline-vert timeline-light">
               <li>
                  <div className="timeline-badge primary"><i className="flaticon-badges2"></i></div>
                  <div className="timeline-panel">
                     <p className="timeline-time fontcolor-invert"><i className="glyphicon glyphicon-time"></i> Aug 2010 - Nov 2012</p>
                     <div className="timeline-photo timeline-bg01-01"></div>
                     <div className="timeline-heading">
                        <h3 className="font-accident-two-bold uppercase">Harvard University-<br/>Graduate School Of Design</h3>
                        <h6 className="uppercase hovercolor">Junior Designer</h6>
                     </div>
                     <div className="dividewhite1"></div>
                     <div className="timeline-body">
                        <p className="small">Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                     </div>
                  </div>
               </li>
               <li className="timeline-inverted">
                  <div className="timeline-badge success"><i className="flaticon-cups17"></i></div>
                  <div className="timeline-panel">
                     <p className="timeline-time fontcolor-invert"><i className="glyphicon glyphicon-time"></i> March 2013 - Jan 2014</p>
                     <div className="timeline-photo timeline-bg02-01"></div>
                     <div className="timeline-heading">
                        <h3 className="font-accident-two-bold uppercase">Leo Burnett – Moscow</h3>
                        <h6 className="uppercase hovercolor">Senior Designer</h6>
                     </div>
                     <div className="dividewhite1"></div>
                     <div className="timeline-body">
                        <p className="small">Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                     </div>
                  </div>
               </li>
               <li>
                  <div className="timeline-badge danger"><i className="flaticon-lights7"></i></div>
                  <div className="timeline-panel">
                     <p className="timeline-time fontcolor-invert"><i className="glyphicon glyphicon-time"></i> Jul 2014 - Sep 2015</p>
                     <div className="timeline-photo timeline-bg03-01"></div>
                     <div className="timeline-heading">
                        <h3 className="font-accident-two-bold uppercase">Google - Dublin Office</h3>
                        <h6 className="uppercase hovercolor">Head of UI/UX Department</h6>
                     </div>
                     <div className="dividewhite1"></div>
                     <div className="timeline-body">
                        <p className="small">Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                     </div>
                  </div>
               </li>
               <li className="timeline-inverted info">
                  <div className="timeline-badge warning"><i className="flaticon-stars64"></i></div>
                  <div className="timeline-panel">
                     <p className="timeline-time fontcolor-invert"><i className="glyphicon glyphicon-time"></i> Sep 2015 - ...</p>
                     <div className="timeline-photo timeline-bg04-01"></div>
                     <div className="timeline-heading">
                        <h3 className="font-accident-two-bold uppercase">Apple head Office</h3>
                        <h6 className="uppercase hovercolor">Head of UI/UX Department</h6>
                     </div>
                     <div className="dividewhite1"></div>
                     <div className="timeline-body">
                        <p className="small">Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                     </div>
                  </div>
               </li>

            </ul>

            <div className="text-center">
               <a href="#!" className="btn btn-lgr-str">Learn More</a>
            </div>

         </div>
      </section>
    );
  }
}
