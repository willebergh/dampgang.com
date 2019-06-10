import React, { Component } from 'react';
import { connect } from "react-redux";
import { checkAuth } from "./actions/authActions";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/views/Landing";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Members from "./components/views/Members";
import Servers from "./components/views/Servers";

import Test from "./components/views/Test";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentWillMount() {
    this.props.checkAuth(() => console.log("Auth Checked!"))
  }

  render() {
    return (
      <Router>

        <Route exact path="/test" component={Test} />

        <Route exact path="/" component={Landing} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/members" component={Members} />
        <Route exact path="/servers" component={Servers} />

      </Router >
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { checkAuth })(App);
