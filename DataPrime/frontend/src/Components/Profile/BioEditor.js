import React from 'react'
import Image from 'react-bootstrap/Image'
import logo from './logo.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BioEditor extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            editorFirstName : "",
            editorLastName : "",
            editorLocation : "",
            editorDescription : "",
            editorImgSrc : null
        }

        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
          editorImgSrc : URL.createObjectURL(event.target.files[0])
        })
      }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
      }

    handleSaveClick(){        
        this.props.setFirstName(this.state.editorFirstName);
        this.props.setLastName(this.state.editorLastName);
        this.props.setLocation(this.state.editorLocation);
        this.props.setDescription(this.state.editorDescription);
        this.props.setImageSrc(this.state.editorImgSrc);
        this.props.setIsBioEditable(false);
    }

    handleCancelClick(){
        this.props.setIsBioEditable(false)
    }

    render(){

        var tempSrc = logo
        
        if(this.state.editorImgSrc != null ){
            tempSrc = this.state.editorImgSrc
        }

        return(
            <>
                        <Container>
                            <Row>
                                <Col > 
                                    <input type="file" onChange={this.handleChange}/>
                                    <Image roundedCircle style={{height:"7.5rem", width:"7.5rem"}}  src={tempSrc}/> 
                                </Col>
                                <Col >
                                    <Form>
                                        <Form.Group as={Row} controlId="formFirstName">
                                            <Form.Label size="sm" column sm="5" className="grayText">
                                                First Name
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                name="editorFirstName" 
                                                value={this.state.editorFirstName} 
                                                onChange={this.handleInputChange}
                                                size="sm" 
                                                type="text" 
                                                placeholder="First Name" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formLastName">
                                            <Form.Label size="sm"column sm="5" className="grayText">
                                            Last Name
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                name="editorLastName" 
                                                value={this.state.editorLastName} 
                                                onChange={this.handleInputChange}
                                                size="sm" 
                                                type="text" 
                                                placeholder="Last Name" />
                                            </Col>
                                        </Form.Group>
                                            <Form.Group as={Row} controlId="formLocation">
                                            <Form.Label size="sm" column sm="5" className="grayText">
                                            Location
                                            </Form.Label>
                                            <Col sm="7">
                                            <Form.Control 
                                                name="editorLocation" 
                                                onChange={this.handleInputChange}
                                                size="sm" 
                                                as="select">
                                            <option>Choose</option>
                                            <option>Virginia</option>
                                            <option>Los Angeles</option>
                                            </Form.Control>
                                            </Col>
                                        </Form.Group>

                                            <Form.Group as={Row} controlId="formDesc">
                                            <Form.Label size="sm" column sm="5" className="grayText">
                                            Description
                                            </Form.Label>
                                            <Col sm="7" >
                                            <Form.Control 
                                                style={{height:"6rem"}} 
                                                type="text" 
                                                placeholder="Type description" 
                                                name="editorDescription" 
                                                value={this.state.editorDescription} 
                                                onChange={this.handleInputChange}
                                                size="sm" 
                                                />
                                            </Col>
                                        </Form.Group>

                                        <Button 
                                            size="sm" 
                                            variant="outline-light cancelButton" 
                                            style={{color:"red"}} 
                                            onClick={this.handleCancelClick}>
                                                Cancel
                                        </Button>
                                        {'   '}
                                        <Button 
                                            size="sm" 
                                            variant="primary"  
                                            onClick={this.handleSaveClick}>
                                                Save
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
            </>
        );
    }
}

export default BioEditor