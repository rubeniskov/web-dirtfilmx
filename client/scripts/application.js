import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.request = axios.get('/api/v1/posts')
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
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
