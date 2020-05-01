import React from "react";
import "./styles/styles.scss";
import Header from "./components/header";
import Currencies from "./components/currencies";
import News from "./components/news/news";
import Footer from "./components/footer";

function App() {

  return (
    <div className="container">
      <Header />
      <body>
        <Currencies />
        <News />
        <Footer />
      </body>
    </div>
  );
}

export default App;
