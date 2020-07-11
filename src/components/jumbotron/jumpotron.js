import React, { Component } from 'react';
import './jumpotron.css';


export default class Jumbotron extends Component {
    render() {

        return (
            <div>

                <div className="jumbotron" alt='Bilde av nye Deciman Biblotek på Bjørvika'>
                <div id="rammeJumbotronTekst">
                    <h3 id="jumbotronOverskrift">ÅPNING</h3>
                    <h1 id="jumbotronViktigTekst">Deichman Bjørvika <br/>åpner torsdag <br/>18. juni 2020</h1>
                    <p id="jumbotronBrodtekst">Kl. 17.00 blir det først en kort, lukket seremoni som du kan se live på Facebook-siden vår. Så åpner vi dørene for publikum. Vi gleder oss til å vise fram Oslos nye hovedbibliotek! </p>
                    <p id="jumbotronLesmer">Les mer</p>
                </div>
                </div>
                <div id="jumpotronResponsiv">
                <div className="container">
                    <h3 id="jumbotronOverskrift">ÅPNING</h3>
                    <h1 id="jumbotronViktigTekst">Deichman Bjørvika åpner torsdag 18. juni 2020</h1>
                    <p id="jumbotronBrodtekst">Kl. 17.00 blir det først en kort, lukket seremoni som du kan se live på Facebook-siden vår. Så åpner vi dørene for publikum. Vi gleder oss til å vise fram Oslos nye hovedbibliotek! </p>
                    <p id="jumbotronLesmer">Les mer</p>
                </div>
                </div>
                
            </div>
        )
    }
}
