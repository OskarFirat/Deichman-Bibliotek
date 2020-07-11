import React, { Component } from 'react';
import './nyheter.css';
import endeligApen from '../decimanBiblotekBilder/endeligApen.jpg';
import kongePaBesok from '../decimanBiblotekBilder/kongePaBesok.jpg';
import barnPaBesok from '../decimanBiblotekBilder/barnPaBesok.jpg';

export default class Nyheter extends Component {
  render() {
    return (
      <div>

            <div id="rammeHovedNyheter">
               <div className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-4"><h2 id="nyehterOverskrift">Nyheter</h2></div>
                </div>
               <div className="container">
                <div className="container">
                  <div className="row">
                    <div className="col-12" id="nyheterHovedNyhet">
                        <img id="nyhetHovedBilde" src={endeligApen} alt='Vi har åpnet igjen!'/>
                        <div className="container">
                        <h2 style={{margin:'1.5% 0% 1% 0%', fontWeight:'bold'}}>Velkommen! Endelig Åpent Igjen!</h2>
                        <p>Alle lokalbibliotekene har nå åpnet dørene for publikum, og vi gleder oss til å se deg i løpet av kort tid!<span id="lesMerNyheter">Les mer.</span></p>
                        </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5" id="nyheterDelNyhet">
                        <img id="nyhetDelBilde" src={kongePaBesok} alt='Kongen kom på besøk i dag'/>
                        <div className="container">
                        <h5 style={{margin:'1.5% 0% 1% 0%', fontWeight:'bold'}}>Kanskje kommer Kongen?!</h5>
                        <p>I dag kom kongen på besøk til stor ekstase og beundering. Ha tok seg tid til å svare på hvilken bok var hans favoritt i år.<span id="lesMerNyheter">Les mer.</span></p>
                        </div>
                    </div>
                    <div className="col-xs-1 col-sm-2 col-md-2"></div>
                    <div className="col-md-5" id="nyheterDelNyhet">
                        <img id="nyhetDelBilde" src={barnPaBesok} alt='Barn som leker'/>
                        <div className="container">
                        <h5 style={{margin:'1.5% 0% 1% 0%', fontWeight:'bold'}}>Barna`s dag på Bibloteket er tilbake!</h5>
                        <p>Bøker, Moro og Glede var å se når barn`a entret sine lekerom rundt om i Norge. Flere var glade å se bibloteket igjen, og de nye aktivitetene som ble lansert!<span id="lesMerNyheter">Les mer.</span></p>
                        </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>

      </div>
    )
  }
}
