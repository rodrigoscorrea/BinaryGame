import React from "react";

const Sobre = () => {
  return (
    <div className="container my-5">
      {/*Titulo */}
      <div className="row">
        <div className="col-12">
          <h1 className="textBlue">Sobre</h1>
        </div>
      </div>
      {/*Objetivo + logo*/}
      <div className="row my-5">
        <div className="col-md-8">
          <h2 style={{ color: "#023E8A" }}>Objetivo</h2>
          <p style={{ fontSize: "1.5em" }}>
            O Binary Game é um projeto de gameficado de uma atividade aplicada pelo Pet de Computação
            para os calouros do Instituto de Computação na Universidade Federal do Amazonas. A atividade
            descontraída serve para instigar os alunos a explorarem conceitos computacionais, no caso, dos
            números binários, tão importantes para a área.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="logo_pet.png"
            alt="Logo do PatrimoniX"
            className="img-fluid"
          />
        </div>
      </div>
      {/*Membros + Orientador*/}
      <div className="row my-5">
        <div className="col-md-6">
          <h3 className="mb-2" style={{ color: "#023E8A" }}>
            Membros
          </h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <img
                src="image_rodrigo.png"
                alt="Rodrigo Santos"
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <span style={{ color: "#023E8A", fontSize: "1.5em" }}>
                Rodrigo Santos
              </span>
            </li>
            
          </ul>
          <h3 className="mt-4 mb-2" style={{ color: "#023E8A" }}>
            Orientador
          </h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <img
                src="image_thais.png"
                alt="Thais Castro"
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <span style={{ color: "#023E8A", fontSize: "1.5em" }}>
                Thais Castro
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobre;