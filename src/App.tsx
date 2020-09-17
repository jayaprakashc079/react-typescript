import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoApp from './TodoApp';

const x = (a: number): number => {
  return 1;
}

function App() {
  return (
    <div >
      <header>
        <Router>
         <Route path='/' exact component={TodoApp}></Route>
         <Route path="/:Tab" exact component={TodoApp}></Route>
       </Router>
      </header>
    </div>
  );
}

export default App;
