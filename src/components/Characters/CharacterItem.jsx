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
                        <CharInfo label="Cor do cabelo:" data={props.character ? props.character.hair_color : ''} />
                        <CharInfo label="Altura:" data={props.character ? `${props.character.height}cm` : ''} />
                        <CharInfo label="Massa:" data={props.character ? `${props.character.mass}kg` : ''} />
                        <CharInfo label="Cor da pele:" data={props.character ? props.character.skin_color : ''} />
                        <CharInfo label="Gênero:" data={props.character ? props.character.gender : ''} />
                        <CharInfo label="Cor dos olhos:" data={props.character ? props.character.eye_color : ''} />
                        <CharInfo label="Ano em que nasceu:" data={props.character ? props.character.birth_year : ''} />
                    </CardBody>
                </Card>
            </Collapse>
        </>
    )
}

export default CharacterItem
