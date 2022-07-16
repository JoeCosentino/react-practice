import React from "react";
import Counter from './components/Counter'
import CounterHooks from './components/CounterHooks'

function App() {

  return (
    <>
      Counter
      <Counter initialCount={0}></Counter>
      CounterHooks
      <CounterHooks initialCount={0}></CounterHooks>
    </>
  ) 
}

export default App;
