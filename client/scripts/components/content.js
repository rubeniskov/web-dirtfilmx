import React from 'react';

import ContentDetails from './content-details';
import ContentCountLight from './content-count-light';
import ContentPortfolio from './content-portfolio';
import ContentProgress from './content-progress';
import ContentVerticalTimeline from './content-vertical-timeline';
import ContentHorizontalTimeline from './content-horizontal-timeline';
import ContentBlog from './content-blog';
import ContentPhotocard from './content-photocard';
import ContentTestimonials from './content-testimonials';
import ContentClients from './content-clients';
import ContentFeedback from './content-feedback';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="content">
        <ContentDetails></ContentDetails>
        <ContentCountLight></ContentCountLight>
        <ContentPortfolio></ContentPortfolio>
        <ContentProgress></ContentProgress>
        <ContentVerticalTimeline></ContentVerticalTimeline>
        <ContentHorizontalTimeline></ContentHorizontalTimeline>
        <ContentBlog></ContentBlog>
        <ContentPhotocard></ContentPhotocard>
        <ContentTestimonials></ContentTestimonials>
        <ContentClients></ContentClients>
        <ContentFeedback></ContentFeedback>
      </div>
    );
  }
}
