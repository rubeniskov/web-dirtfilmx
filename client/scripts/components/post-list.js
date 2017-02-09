import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.request = axios.get('/api/v1/post')
        .then(res => {
          this.setState({
            posts: res.data
          });
        })
  }
  componentWillUnmount() {
    this.request.abort();
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post =>
            <li key={post._id}>{post.name}</li>
          )}
        </ul>
      </div>
    );
  }
}
