import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Collapse } from "reactstrap";
import CharacterItem from './CharacterItem'
import { setIsLoadingChars, loadCharacters } from '../../redux/core/actions/charactersActions'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

const Characters = (props) => {

    useEffect(() => {
        props.loadCharacters('people')
    }, [props])

    return (
        <div className="mb-5">
            {
                props.characters ? props.characters.map((c, i) => <CharacterItem key={`${c.name}`} character={c} />) : ''
            }
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.characters.characters.results,
    isLoading: state.characters.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setIsLoadingChars, loadCharacters
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
