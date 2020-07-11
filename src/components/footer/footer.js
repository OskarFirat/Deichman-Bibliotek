import React, { Component } from 'react';
import './footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faInstagram, faYoutube);

export default class footer extends Component {
    componentDidMount() {          
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("active1");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
            });
        }
    }  

    render() {
        return (
            <div>
                  <div id="rammeHovedFooter">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-4"><h2 id="footerOverskrift">Decihman</h2></div>
                    </div>
                    <div className="container">
                        <hr/>
                        <div className="row" id="footerRammeTekst">
                            <div className="col-3" id="footerTekst">
                                <h4><b>Kontakt</b></h4>
                                <p>Kontakt Oss</p>
                                <p>Nyhetsbrev</p>
                                <p>For Media</p>
                                <p>Info in English</p>
                            </div>
                            <div className="col-3" id="footerTekst">
                            <h4><b>Ofte stilte spørsmål</b></h4>
                                <p>Om Deichman Bjørvika</p>
                                <p>Om Lån</p>
                                <p>Om Bok-App</p>
                                <p>Deichman Korona tiltak</p>
                            </div>
                            <div className="col-3" id="footerTekst">
                            <h4><b>Om Deichman</b></h4>
                                <p>Om Oss</p>
                                <p>Historien Vår</p>
                                <p>Hvem er vi</p>
                                <p>Ledige stillinger</p>
                            </div>
                            <div className="col-3" id="footerTekst">
                            <h4><b>Ditt Deichman</b></h4>
                                <p>Sånn bruker du bibloteket</p>
                                <p>Samarbeid med Oss</p>
                                <p>Event og Konferanser</p>
                                <p>Møterom og Kursrom til leie</p>
                            </div>
                            </div>
                            <div className="FooterMobil">
                                <button className="accordion"><b>Kontakt</b></button>
                                <div className="panel">
                                <p>Kontakt Oss</p>
                                <p>Nyhetsbrev</p>
                                <p>For Media</p>
                                <p>Info in English</p>
                                </div>

                                <button className="accordion"><b>Ofte stilte spørsmål</b></button>
                                <div className="panel">
                                <p>Om Deichman Bjørvika</p>
                                <p>Om Lån</p>
                                <p>Om Bok-App</p>
                                <p>Deichman Korona tiltak</p>
                                </div>

                                <button className="accordion"><b>Om Deichman</b></button>
                                <div className="panel">
                                <p>Om Oss</p>
                                <p>Historien Vår</p>
                                <p>Hvem er vi</p>
                                <p>Ledige stillinger</p>
                                </div>
                                
                                <button className="accordion"><b>Ditt Deichman</b></button>
                                <div className="panel">
                                <p>Sånn bruker du bibloteket</p>
                                <p>Samarbeid med Oss</p>
                                <p>Event og Konferanser</p>
                                <p>Møterom og Kursrom til leie</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-10" id="sosialMedier">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x"/><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/><FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row" id="footerNederstTekst">
                                <div className="col-12">Personvern  Lånereglement  Ansvarlig redaktør: Knut Skansen, biblioteksjef © 2020 Deichman</div>
                        </div>
                      </div>
                    </div>
            </div>
        )
    }
}
