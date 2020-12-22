import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./Component/Join";
import Chat from "./Component/Chat";

const App = () => (
  <Router>
    <Route path={"/"} exact component={Join} />
    <Route path={"/chat"} exact component={Chat} />
  </Router>
);

export default App;
//33min