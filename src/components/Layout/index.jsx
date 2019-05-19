import React from 'react'
import { Container, Col, Row, Jumbotron } from "reactstrap";

const Layout = (props) => {
  return (
    <Container>
      <header>
        <section className="mt-3">
          <Row>
            <Col xs={{ size: '10', offset: '1' }}>
              <Jumbotron className="text-center text-warning">
                <h1 className="text-center">Stars Fetcher</h1>
                <h2 className="text-center h4">Tudo sobre os personagens de Star Wars!</h2>
              </Jumbotron>
            </Col>
          </Row>
        </section>
      </header>
      <main>
        {props.children}
      </main>
      <footer className="fixed-bottom">
        <Container fluid className="bg-dark py-1">
          <Row>
            <Col>
              <p className="text-center">Criado por <a className="text-warning" href="https://gustavokuze.com" target="_blank" rel="noopener noreferrer">Gustavo kuze</a></p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  )
}

export default Layout