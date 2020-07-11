import React, { Component } from 'react';
import './anbefaling.css';
import $ from 'jquery';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jegForeslarViVakner from '../decimanBiblotekBilder/jegForeslarViVakner.jpg';
import minMorkeVanessa from '../decimanBiblotekBilder/minMorkeVanessa.jpg';
import becksSisteSommer from '../decimanBiblotekBilder/becksSisteSommer.jpg';
import reisenTilLivsvannet from '../decimanBiblotekBilder/minMorkeVanessa.jpg';
import thebeatles1 from '../decimanBiblotekBilder/thebeatles1.jpg';
import pinkfloyDarkSideOfMoon from '../decimanBiblotekBilder/pinkfloyDarkSideOfMoon.jpg';
import michealjacksonThriller from '../decimanBiblotekBilder/michealjacksonThriller.jpg';
import taylorswift1989 from '../decimanBiblotekBilder/taylorswift1989.jpg';
import stjerner5 from '../decimanBiblotekBilder/stjerner5.jpg';
import stjerner4 from '../decimanBiblotekBilder/stjerner4.jpg';


export default class Anbefaling extends Component {
  
  render() {
    return (
      <div>

          <div id="rammeAnbefalinger">
               <div className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-4"><h2 id="anbefalingOverskrift">Vi anbefaler</h2></div>
               </div>
               <div className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-10">
                    <Tabs defaultActiveKey="Bøker">

                       <Tab eventKey="Bøker" title={<span href="#home" id="anbefalingLenkene">Bøker <i class="fas fa-book"></i></span>}> 
                            <div className="tab-item-wrapper">
                              <div id="rammeAnbefalingerTabs"><br/>
                                <h3 style={{marginLeft:'10px'}}>BØKER</h3>
                                <div className="row">
                                    <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                        <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={jegForeslarViVakner} alt='Bilde av bok cover'/>
                                        <br/><img  id="anbefalingerStjerner" src={stjerner5} alt='Bilde av 5 stjerne rating av 5 mulige'/><br/><b>Jeg foreslår at vi våkner</b><br/>av <span id="innholdsProdusent">Beate Grimsrud</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                    </div>
                                    <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                        <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={minMorkeVanessa} alt='Bilde av bok cover'/>
                                        <br/><img  id="anbefalingerStjerner" src={stjerner4} alt='Bilde av 4 stjerne rating av 5 mulige'/><br/><b>Min mørke Vanessa</b><br/>av <span id="innholdsProdusent">Kate Elizabeth Russell</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                    </div>
                                    <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                        <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={becksSisteSommer} alt='Bilde av bok cover'/>
                                        <br/><img  id="anbefalingerStjerner" src={stjerner4} alt='Bilde av 4 stjerne rating av 5 mulige'/><br/><b>Becks siste sommer</b><br/>av <span id="innholdsProdusent">Benedict Wells</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                    </div>
                                    <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                        <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={reisenTilLivsvannet} alt='Bilde av bok cover'/>
                                        <br/><img  id="anbefalingerStjerner" src={stjerner5} alt='Bilde av 5 stjerne rating av 5 mulige'/><br/><b>Reisen til livsvannet</b><br/>av <span id="innholdsProdusent">Bergsveinn Birgisson</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                    </div>
                                </div>
                             </div>
                            </div>
                        </Tab>

                        <Tab eventKey="Musikk" title={<span href="#home" id="anbefalingLenkene">Musikk <i class="fas fa-music"></i></span>}>
                            <div className="tab-item-wrapper">
                             <div><br/>
                              <h3>MUSIKK</h3>
                              <div className="row" id="rammeAnbefalingerTabs">
                                  <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                      <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={thebeatles1} alt='Bilde av album cover'/>
                                      <br/><img  id="anbefalingerStjerner" src={stjerner5} alt='Bilde av 5 stjerne rating av 5 mulige'/><br/><b>1</b><br/>av <span id="innholdsProdusent">The Beatles</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                  </div>
                                  <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                      <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={pinkfloyDarkSideOfMoon} alt='Bilde av album cover'/>
                                      <br/><img  id="anbefalingerStjerner" src={stjerner4} alt='Bilde av 4 stjerne rating av 5 mulige'/><br/><b>Dark Side Of The Moon</b><br/>av <span id="innholdsProdusent">Pink Floyd</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                  </div>
                                  <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                      <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={michealjacksonThriller} alt='Bilde av album cover'/>
                                      <br/><img  id="anbefalingerStjerner" src={stjerner5} alt='Bilde av 5 stjerne rating av 5 mulige'/><br/><b>Thriller</b><br/>av <span id="innholdsProdusent">Micheal Jackson</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                  </div>
                                  <div className="col-md-6 col-lg-3" id="anbefalingerTabs">
                                      <div className="col-sm-11" id="anbefalingerTabsHovedRamme"><img id="anbefalingerBilder" src={taylorswift1989} alt='Bilde av album cover'/>
                                      <br/><img  id="anbefalingerStjerner" src={stjerner5} alt='Bilde av 5 stjerne rating av 5 mulige'/><br/><b>1989</b><br/>av <span id="innholdsProdusent">Taylor Swift</span><br/><br/><span id="lanMedium">Lån Boken</span><span id="lesMer">Les mer</span></div>
                                  </div>
                              </div>
                             </div>
                            </div>
                        </Tab>

                        <Tab eventKey="Filmer" title={<span href="#home" id="anbefalingLenkene">Filmer <i class="fas fa-film"></i></span>}>
                            <div className="tab-item-wrapper">
                            <h5>Filmer</h5>
                            <p>At vero eos et accusamus et iusto odio dignissimos</p>
                            </div>
                        </Tab>

                        <Tab eventKey="Tegneserier" title={<span href="#home" id="anbefalingLenkene">Tegneserier <i class="fas fa-child"></i></span>}>
                            <div className="tab-item-wrapper">
                            <h5>Tegneserier</h5>
                            <p>At vero eos et accusamus et iusto odio dignissimos</p>
                            </div>
                        </Tab>

                        <Tab eventKey="Spill" title={<span href="#home" id="anbefalingLenkene">Spill <i class="fas fa-gamepad"></i></span>}>
                            <div className="tab-item-wrapper">
                            <h5>Spill</h5>
                            <p>At vero eos et accusamus et iusto odio dignissimos</p>
                            </div>
                        </Tab>
                      </Tabs>
          
                  <div className="col-sm-1"></div>
             </div>
           </div>
        </div>


      </div>
    )
  }
}
