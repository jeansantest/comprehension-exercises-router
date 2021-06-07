import React, { Component } from 'react';

export default class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        {user.username === 'joao' && user.password === '1234' ? (
          <div>Welcome {user.username}!</div>
        ) : (
          alert('Access denied')
        )}
      </div>
    );
  }
}
