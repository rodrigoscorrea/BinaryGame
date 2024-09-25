import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { createSmeq, createTam } from '../../services/api'; // adicionar função para enviar TAM

function Avaliacao() {
  const [showSmeqModal, setShowSmeqModal] = useState(false);
  const [showTamModal, setShowTamModal] = useState(false);
  const [score, setScore] = useState(0);
  const [nomeParticipante, setNomeParticipante] = useState('');
  const [comentario, setComentario] = useState('');
  const [nivelEsforco, setNivelEsforco] = useState('Nenhum esforço');

  // TAM states
  const [tamAnswers, setTamAnswers] = useState({
    perceivedUsefulness: '',
    perceivedEaseOfUse: '',
    userSatisfaction: '',
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

  const handleSubmitSmeq = async () => {
    try {
      await createSmeq({ nomeParticipante, score, comentario });
    } catch (error) {
      console.log(error);
    }
    setShowSmeqModal(false);
  };

  const handleSubmitTam = async () => {
    try {
      await createTam({ nomeParticipante, ...tamAnswers });
    } catch (error) {
      console.log(error);
    }
    setShowTamModal(false);
  };

  const handleTamChange = (e) => {
    const { name, value } = e.target;
    setTamAnswers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container className="my-5">
      <h3 className="text-center">Avaliação</h3>
      <p className="text-center">
        Agradecemos sua colaboração em nossa pesquisa. Por favor, insira seu nome e escolha uma das técnicas abaixo para prosseguir.
      </p>

      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          value={nomeParticipante}
          onChange={(e) => setNomeParticipante(e.target.value)}
          placeholder="Digite seu nome"
        />
      </Form.Group>

      <Row className="mt-4">
        {/* Card SMEQ */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src="smeq_image.jpg" alt="SMEQ" />
            <Card.Body>
              <Card.Title>SMEQ</Card.Title>
              <Card.Text>
                A Técnica SMEQ (Subjective Mental Effort Questionnaire) é utilizada para medir o esforço mental percebido pelo usuário durante a interação com o sistema.
              </Card.Text>
              <Button variant="primary" onClick={() => setShowSmeqModal(true)}>
                Responder SMEQ
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card TAM */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src="placeholder_image_tam.jpg" alt="TAM" />
            <Card.Body>
              <Card.Title>TAM</Card.Title>
              <Card.Text>
                O Questionário TAM (Technology Acceptance Model) é utilizado para avaliar a aceitação da tecnologia pelo usuário, medindo fatores como facilidade de uso e utilidade percebida.
              </Card.Text>
              <Button variant="primary" onClick={() => setShowTamModal(true)}>
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
        <Modal show={showTamModal} onHide={() => setShowTamModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Responder TAM</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Utilidade Percebida</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="perceivedUsefulness"
                  value={tamAnswers.perceivedUsefulness}
                  onChange={handleTamChange}
                  placeholder="Descreva a utilidade percebida da aplicação"
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Facilidade de Uso Percebida</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="perceivedEaseOfUse"
                  value={tamAnswers.perceivedEaseOfUse}
                  onChange={handleTamChange}
                  placeholder="Descreva a facilidade de uso percebida da aplicação"
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Satisfação do Usuário</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="userSatisfaction"
                  value={tamAnswers.userSatisfaction}
                  onChange={handleTamChange}
                  placeholder="Descreva sua satisfação com a aplicação"
                />
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
    </Container>
  );
}

export default Avaliacao;
