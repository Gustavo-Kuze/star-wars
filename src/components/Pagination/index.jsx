import React from 'react'
import { Pagination as ReactstrapPagination, Button } from "reactstrap";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { loadCharacters, setIsLoadingChars } from "../../redux/core/actions/charactersActions";
import { extractPathFromUrl } from "../../services/api";

const Pagination = (props) => {

    const paginateTo = url => {
        props.setIsLoadingChars()
        props.loadCharacters(extractPathFromUrl(url))
    }

    return (
        <div className="d-flex justify-content-center align-items-center mb-5">
            <ReactstrapPagination aria-label="Navegação dos personagens">
                {
                    props.previousUrl ? (
                        <Button outline color="warning" onClick={() => paginateTo(props.previousUrl)}>Página anterior</Button>
                    ) : ''
                }
                {
                    props.nextUrl ? (
                        <Button outline color="warning" onClick={() => paginateTo(props.nextUrl)}>Próxima página</Button>
                    ) : ''
                }
            </ReactstrapPagination>
        </div>
    )
}

const mapStateToProps = state => ({
    nextUrl: state.characters.nextUrl,
    previousUrl: state.characters.previousUrl,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loadCharacters, setIsLoadingChars
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
