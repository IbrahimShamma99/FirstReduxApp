import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

import { add, sub, dec, inc ,store, remove  } from '../../constants/constants';

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
        <hr/>
        <button onClick>Store Results</button>
        <ul>
          {this.props.results !== undefined?
          this.props.results.map((element)=>{
            return <li>{element}</li>
          }):null           
          }
        </ul>
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
      onSUBCounter:() => dispatch({type:sub,value:5}),
      onStoreResult:() => dispatch({type:store}),
      onDeleteResult:() => dispatch({type:remove})

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
