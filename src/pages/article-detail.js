import React from "react"
import "./../styles/styles.scss";
import {LayoutNews} from "../components/layouts";
import Article from "../components/news/article";

const ArticleDetail = () => {

    return (
        <LayoutNews>
            <Article
                title="En plena cuarentena, creció el tránsito y se observaron largas filas en los accesos a la ciudad de Buenos Aires"
                author="Infobae"
                image="https://www.infobae.com/new-resizer/SYq9bldi8-Cur0kpyr70jIjWyIM=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/LVHKMQBXUVARPCDLLJZR4EUQ3U.jpg"
                content={`Semana a semana, la ciudad de Buenos Aires registra un aumento gradual en el tránsito de las avenidas y calles porteñas, como un síntoma de la mayor liberación de actividades económicas y un relajamiento social de la cuarentena. Este miércoles no fue la excepción: desde temprano, en los accesos se detectaron importantes demoras para ingresar a la Capital Federal, con largas filas de coches en los puestos de control.

                Ayer, durante el comienzo de la primera semana de mayo, unos 49.200 autos circularon por los ingresos a la Ciudad de Buenos Aires. El dato representa el 79% de vehículos que transitan por esos pasos en un día habitual, antes de que se decretara el aislamiento obligatorio por el coronavirus.
                
                Por su lado, en las autopistas porteñas se relevó ayer un número menor en comparación con el de los accesos, aunque es relativamente alto: la circulación fue del 69% en comparación a una jornada normal sin cuarentena, cuando transitan 33.900 autos.
                
                La evaluación del tránsito es realizado por el sistema de Anillo Digital que se despliega a lo largo de la General Paz y une la Capital Federal con distintos partidos bonaerenses; también en la AU Buenos Aires-La Plata.`}
                description="Miles de vehículos particulares salieron a la calle este miércoles, con un 12% de mayor caudal en contraste con la semana pasada. En el transporte público continúa la suba gradual de pasajeros, pero se mantienen los números bajos en la demanda de los servicios" />
        </LayoutNews>
    );
}

export default ArticleDetail;
