// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increase, decrease, refresh } from "./reduxCount/counterSlice";

// function CounterFeature(props) {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const handleInc = () => {
//     const action = increase();
//     dispatch(action);
//   };

//   const handleDecr = () => {
//     const action = decrease();
//     dispatch(action);
//   };
  
//   const handleRefr = () => {
//     const action = refresh();
//     dispatch(action);
//   };

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>Counter {counter}</p>
//       <button onClick={() => handleInc()}>Increase</button>
//       <button onClick={() => handleDecr()}>Decrease</button>
//       <button onClick={() => handleRefr()}>Refresh</button>
//     </div>
//   );
// }

// export default CounterFeature;

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease,refresh } from './reduxCount/counterSlice';

export class CounterFeature extends Component {
  
  handleInc = () => {
    this.props.increase()
  };
  
  handleDecr = () => {
    this.props.decrease();
  };
  
  handleRefr = () => {
    this.props.refresh();

  };
  render() {
    return (
      <div>
      <h1>Count</h1>
      <p>Count {this.props.counter}</p>
      <button onClick={() => this.handleInc()}>Increase</button>
      <button onClick={() => this.handleDecr()}>Decrease</button>
      <button onClick={() => this.handleRefr()}>Refresh</button>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch)=>({
  refresh:payload=>dispatch(refresh(payload)),
  increase:payload=>dispatch(increase(payload)),
  decrease:payload=>dispatch(decrease(payload))
})




export default connect(mapStateToProps, mapDispatchToProps)(CounterFeature)

