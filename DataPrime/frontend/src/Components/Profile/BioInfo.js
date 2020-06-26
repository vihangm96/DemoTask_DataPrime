import React from 'react'
import Image from 'react-bootstrap/Image'
import logo from './logo.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class BioInfo extends React.Component{

    constructor(props){
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(){
        this.props.setIsBioEditable(true)
    }

    render(){
        
        var tempSrc = logo

        if(this.props.imageSrc != null){
            tempSrc = this.props.imageSrc
        }


        return(
            <>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                            <Image 
                                className="profileImage" 
                                src={tempSrc} 
                                style={{height:"8.5rem", width:"8.5rem"}} 
                                roundedCircle />
                            </Col>
                            <Col class="bioText">
                                                    
                                                    <h6 className="editText" onClick={this.handleEditClick}>
                                                        Edit
                                                    </h6>
                                                    <h4 className="bioName whiteText"  >
                                                        {this.props.firstName + "   " + this.props.lastName}
                                                    </h4>   
                                                    <h5 className="bioLocation grayText">
                                                        {this.props.location == null ?
                                                         "No location added" :
                                                          this.props.location}
                                                    </h5>
                                                    <h5 className="bioDesc grayText">
                                                        {this.props.description == null ?
                                                         "Description (in your words)" :
                                                          this.props.description}
                                                    </h5>
                            </Col>
                        </Row>
                    </Container>
            </>
        );
    }
}

export default BioInfo