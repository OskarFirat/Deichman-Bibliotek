import React, { Component } from 'react';
import Jumpbotron from './components/jumbotron/jumpotron.js';
import Anbefaling from './components/anbefaling/anbefaling.js';
import Nyheter from './components/nyheter/nyheter.js';
import SosialeArrangment from './components/sosialeArrangment/sosialeArrangment.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumpbotron/>
        <Anbefaling/>
        <Nyheter/>
        <SosialeArrangment/>
      </div>
    )
  }
}

