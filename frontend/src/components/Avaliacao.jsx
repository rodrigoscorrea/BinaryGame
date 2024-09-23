import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Avaliacao() {
  return (
    <Container className="my-5">
      <h3 className="text-center">Avaliação</h3>
      <p className="text-center">
        Agradecemos sua colaboração em nossa pesquisa. Por favor, escolha uma das técnicas abaixo para prosseguir.
      </p>

      <Row className="mt-4">
        {/* Card SMEQ */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src="placeholder_image_smeq.jpg" alt="SMEQ" />
            <Card.Body>
              <Card.Title>SMEQ</Card.Title>
              <Card.Text>
                A Técnica SMEQ (Subjective Mental Effort Questionnaire) é utilizada para medir o esforço mental percebido pelo usuário durante a interação com o sistema.
              </Card.Text>
              <Link className="btn btn-primary" to={"/avaliacao/smeq"}>Responder SMEQ</Link>
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
      </Row>
    </Container>
  );
}

export default Avaliacao;
