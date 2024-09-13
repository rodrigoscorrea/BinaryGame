import React from "react";

function Game(){
    return (
        <div className="container text-center mt-5">
          {/* Tabela de letras e números */}
          <div className="row justify-content-center">
            <table className="table-bordered">
              <tbody>
                <tr>
                  <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td>
                </tr>
                <tr>
                  <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
                </tr>
                <tr>
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
              <div className="d-flex justify-content-around">
                <div>
                  <p><strong>I</strong></p>
                  <p>01000</p>
                </div>
                <div>
                  <p><strong>C</strong></p>
                  <p>00101</p>
                </div>
                <div>
                  <p><strong>O</strong></p>
                  <p>01111</p>
                </div>
                <div>
                  <p><strong>M</strong></p>
                  <p>01101</p>
                </div>
                <div>
                  <p><strong>P</strong></p>
                  <p>10000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Game;