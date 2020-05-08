import React from "react";
import Home from "./pages/home/index";
import ArticleDetail from "./pages/article-detail/index";
import Contact from "./pages/contact/index";
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/articledetail" component={ArticleDetail} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
