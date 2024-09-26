import React, { useEffect, useState } from "react";
import { getPalavras } from "../services/api";
import Modal from 'react-bootstrap/Modal';

function Game() {
  const [palavras, setPalavras] = useState([]);
  const [palavraAleatoria, setPalavraAleatoria] = useState("");
  const [respostaUsuario, setRespostaUsuario] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [faseAtual, setFaseAtual] = useState(0); // Estado para acompanhar a fase atual
  const [progressoFases, setProgressoFases] = useState([false, false, false, false, false]); // Estado para acompanhar o progresso das fases
  const [showModal, setShowModal] = useState(false);
  const [indexPalavra, setIndexPalavra] = useState(0);
  useEffect(() => {
    carregarNovaPalavra();
  }, []);

  const carregarNovaPalavra = () => {
    getPalavras().then((response) => {
      setPalavras(response);

      console.log("indice da palavra ", indexPalavra);
      console.log("palavra: ", response[indexPalavra]);

      
      if(indexPalavra < 4){
        setPalavraAleatoria(response[indexPalavra].palavra);
        setIndexPalavra(indexPalavra + 1);
      } else if (indexPalavra === 4){
        setPalavraAleatoria(response[indexPalavra].palavra);
        setIndexPalavra(0);
      }
      
      setRespostaUsuario([]); // Limpa a resposta do usuário
      setMensagem(""); // Reseta a mensagem
      setJogoFinalizado(false); // Reseta o status do jogo
    });
  };

  const letraParaBinario = (letra) => {
    const tabela = {
      A: "00001", B: "00010", C: "00011", D: "00100", E: "00101",
      F: "00110", G: "00111", H: "01000", I: "01001", J: "01010",
      K: "01011", L: "01100", M: "01101", N: "01110", O: "01111",
      P: "10000", Q: "10001", R: "10010", S: "10011", T: "10100",
      U: "10101", V: "10110", W: "10111", X: "11000", Y: "11001", Z: "11010"
    };

    return tabela[letra.toUpperCase()] || ""; 
  };

  const palavraBinario = palavraAleatoria.split("").map((letra) => ({
    letra,
    binario: letraParaBinario(letra),
  }));

  const handleInputChange = (index, letra) => {
    const novaResposta = [...respostaUsuario];
    novaResposta[index] = letra.toUpperCase();
    setRespostaUsuario(novaResposta);

    if (novaResposta.length === palavraAleatoria.length && !novaResposta.includes("")) {
      verificarResposta(novaResposta);
    }
  };

  const verificarResposta = (resposta) => {
    if (resposta.join("") === palavraAleatoria.toUpperCase()) {
      setMensagem("Parabéns! Você acertou!");
      setJogoFinalizado(true);

      // Atualiza o progresso das fases
      const novoProgresso = [...progressoFases];
      novoProgresso[faseAtual] = true; // Marca a fase atual como concluída
      setProgressoFases(novoProgresso);

      // Avança para a próxima fase
      setFaseAtual(faseAtual + 1);
      console.log("fase atual: ", faseAtual)
      // Se todas as fases foram concluídas, exibe o modal de parabéns
      
      if (faseAtual === 4) {
        setIndexPalavra(0);
        setJogoFinalizado(true);
        setShowModal(true);
        resetarTentativa();
        
      }
    } else {
      setMensagem("Tente novamente! A palavra estava incorreta.");
    }
  };

  const resetarTentativa = () => {
    setFaseAtual(0); // Reseta a fase atual
    setProgressoFases([false, false, false, false, false]); // Reseta o progresso das fases
    carregarNovaPalavra(); // Carrega uma nova palavra
  };

  return (
    <div className="mt-3">
      <div className="mx-3">
        {/* Título e objetivo do jogo */}
        <h3 style={{fontSize: "2em"}}>Objetivo do jogo</h3>
        <p className="mt-4" style={{fontSize: "1.5em"}}>
          O objetivo do jogo é adivinhar a palavra secreta, convertendo as letras de uma palavra aleatória para o código binário correspondente. 
          Cada letra tem seu próprio valor binário de 5 bits. Preencha os campos com as letras corretas para completar a palavra.
        </p>
      </div>

      <div className="container text-center mt-5">

        {/* Tabela de letras e números */}
        <div className="row justify-content-center">
          <table className="table-bordered" style={{fontSize: "1.5em"}}>
            <tbody>
              <tr style={{ backgroundColor: "rgba(255, 177, 12, 0.6)" }}>
                <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td>
              </tr>
              <tr>
                <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
              </tr>
              <tr style={{ backgroundColor: "rgba(255, 177, 12, 0.6)" }}>
                <td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td>
              </tr>
              <tr>
                <td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modal de ajuda */}
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#helpModal">
            <i className="bi bi-question-circle-fill" style={{ fontSize: '1.5rem' }}></i>
          </button>
        </div>

        <div className="modal fade" id="helpModal" tabIndex="-1" aria-labelledby="helpModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="helpModalLabel">Ajuda para o Jogo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{fontSize: "1.25em"}}>
                <h5>Como converter um número binário para decimal?</h5>
                <p>
                  Imagine que o sistema binário é como um jogo de luzes, onde cada luz pode estar ligada ou desligada. 
                  No mundo dos números binários, temos apenas dois dígitos: 0 e 1. O 0 significa que a luz está desligada, 
                  e o 1 significa que a luz está ligada.
                </p>
                <p>
                  Agora, pense que cada posição de um número binário tem um valor diferente, como se fosse uma fila de potes. 
                  Cada pote na fila pode multiplicar seu valor por um número, começando do 1 e depois indo para 2, 4, 8, 16, e assim 
                  por diante (essas são as "potências de 2"). Vamos ver isso com um exemplo:
                </p>
                <p><strong>Exemplo:</strong></p>
                <img src="binario.png" alt="exemploBinario"/>
              </div> 
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sequência de letras com binários */}
        <div className="row justify-content-center mt-5">
          <div className="col text-center">
            {palavraBinario.length > 0 ? (
              <div>
                {/* Inputs para o usuário digitar a palavra */}
                <div className="d-flex justify-content-around mt-3">
                  {palavraAleatoria.split("").map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      value={respostaUsuario[index] || ""}
                      style={{ width: "50px", textAlign: "center" }}
                    />
                  ))}
                </div>

                <div className="d-flex justify-content-around">
                  {palavraBinario.map((item, index) => (
                    <div key={index}>
                      <p style={{fontSize: "1.5em"}}>{item.binario}</p>
                    </div>
                  ))}
                </div>

                {/* Exibir mensagem de acerto ou erro */}
                {mensagem && <div className="mt-3"><strong>{mensagem}</strong></div>}
              </div>
            ) : (
              <p>Carregando palavra...</p>
            )}
          </div>
        </div>

        

        <div className="d-flex justify-content-center">
          {/* Próxima palavra*/}
          <div className="mt-4 mb-4">
            <button className="btn btn-primary" onClick={carregarNovaPalavra} style={{fontSize: "1.5em"}}>
              Próxima palavra
            </button>
          </div>

          {/* Botão de cancelar tentativa */}
          <div className="mt-4 mb-4" style={{marginLeft: "15px"}}>
            <button className="btn btn-danger" onClick={resetarTentativa} style={{fontSize: "1.5em"}}>Cancelar tentativa</button>
          </div>
        </div>
        

        {/* Progresso das fases */}
        <div className="d-flex justify-content-center mt-5 mb-5">
          {progressoFases.map((concluida, index) => (
            <div
              key={index}
              className={`fase-icon ${concluida ? "concluida" : "pendente"}`}
              style={{
                width: "30px",
                height: "30px",
                margin: "0 10px",
                borderRadius: "50%",
                backgroundColor: concluida ? "green" : "gray",
              }}
            />
          ))}
        </div>

        {/* Modal de parabéns */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Parabéns!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Você concluiu todas as 5 fases com sucesso!
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={() => setShowModal(false)}>
              Fechar
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Game;
