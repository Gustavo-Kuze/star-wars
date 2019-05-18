import React from 'react';
import Layout from './Layout/'
import Characters from './Characters/'
import { Container, Col, Row } from "reactstrap";

function App() {
  return (
    <Layout>
      <section>
        <Container>
          <Row>
            <Col>
              <Characters />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default App;
