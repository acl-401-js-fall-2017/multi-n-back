import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PostGame extends PureComponent {
  render() {
    return (
      <div className="post-game">
        <h3>PostGame component</h3>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(PostGame);