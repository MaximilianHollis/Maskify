import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './Elements/Navbar/Navbar';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Demo from './Pages/Demo'
import Todos from './Pages/Todos';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Footer from './Elements/Footer/Footer'
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './theme.js';


function App() {
  return (
    <Router>
      <Theme >
        <Navbar />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <UnPrivateRoute path="/login" component={Login} />
          <UnPrivateRoute path="/register" component={Register} />
          <UnPrivateRoute path="/demo" component={Demo} />
          <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
          <PrivateRoute path="/dashboard" roles={["user", "admin"]} component={Dashboard} />
          <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
        </Switch>
        <Footer />
      </Theme>
    </Router>
  );
}

export default App;
