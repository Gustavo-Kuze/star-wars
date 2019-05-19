import React, { useEffect } from 'react'
import CharacterItem from './CharacterItem'
import { setIsLoadingChars, loadCharacters } from '../../redux/core/actions/charactersActions'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { Spinner, Container, Row, Col } from "reactstrap";

const Characters = (props) => {

    useEffect(() => {
        props.setIsLoadingChars()
        props.loadCharacters('people')
    }, [])

    return (
        <div className="mb-5">
            {
                <Container>
                    <Row>
                        <Col xs={{ size: '4', offset: '4' }} className="d-flex justify-content-center align-items-center">
                            <Spinner className={`mb-3 ${props.isLoading ? '' : 'invisible'}`} color="warning" />
                        </Col>
                    </Row>
                </Container>
            }
            {
                props.characters ? props.characters.map((c, i) =>
                    <CharacterItem key={`${c.name}`} character={c} />) : ''
            }
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.characters.characters.results,
    isLoading: state.characters.isLoading,
    nextUrl: state.characters.nextUrl,
    previousUrl: state.characters.previousUrl,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setIsLoadingChars, loadCharacters
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
