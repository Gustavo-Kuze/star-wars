import React, { useState } from 'react'
import { Button, Col, Row, Collapse, Card, CardBody } from "reactstrap";

const CharInfo = infoProps =>
    <Row>
        <Col xs={{ size: '6', offset: '3' }}>
            <p>
                <span className="lead">{infoProps.label}</span>
                <span className="ml-3">{infoProps.data}</span>
            </p>
        </Col>
    </Row>

const CharacterItem = (props) => {

    let [isOpen, setOpen] = useState(props.isOpen)

    return (
        <>
            <Button onClick={() => setOpen(!isOpen)} outline block color="warning">{props.character.name || 'Informações do personagem'}</Button>
            <Collapse isOpen={isOpen}>
                <Card className="mt-1">
                    <CardBody>
                        <CharInfo label="Cor do cabelo:" data={props.chararacter ? props.chararacter.hair_color : ''} />
                        <CharInfo label="Altura:" data={props.chararacter ? `${props.chararacter.height}cm` : ''} />
                        <CharInfo label="Massa:" data={props.chararacter ? `${props.chararacter.mass}g` : ''} />
                        <CharInfo label="Cor da pele:" data={props.chararacter ? props.chararacter.skin_color : ''} />
                        <CharInfo label="Gênero:" data={props.chararacter ? props.chararacter.gender : ''} />
                        <CharInfo label="Cor dos olhos:" data={props.chararacter ? props.chararacter.eye_color : ''} />
                        <CharInfo label="Ano em que nasceu:" data={props.chararacter ? props.chararacter.birth_year : ''} />
                    </CardBody>
                </Card>
            </Collapse>
        </>
    )
}

export default CharacterItem
