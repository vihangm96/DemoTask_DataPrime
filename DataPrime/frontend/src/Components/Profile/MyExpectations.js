import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class MyExpectations extends React.Component{

    render(){
        return(
            <>
            <h6 className="whiteText "> My expectations</h6>

            <Form >

                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Opportunity type
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>Internship</option>
                                            <option>Co-op</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>


                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Target Annual Salary
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>80k</option>
                                            <option>80k+</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>


                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Target hourly rate
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>40</option>
                                            <option>40+</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>


                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Willing to relocate
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
                                            Willing to travel
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
                                            Most important
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>Work Culture</option>
                                            <option>Location</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>


                <Form.Group as={Row} className="myExp">
                                            <Form.Label size="sm" column sm="5" className="grayText" >
                                            Seniority
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>Fresh Grad</option>
                                            <option>Experienced</option>
                                            </Form.Control>
                                            </Col>
                </Form.Group>
            </Form>
            </>
        );
    }

}

export default MyExpectations