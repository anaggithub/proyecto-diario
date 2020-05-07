import React from "react";
import "./styles/styles.scss";
import Home from "./pages/home";
import ArticleDetail from "./pages/article-detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/articledetail" component={ArticleDetail} />
    </Router>
  );
}

export default App;
