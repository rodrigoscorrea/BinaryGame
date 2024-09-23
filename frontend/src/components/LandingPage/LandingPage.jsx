import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    return (
        <div className="container text-center">
            {/* Explicação e cabeçalho */}
            <div className="row">
                <div className="col mt-5">
                    <h1 className="display-4">Descubra o Mundo dos Números Binários!</h1>
                    <p className="lead mt-3">
                        Explore, aprenda e divirta-se com o poder do sistema binário.
                        Você consegue converter números e resolver desafios? Vamos ver!
                    </p>
                </div>
            </div>

            {/* Imagem ou gráfico visual */}
            <div className="row">
                <div className="col">
                    <img src='binary_cpu.jpg' alt="Binário em ação" className="img-fluid mt-4" style={{maxHeight: "300px"}} />
                </div>
            </div>

            {/* Link para mais informações */}
            <div className="row">
                <div className="col mt-5">
                    <p>Curioso sobre o que são números binários?</p>
                </div>
            </div>

            {/* Botão de jogar */}
            <div className="row">
                <div className="col">
                    <Link className="btn btn-warning btn-lg mt-4" to={"/game"}>
                        Jogue agora e aprenda brincando!
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage;