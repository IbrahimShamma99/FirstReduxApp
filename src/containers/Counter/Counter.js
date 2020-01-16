import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

// import {} from '../../store/reducer';

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
      onIncrementCounter:() => dispatch({type:"INCREMENT"}),
      onDecrementCounter:() => dispatch({type:"DECREMENT"}),
      onADDCounter:() => dispatch({type:"ADD",value:5}),
      onSUBCounter:() => dispatch({type:"SUB",value:5})


    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
