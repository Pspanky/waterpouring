import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './style.scss';

const Welcome = (props) => {
  return <div>Welcome</div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  console.log('asd');
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
