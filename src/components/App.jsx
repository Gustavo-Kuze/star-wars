import React from 'react';
import Layout from './Layout/'
import Characters from './Characters/'
import Pagination from './Pagination/'
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
          <Row>
            <Col xs={{ size: '6', offset: '3' }}>
              <Pagination />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default App;
