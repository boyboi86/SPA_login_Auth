import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        Items
        {/*{ this.prop.children }*/}
      </div>
    );
  }
}
