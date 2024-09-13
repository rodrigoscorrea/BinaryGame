import React, {useEffect, useState} from "react";
import { getPalavras } from "../services/api";

function LandingPage(){
    const [palavras, setPalavras] = useState();
    useEffect(() => {
        getPalavras().then((response) => setPalavras(response));
    }, [])
    console.log(palavras);
    
    
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
                <button className="btn btn-warning btn-lg mt-3">Jogar agora</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;