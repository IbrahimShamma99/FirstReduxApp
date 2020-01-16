import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

import { add, sub, dec, inc } from '../../constants/constants';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />{' '}
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />{' '}
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />{' '}
        <CounterControl
          label="Add 5"
          clicked={this.props.onADDCounter}
        />{' '}
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSUBCounter}
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

const mapDispatchToProps = dispatch =>{
    return {
      onIncrementCounter:() => dispatch({type:inc}),
      onDecrementCounter:() => dispatch({type:dec}),
      onADDCounter:() => dispatch({type:add,value:5}),
      onSUBCounter:() => dispatch({type:sub,value:5})


    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
