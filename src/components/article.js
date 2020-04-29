import React, { useState } from "react";
import "../styles/styles.scss";

function Article() {
  return (
    <article className="article">
      <h1 className="article--title">
        El Gobierno reconoció que más del 75% de los monotributistas está
        severamente afectado por la crisis del coronavirus
      </h1>
      <figure>
        <img
          src="https://www.infobae.com/new-resizer/hDdKku6O08qefVOcSFhaJyji6D8=/999x561/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/WM7AU2BW5BFEBKMVXSAUT26PNA.jpg"
          alt="article "
          className="article--image"
        />
      </figure>
      <button className="article--button button--primary">Por autor</button>
      <p className="article--paragraph">
        Así lo precisó un informe técnico del Ministerio de Desarrollo
        Productivo en base a información de la Administración Federal de
        Ingresos Públicos (AFIP). “La mayoría de los trabajadores independientes
        formales ha sufrido una caída notoria en su actividad. El 75% de los
        monotributistas y el 71% de los autónomos han visto recortada sus ventas
        y sus compras. Si bien esta población es ciertamente menos vulnerable
        que los trabajadores independientes informales, lejos está de estar
        ‘blindada’ ante la pandemia”, manifestó el texto elaborado por el
        Gobierno.
      </p>
      <p className="news--grid--article--paragraph">
        De acuerdo a la información oficial, en la Argentina hay alrededor de 5
        millones de trabajadores independientes —que no son asalariados en
        relación de dependencia— y que representan un 26% del total del empleo
        del país. Sin embargo, su universo es muy heterogéneo: por un lado,
        trabajadores independientes informales (cuentapropistas) que no están
        inscriptos ante la AFIP y con ingresos escasos; y por otro los
        formales..
      </p>
    </article>
  );
}

export default Article;
