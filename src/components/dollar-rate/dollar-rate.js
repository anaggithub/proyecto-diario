import React from "react";
import "./dollar-rate.scss"

const DollarRate = () => {

    const dollarRate = [
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

    const renderRates = () => {
        let newArray = dollarRate.map(e => <Rate dolar={e.dolar} valor={e.valor} key={e.dolar + 1} />)
        return newArray
    }

    return (
        <section className="dollar-rate">
            <div className="dollar-rate--grid">
                {renderRates()}
            </div>
            <div className="dollar-rate--ad">
                <img className="dollar-rate--ad--image" src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ED5ADYJYIRA63DEWO4UZMBAC44.jpg" alt="ad"></img>
            </div>

        </section>
    );
}

const Rate = ({ dolar, valor }) => {
    return (
        <div className="rate">
            <h3 className="rate--title">{dolar}</h3>
            <p className="rate--paragraph">{valor}</p>
        </div>
    )
}
export default DollarRate;
