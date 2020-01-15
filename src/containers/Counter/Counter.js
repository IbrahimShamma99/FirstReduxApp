import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

// import {} from '../../store/reducer';

class Counter extends Component {

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />{' '}
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler('inc')}
        />{' '}
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler('dec')}
        />{' '}
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler('add', 5)}
        />{' '}
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler('sub', 5)}
        />{' '}
      </div>
    );
  }
};

const mapStateToProps = state => {
    return {
      ctr:state.counter  
    };
};

export default connect(mapStateToProps)(Counter);
