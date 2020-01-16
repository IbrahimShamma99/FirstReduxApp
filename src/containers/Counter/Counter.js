import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

import { add, sub, dec, inc ,store,remove} from '../../constants/constants';

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
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Results</button>
        <ul>
          { this.props.results !== undefined ?
            this.props.results.map((EL,id)=>{
            return <li onClick={(id)=>this.onDeleteResult(id)}>{EL.value}</li>
            }):null
          }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
    return {
      ctr:state.ctr.counter ,
      results:state.res.results
    };
};

const mapDispatchToProps = dispatch =>{
    return {
      onIncrementCounter:() => dispatch({type:inc}),
      onDecrementCounter:() => dispatch({type:dec}),
      onADDCounter:() => dispatch({type:add,value:5}),
      onSUBCounter:() => dispatch({type:sub,value:5}),
      onStoreResult:(countVal) => dispatch({type:store,value:countVal}),
      onDeleteResult:(id) => dispatch({ResultElID:id,type:remove,})

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
