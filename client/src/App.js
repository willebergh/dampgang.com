import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/views/Landing";
import Members from "./components/views/Members";
import Servers from "./components/views/Servers";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/servers" component={Servers} />
    </Router>
  );
}

export default App;
