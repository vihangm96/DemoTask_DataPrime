import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyExpectations from './MyExpectations'
import EmployerExpectations from './EmployerExpectations'

class Prefereneces extends React.Component{

    render(){
        return(
            <>
            <Container fluid>
                <Row>
                    <h5 className="grayText otherRow"> <b> Prefereneces </b> </h5>
                </Row>
                <Row className="prefCols">
                    <Col className="prefCol">
                        <MyExpectations />                                                                
                    </Col>
                    <Col className="prefCol2">
                        <EmployerExpectations />
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default Prefereneces