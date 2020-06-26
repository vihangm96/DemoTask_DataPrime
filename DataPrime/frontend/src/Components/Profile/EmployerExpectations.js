import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class EmpExpectations extends React.Component{

    render(){
        return(
            <>
            <h6 className="whiteText "> Expectations regarding employers</h6>

            <Form >

                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Ideal locations
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>US</option>
                                            <option>Canada</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>


                <Form.Group as={Row}  className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Government jobs
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>


                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Industries
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>Tech</option>
                                            <option>Non-Tech</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>


                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Data culture
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>Open</option>
                                            <option>Closed</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>                                

                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Preferred Company Size
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>100</option>
                                            <option>100+</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>

            </Form>
            </>
        );
    }

}

export default EmpExpectations