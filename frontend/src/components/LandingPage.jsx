import React from "react";
import { Link } from "react-router-dom";

function LandingPage(){
    
    return(
        <div className="container text-center">
            {/* Cabeçalho */}
            <div className="row">
                <div className="col">
                <h1 className="mt-5">Seja Bem Vindo (a)</h1>
                </div>
            </div>
            {/* Botão de jogar */}
            <div className="row">
                <div className="col">
                <Link className="btn btn-warning btn-lg mt-3" to={"/game"}>Jogar agora</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;