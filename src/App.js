import React from "react";
import Home from "./pages/home";
import ArticleDetail from "./pages/article-detail";
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/articledetail" component={ArticleDetail} />
    </Router>
  );
}

export default App;
