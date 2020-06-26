import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class TechnicalSkills extends React.Component{

    render(){
        return(
            <>
             <Container fluid>
                <Row> 
                    <h5 className="grayText otherRow"> <b> Technical skills </b> </h5>
                 </Row> 
                 <Row>
                    <ButtonGroup size="sm" className="otherRow">
                        <Button variant="link ">Languages</Button>
                        <Button variant="link" >Applications</Button>
                        <Button variant="link" >Methods</Button>
                    </ButtonGroup>
                </Row>
                    <Form  className="addSkillsForm" >
                        <Button 
                            className="addSkillsButton" 
                            size="sm" 
                            style={{backgroundColor:"#3b3b3b", border:'none', borderRadius:'18px'}}>
                                Add skills
                        </Button>
                    </Form>
                <Row> 
                </Row>
            </Container> 
            </>
        );
    }
}

export default TechnicalSkills