import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>Vending Machine</h1>
        <ul>
          <li>
            <Link to="/snack1">Snack 1</Link>
          </li>
          <li>
            <Link to="/snack2">Snack 2</Link>
          </li>
          <li>
            <Link to="/snack3">Snack 3</Link>
          </li>
        </ul>
        <Route path="/snack1" component={Snack1} />
        <Route path="/snack2" component={Snack2} />
        <Route path="/snack3" component={Snack3} />
      </div>
    );
  }
}

export default VendingMachine;
