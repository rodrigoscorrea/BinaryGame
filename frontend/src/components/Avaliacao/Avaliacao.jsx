import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createSmeq } from '../../services/api';

function Avaliacao() {
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [nomeParticipante, setNomeParticipante] = useState('');
  const [comentario, setComentario] = useState('');
  const [nivelEsforco, setNivelEsforco] = useState('Nenhum esforço');

  const handleSmeqChange = (value) => {
    setScore(Number.parseInt(value) || 0);

    // Atualiza o nível de esforço com base no valor do slider
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

  const handleSubmit = async () => {
    // Aqui você pode fazer o envio dos dados (nome, valor SMEQ e comentário) ao backend
    try {
      
      await createSmeq({ nomeParticipante, score, comentario })
    } catch (error){
      console.log(error)
    }
    setShowModal(false);
  };

  return (
    <Container className="my-5">
      <h3 className="text-center">Avaliação</h3>
      <p className="text-center">
        Agradecemos sua colaboração em nossa pesquisa. Por favor, insira seu nome e escolha uma das técnicas abaixo para prosseguir.
      </p>

      {/* Campo para o nome */}
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
              <Button variant="primary" onClick={() => setShowModal(true)}>
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
              <Link className="btn btn-primary" to={"/avaliacao/tam"}>
                Responder TAM
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Modal SMEQ */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Responder SMEQ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* Campo slider SMEQ */}
              <Form.Group>
                <Form.Label>Valor SMEQ: {score}</Form.Label>
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

              {/* Campo para comentário opcional */}
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
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Enviar Resposta
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}

export default Avaliacao;
