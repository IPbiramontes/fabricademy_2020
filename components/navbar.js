import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import TabComponent from './TabComponent'
import {Row, Col, Container} from 'reactstrap'
import './style.css'

export default class TopComponent extends Component {
    render() {
        return (
            <Container fluid className='vert-align'>
                <Row><Col><HeaderComponent /></Col></Row>
                <Row><Col><TabComponent /></Col></Row>
            </Container>
        )
    }
}