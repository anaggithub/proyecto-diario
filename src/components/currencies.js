import React, { useState } from "react";
import "../styles/styles.scss";

function Currencies() {
  return (
    <section className="currencies">
      <div className="currencies--container">
        <div className="currencies--container--grid">
          <div className="currencies--container--grid--element">1</div>
          <div className="currencies--container--grid--element">2</div>
          <div className="currencies--container--grid--element">3</div>
          <div className="currencies--container--grid--element">4</div>
          <div className="currencies--container--grid--element">5</div>
          <div className="currencies--container--grid--element">6</div>
        </div>
        <div className="currencies--container--ad">AD</div>
      </div>
    </section>
  );
}

export default Currencies;
