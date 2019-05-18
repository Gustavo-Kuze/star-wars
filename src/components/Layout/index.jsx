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
    </Container>
  )
}

export default Layout