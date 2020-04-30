import React from "react";
import "../styles/styles.scss";

const Currencies = () => {

  return (
    <section className="currencies">
      <div className="currencies--grid">
        <div className="currencies--grid--element">
          <h3 className="currencies--grid--element--title">DOLAR SOLIDARIO</h3>
          <p className="currencies--grid--element--paragrapth">89.38</p>
        </div>
        <div className="currencies--grid--element">
          <h3 className="currencies--grid--element--title">DÓLAR BLUE</h3>
          <p className="currencies--grid--element--paragrapth">116</p>
        </div>
        <div className="currencies--grid--element">
          <h3 className="currencies--grid--element--title">CONTADO CON LIQUI</h3>
          <p className="currencies--grid--element--paragrapth">113</p>
        </div>
        <div className="currencies--grid--element">
          <h3 className="currencies--grid--element--title">DÓLAR BOLSA</h3>
          <p className="currencies--grid--element--paragrapth">111</p>
        </div>
        <div className="currencies--grid--element">
          <h3 className="currencies--grid--element--title">DÓLAR BCO NACIÓN</h3>
          <p  className="currencies--grid--element--paragrapth">68.75</p>
        </div>
        <div className="currencies--grid--element">
          <h3 className="currencies--grid--element--title">RIESGO PAÍS</h3>
          <p  className="currencies--grid--element--paragrapth">3479</p>
        </div>
      </div>
      <div className="currencies--ad">
        <img src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ED5ADYJYIRA63DEWO4UZMBAC44.jpg" alt="ad"></img>
      </div>

    </section>
  );



}

export default Currencies;
