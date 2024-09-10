import React from "react";
import {Link} from "react-router-dom";
function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#365EEC"}}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Binary Game <i className="bi bi-graph-up-arrow"></i>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDisconnected"
            aria-controls="navbarNavDisconnected"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "#004055", backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDisconnected">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/avaliacao"
                  style={{
                    color: "#004055",
                    backgroundColor: "white",
                    borderRadius: "10%",
                  }}
                >
                  Avaliação
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sobre"
                  style={{
                    color: "#004055",
                    backgroundColor: "white",
                    borderRadius: "10%",
                  }}
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;