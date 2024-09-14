import React, { useEffect, useState } from "react";
import { getPalavras } from "../services/api";

function Game() {
  const [palavras, setPalavras] = useState([]);
  const [palavraAleatoria, setPalavraAleatoria] = useState("");
  const [respostaUsuario, setRespostaUsuario] = useState([]);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    getPalavras().then((response) => {
      setPalavras(response);
      const randomIndex = Math.floor(Math.random() * response.length);
      setPalavraAleatoria(response[randomIndex].palavra);
    });
  }, []);

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
    } else {
      setMensagem("Tente novamente! A palavra estava incorreta.");
    }
  };

  return (
    <div className="mt-3">
      <div className="mx-3">
        {/* Adicionando o título e o objetivo do jogo */}
        <h3>Objetivo do jogo</h3>
        <p>
          O objetivo do jogo é adivinhar a palavra secreta, convertendo as letras de uma palavra aleatória para o código binário correspondente. 
          Cada letra tem seu próprio valor binário de 5 bits. Preencha os campos com as letras corretas para completar a palavra.
        </p>
      </div>
      
      <div className="container text-center mt-5">
        {/* Ícone de ajuda */}
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#helpModal">
            <i className="bi bi-question-circle-fill" style={{ fontSize: '1.5rem' }}></i>
          </button>
        </div>

        {/* Modal de ajuda */}
        <div className="modal fade" id="helpModal" tabIndex="-1" aria-labelledby="helpModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="helpModalLabel">Ajuda para o Jogo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                O objetivo deste jogo é descobrir a palavra correta com base nos códigos binários fornecidos.
                Cada letra corresponde a um número binário de 5 bits. Insira as letras correspondentes 
                nos campos e veja se a palavra está correta. Por exemplo, o código "00001" corresponde à letra "A".
                Tente completar a palavra corretamente para vencer o jogo!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de letras e números */}
        <div className="row justify-content-center">
          <table className="table-bordered">
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
                      style={{ width: "40px", textAlign: "center" }}
                    />
                  ))}
                </div>

                <div className="d-flex justify-content-around">
                  {palavraBinario.map((item, index) => (
                    <div key={index}>
                      <p>{item.binario}</p>
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
      </div>
    </div>
    
  );
}

export default Game;
