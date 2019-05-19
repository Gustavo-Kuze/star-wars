import React, { useEffect } from 'react'
import CharacterItem from './CharacterItem'
import { setIsLoadingChars, loadCharacters, setNextUrl, setPreviousUrl } from '../../redux/core/actions/charactersActions'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

const Characters = (props) => {

    useEffect(() => {
        props.loadCharacters('people')
    }, [])

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
    isLoading: state.characters.isLoading,
    nextUrl: state.characters.nextUrl,
    previousUrl: state.characters.previousUrl,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setIsLoadingChars, loadCharacters, setNextUrl, setPreviousUrl
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
