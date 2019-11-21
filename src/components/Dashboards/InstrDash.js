import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUser,
  faEnvelope,
  faEye,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";

import DashNavBar from "./DashNavBar";
import "./InstrDashStylz.css";

function DashMain() {
  return (
    // Set CSS grid container
    <div className="grid-container">
      <header className="header">
        <div className="header_search">
          <input class="header_input" placeholder="Search..." />
        </div>
        <div className="navbar">
          <DashNavBar />
        </div>
        <div className="header_avatar">{<FontAwesomeIcon icon={faUser} />}</div>
      </header>

      {/* set styling and structure for sidenav */}

      <aside className="sidenav">
        <div className="sidenav__brand">
          <FontAwesomeIcon icon={faDumbbell} className="sidenav_icon" />
          <NavLink to="/" className="sidenav__brand-link">
            Anywhere <span class="text-light">Fitness</span>
          </NavLink>
        </div>

        <div class="sidenav__profile">
          <div class="sidenav__profile-avatar">
            {<FontAwesomeIcon icon={faUser} />}
          </div>
          <div class="sidenav__profile-title text-light">User Name</div>
        </div>

        <div class="row row--align-v-center row--align-h-center">
          <ul className="navList">
            <li className="navList__heading">
              Messages {<FontAwesomeIcon icon={faEnvelope} />}
            </li>

            <div className="navList__subheading">
              <span className="navList__subheading-icon">
                {<FontAwesomeIcon icon={faEnvelope} />}
              </span>
              <span className="navList__subheading-title">Inbox</span>
            </div>

            <div className="navList__subheading">
              <span className="navList__subheading-icon">
                {<FontAwesomeIcon icon={faEye} />}
              </span>
              <span className="navList__subheading-title">Unread</span>
            </div>

            <div className="navList__subheading">
              <span className="navList__subheading-icon">
                {<FontAwesomeIcon icon={faBookOpen} />}
              </span>
              <span className="navList__subheading-title">Archive</span>
            </div>
          </ul>
        </div>
      </aside>

      {/* set styling for main section */}

      <main className="main">
        <div className="main-header">
          <div className="main-header__intro-wrapper">
            <div className="main-header__welcome">
              <div class="main-header__welcome-title text-light">
                Welcome, <strong>User</strong>
              </div>
              <div class="main-header__welcome-subtitle text-light">
                Where are you working out today?
              </div>
            </div>
          </div>
        </div>

        {/* styling for main cards */}
        {/* Render class card components HERE */}

        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard_icon">Overview</div>
            <div className="overviewcard_info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard_icon">Overview</div>
            <div className="overviewcard_info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard_icon">Overview</div>
            <div className="overviewcard_info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard_icon">Overview</div>
            <div className="overviewcard_info">Card</div>
          </div>
        </div>

        <div className="main-cards">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </div>
      </main>

      {/* styling for footer */}
      <footer className="footer">
        <div className="footer_copyright">&copy; 2019 Anywhere Fitness</div>
        <div className="footer_signature">Fitness The Way YOU Want It!</div>
      </footer>
    </div>
  );
}

export default DashMain;