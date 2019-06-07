import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/views/Landing";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Members from "./components/views/Members";
import Servers from "./components/views/Servers";

function App() {
  return (
    <Router>

      <Route exact path="/" component={Landing} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/members" component={Members} />
      <Route exact path="/servers" component={Servers} />

    </Router>
  );
}

export default App;
