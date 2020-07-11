import React, { Component } from 'react';
import './sosialeArrangment.css';
import strikketreff from '../decimanBiblotekBilder/strikketreff.jpg';
import chess from '../decimanBiblotekBilder/chess.jpg';
import gaming from '../decimanBiblotekBilder/gaming.jpg';

export default class SosialeArrangment extends Component {
    render() {
        return (
            <div>

            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-4"><h2 id="hvaSkjerOverskrift">Hva skjer? Sosiale Arrangement:</h2></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6" id="hvaSkjerKolonne">
                        <div className="col-sm-11 col-md-9 col-lg-12" id="hvaSkjerHovedRamme">
                            <div id="hvaSkjerBilderHoved"><img src={strikketreff} alt='Damer som strikker'/></div>
                            <h4 id="hvaSkjerHovedOverskrift">StrikkeTreff</h4>
                            <p id="hvaSkjerMotteplass">Møteplass: <span id="hvaSkjerSted">Tøyen (Oslo)</span></p>
                            <p id="hvaSkjerHovedDato">Hvor: <span id="hvaSkjerDato">Tirsdag 19 Juni</span></p>
                            <p id="hvaSkjerTid">Tid: <span id="hvaSkjerKL">KL: 18:30</span></p>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-6 col-lg-3" id="hvaSkjerKolonne">
                        <div className="col-sm-11 col-md-9 col-lg-5" id="hvaSkjerDelRamme">
                            <div id="hvaSkjerBilderDel"><img src={chess} alt='Sjakkbrett'/></div>
                            <h4 id="hvaSkjerHovedOverskrift">Sjakk</h4>
                            <p id="hvaSkjerMotteplass">Møteplass:<span id="hvaSkjerSted">Romsås</span></p>
                            <p id="hvaSkjerHovedDato">Hvor: <span id="hvaSkjerDato">Onsdag 20 Juni</span></p>
                            <p id="hvaSkjerTid">Tid:<span id="hvaSkjerKL"> KL: 20:30</span></p>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-6 col-lg-3" id="hvaSkjerKolonne">
                        <div className="col-sm-11 col-md-9 col-lg-5" id="hvaSkjerDelRamme">
                            <div id="hvaSkjerBilderDel"><img src={gaming} alt='Spillkonsoler'/></div>
                            <h4 id="hvaSkjerHovedOverskrift">Gaming</h4>
                            <p id="hvaSkjerMotteplass">Møteplass:<span id="hvaSkjerSted">Helsfyr</span></p>
                            <p id="hvaSkjerHovedDato">Hvor: <span id="hvaSkjerDato">Fredag 22 Juni</span></p>
                            <p id="hvaSkjerTid">Tid:<span id="hvaSkjerKL"> KL: 19:30</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
