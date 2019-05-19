import React, { useState } from 'react'
import { Container, Col, Row, Collapse } from "reactstrap";
import CharacterItem from './CharacterItem'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

const Characters = (props) => {

    return (
        <div>

        </div>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
