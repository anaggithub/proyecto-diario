import React from "react";
import "./index.scss"

const DollarRate = ({ rates = [] }) => {

    return (
        <section className="dollar-rate">
            <div className="dollar-rate--grid">
                {
                    rates.map(e => {
                        return <div className="rate" key={e.dolar +1}>
                            <h3 className="rate--title">{e.dolar}</h3>
                            <p className="rate--paragraph">{e.valor}</p>
                        </div>
                    })
                }
            </div>
            <div className="dollar-rate--ad">
                <img className="dollar-rate--ad--image" src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ED5ADYJYIRA63DEWO4UZMBAC44.jpg" alt="ad"></img>
            </div>

        </section>
    );
}

export default DollarRate;
