import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button
      onClick={() => dispatch({ type: 'ADD' })}
    >
      +1
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE' })}
    >
      - 1
    </button>
    <button
      onClick={() => dispatch({ type: 'RESET' })}
    >
      reset
    </button>
    <button
      onClick={() => dispatch({ type: 'ADD_10' })}
    >

      + 10
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE_10' })}
    >
      - 10
    </button>
  </div>
);

export default connect(mapStateToProps)(CounterContainer);