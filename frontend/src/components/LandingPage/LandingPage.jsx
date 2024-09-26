import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Certifique-se de criar e importar o CSS

function LandingPage() {
    return (
        <div className="container-fluid landing-page-container">
            <div className="overlay">
                {/* Explicação e cabeçalho */}
                <div className="row">
                    <div className="col mt-5">
                        <h1 className="display-4 text-light">Descubra o Mundo dos Números Binários!</h1>
                        <p className="lead mt-3 text-light">
                            Explore, aprenda e divirta-se com o poder do sistema binário.
                            Você consegue converter números e resolver desafios? Vamos ver!
                        </p>
                    </div>
                </div>

                {/* Link para mais informações */}
                <div className="row">
                    <div className="col mt-5">
                        <p className="text-light">Curioso sobre o que são números binários?</p>
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
        </div>
    );
}

export default LandingPage;
