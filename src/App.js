import React from "react";
import "./styles/styles.scss";
import Header from "./components/header/header";
import Currencies from "./components/currencies";
import News from "./components/news/news";
import Footer from "./components/footer";

function App() {

  return (

    <body className="container">
      <Header />
      <Currencies />
      <News />
      <Footer />
    </body>

  );
}

export default App;
