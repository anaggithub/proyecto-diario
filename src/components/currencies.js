import React from "react";
import "../styles/styles.scss";

const Currencies = () => {

    const currencies = [
        {
            dolar: "DOLAR SOLIDARIO",
            valor: "89.38"
        },
        {
            dolar: "DÓLAR BLUE",
            valor: "106"
        },
        {
            dolar: "CONTADO CON LIQUI",
            valor: "113"
        },
        {
            dolar: "DÓLAR BOLSA",
            valor: "111"
        },
        {
            dolar: "DÓLAR BCO NACIÓN",
            valor: "68.75"
        },
        {
            dolar: "RIESGO PAÍS",
            valor: "3479"
        },
    ]

    const renderCurrencies = () => {
        let newArray = currencies.map(e => <Currency dolar={e.dolar} valor={e.valor} key={e.dolar + 1}/>)
        return newArray
    }

    return (
        <section className="currencies">
            <div className="currencies--grid">
                {renderCurrencies()}
            </div>
            <div className="currencies--ad">
                <img src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ED5ADYJYIRA63DEWO4UZMBAC44.jpg" alt="ad"></img>
            </div>

        </section>
    );




}

const Currency = ({ dolar, valor }) => {
    return (
        <div className="currency">
            <h3 className="currency--title">{dolar}</h3>
            <p className="currency--paragraph">{valor}</p>
        </div>
    )
}
export default Currencies;
