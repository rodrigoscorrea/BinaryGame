import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { createSmeq, createTAM } from '../../services/api';
import CustomModalSucesso from '../CustomModalSucesso';

function Avaliacao() {
  const [showTamModal, setShowTamModal] = useState(false);
  const [nomeParticipante, setNomeParticipante] = useState('');
  const [comentario, setComentario] = useState('');
  const [showSmeqModal, setShowSmeqModal] = useState(false);
  const [score, setScore] = useState(0);
  const [nivelEsforco, setNivelEsforco] = useState('Nenhum esforço');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // Armazena as respostas do TAM
  const [tamAnswers, setTamAnswers] = useState({
    easeOfUse1: '',
    easeOfUse2: '',
    easeOfUse3: '',
    enjoyment1: '',
    enjoyment2: '',
    enjoyment3: ''
  });

  const handleSmeqChange = (value) => {
    setScore(Number.parseInt(value) || 0);

    if (value >= 111 && value <= 120) {
      setNivelEsforco('Esforço extremo');
    } else if (value >= 101 && value <= 110) {
      setNivelEsforco('Esforço muito grande');
    } else if (value >= 85 && value <= 100) {
      setNivelEsforco('Grande esforço');
    } else if (value >= 71 && value <= 84) {
      setNivelEsforco('Esforço considerável');
    } else if (value >= 66 && value <= 70) {
      setNivelEsforco('Bastante esforço');
    } else if (value >= 38 && value <= 65) {
      setNivelEsforco('Algum esforço');
    } else if (value >= 25 && value <= 37) {
      setNivelEsforco('Um pouco de esforço');
    } else if (value >= 11 && value <= 24) {
      setNivelEsforco('Quase nenhum esforço');
    } else {
      setNivelEsforco('Nenhum esforço');
    }
  };

  const handleTamChange = (e) => {
    const { name, value } = e.target;
    setTamAnswers((prev) => {
      const newAnswers =  {...prev, [name]:value};
      return newAnswers;
    });
  };

  const handleSubmitTam = async () => {
    try {
      await createTAM({ nomeParticipante, ...tamAnswers });
      
    } catch (error) {
      console.log(error);
    }
    setShowTamModal(false);
    setShowSuccessModal(true); 
   
  };

  const handleSubmitSmeq = async () => {
    try {
      await createSmeq({ nomeParticipante, score, comentario });
    } catch (error) {
      console.log(error);
    }
    setShowSmeqModal(false);
    setShowSuccessModal(true);
   
  };

  const radioOptions = [
    'Discordo totalmente',
    'Discordo fortemente',
    'Discordo parcialmente',
    'Nem concordo nem discordo',
    'Concordo parcialmente',
    'Concordo fortemente',
    'Concordo totalmente',
  ];

  const renderRadioButtons = (questionName) => {
    return radioOptions.map((option, index) => (
      <Form.Check
        key={`${questionName}-${index}`}
        type="radio"
        label={option}
        name={questionName}
        value={option}
        onChange={handleTamChange}
        inline
      />
    ));
  };

  return (
    <Container className="my-5">
      <h3 className="text-center" style={{ fontSize: '2.5em' }}>Avaliação</h3>
      <p className="text-center" style={{ fontSize: '1.5em' }}>
        Agradecemos sua colaboração em nossa pesquisa. Por favor, insira seu nome e escolha uma das técnicas abaixo para prosseguir.
      </p>

      <Form.Group className="mb-3">
        <Form.Label style={{ fontSize: '1.5rem' }}>Nome</Form.Label>
        <Form.Control
          type="text"
          value={nomeParticipante}
          onChange={(e) => setNomeParticipante(e.target.value)}
          placeholder="Digite seu nome"
          required
        />
      </Form.Group>

      <Row className="mt-4">
        {/* Card SMEQ */}
        <Col md={6}>
          <Card className="mb-4 h-100">
            <Card.Img variant="top" src="smeqImage.jpg" alt="SMEQ" />
            <Card.Body>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                Avalie o esforço mental percebido durante a interação com o sistema.
              </Card.Text>
              <Button variant="primary" onClick={() => setShowSmeqModal(true)} style={{ fontSize: '1.5rem' }}>
                Responder SMEQ
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Card TAM */}
        <Col md={6}>
          <Card className="mb-4 h-100">
            <Card.Img variant="top" src="tamImage.jpg" alt="TAM" />
            <Card.Body>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                Avalie a facilidade de uso e o prazer percebido ao utilizar o sistema Binary Game.
              </Card.Text>
              <Button variant="primary" onClick={() => setShowTamModal(true)} style={{ fontSize: '1.5rem' }}>
                Responder TAM
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Modal SMEQ */}
        <Modal show={showSmeqModal} onHide={() => setShowSmeqModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Responder SMEQ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label className='mb-2'>Valor SMEQ: {score}</Form.Label>
                <Form.Label className='mb-2'>Arraste o slider para informar seu nível de esforço mental</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="range"
                    min="0"
                    max="120"
                    value={score}
                    onChange={(e) => handleSmeqChange(e.target.value)}
                    className="slider"
                  />
                </div>
                <p>Nível de esforço: {nivelEsforco}</p>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Comentário (opcional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="Deixe um comentário sobre o esforço mental percebido"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSmeqModal(false)}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleSubmitSmeq}>
              Enviar Resposta
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal TAM */}
        <Modal show={showTamModal} onHide={() => setShowTamModal(false)} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Responder TAM</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form>
              {/* Facilidade de Uso Percebida */}
              <h5>Facilidade de Uso Percebida</h5>

              {/* Pergunta 1 */}
              <Form.Group>
                <Form.Label>Minha interação com o Binary Game foi clara e compreensível.</Form.Label>
                <br></br>
                {renderRadioButtons('easeOfUse1')}
              </Form.Group>

              {/* Pergunta 2 */}
              <Form.Group className="mt-3">
                <Form.Label>Interagir com o Binary Game não exigiu muito do meu esforço mental.</Form.Label>
                <br></br>
                {renderRadioButtons('easeOfUse2')}
              </Form.Group>

              {/* Pergunta 3 */}
              <Form.Group className="mt-3">
                <Form.Label>Considero fácil utilizar o Binary Game.</Form.Label>
                <br></br>
                {renderRadioButtons('easeOfUse3')}
              </Form.Group>

              <hr />

              {/* Prazer Percebido */}
              <h5>Prazer Percebido</h5>

              {/* Pergunta 1 */}
              <Form.Group>
                <Form.Label>Acho que usar o Binary Game é agradável.</Form.Label>
                <br></br>
                {renderRadioButtons('enjoyment1')}
              </Form.Group>

              {/* Pergunta 2 */}
              <Form.Group className="mt-3">
                <Form.Label>O processo real de utilização do Binary Game é agradável.</Form.Label>
                <br></br>
                {renderRadioButtons('enjoyment2')}
              </Form.Group>

              {/* Pergunta 3 */}
              <Form.Group className="mt-3">
                <Form.Label>Eu me divirto usando o Binary Game.</Form.Label>
                <br></br>
                {renderRadioButtons('enjoyment3')}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowTamModal(false)}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleSubmitTam}>
              Enviar Resposta
            </Button>
            
          </Modal.Footer>
        </Modal>
      </Row>
      <CustomModalSucesso 
        open={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)} 
      />
    </Container>
  );
}

export default Avaliacao;
