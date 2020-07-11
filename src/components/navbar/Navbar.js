import React, { Component } from 'react';
import './navbar.css';
import $ from 'jquery';
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {

  aktiverDropdownKnapp = () =>{
    $("#nav-icon3").toggleClass("open");
  }

  render() {
    return (
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
              <a className="navbar-brand" href="/#">DEICHMAN</a>
                 <div className="d-flex flex-row order-lg-1">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={this.aktiverDropdownKnapp}>
                        <div id="nav-icon3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                     <ul className="navbar-nav flex-row" id="navbarrammenRundtKnappene">
                        <li className="nav-item" id="navbarKnappene">
                            <a className="nav-link" href="/#" id="knapperINavbar1BliLaner">Bli Låner</a>
                        </li>
                        <li className="nav-item" id="navbarKnappene">
                            <a className="nav-link" href="/#" id="knapperINavbar2LoggInn"><FontAwesomeIcon icon={faUser} />Logg inn</a>
                        </li>
                         <li className="nav-item" id="navbarKnappene">
                            <a className="nav-link" href="/#" id="knapperINavbar3Sok"><FontAwesomeIcon icon={faSearch} />Søk</a>
                        </li>
                    </ul>
                </div>  
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span id="navbarLinkene">Bøker</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="/#">Dikt</a>
                          <a className="dropdown-item" href="/#">Romaner</a>
                          <a className="dropdown-item" href="/#">Noveller</a>
                          <a className="dropdown-item" href="/#">Biografi</a>
                          <a className="dropdown-item" href="/#">Sakprosabøker</a>
                        </div>
                      </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span id="navbarLinkene">Tegneserier</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="/#">Barn</a>
                          <a className="dropdown-item" href="/#">Ungdom</a>
                          <a className="dropdown-item" href="/#">Manga</a>
                          <a className="dropdown-item" href="/#">Disney</a>
                          <a className="dropdown-item" href="/#">Norske Tegneserier</a>
                        </div>
                      </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span id="navbarLinkene">Musikk</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="/#">Pop</a>
                          <a className="dropdown-item" href="/#">Rock</a>
                          <a className="dropdown-item" href="/#">Hip Hop</a>
                          <a className="dropdown-item" href="/#">Vinyl</a>
                          <a className="dropdown-item" href="/#">Retro</a>
                        </div>
                      </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#" id="navbarLinkene">Bibliotekene</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#" id="navbarLinkene">Hva vi tilbyr?</a>
                      </li>
                      <li className="nav-item" id="responsiveKnapperBliLaner">
                        <a className="nav-link" href="/#" id="navbarLinkene">Bli Låner</a>
                      </li>
                      <li className="nav-item" id="responsiveKnapperLogginn">
                        <a className="nav-link" href="/#" id="navbarLinkene">Logg Inn</a>
                      </li>
                    </ul>
                </div>  
            </nav>  
    )
  }
}
