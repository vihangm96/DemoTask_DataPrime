import React from 'react'
import Bio from './Bio'
import TechnicalSkills from './TechnicalSkills'
import BusinessExperience from './BusinessExperience'
import Preferences from './Preferences'
import './profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Profile extends React.Component{

    constructor(){
        super();

        this.setIsBioEditable = this.setIsBioEditable.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setImageSrc = this.setImageSrc.bind(this);

        this.state = {
                     isBioEditable : false,
                     firstName : "Gordon",
                     lastName : "Fitzgerald",
                     location : null,
                     description : null,
                     imageSrc : null,
                     languages : [],
                     applications : [],
                     methods : [],
                     delivery : [],
                     impact : [],
                     communication : [],
                     oppType : "",
                     targetAnnualSalary : 0,
                     targetHourlyRate : 0,
                     relocation : false,
                     travel : false,
                     mostImportant : "",
                     seniority : "",
                     idealLocation : "",
                     govtJobs : [],
                     industries : [],
                     dataCulture : "",
                     prefCompanySize : ""
                     }
    }

    setIsBioEditable(value){
        this.setState({
            isBioEditable : value
        })
    }

    setFirstName(value){
        this.setState({
           firstName : value
        })
    }

    setLastName(value){
        this.setState({
           lastName : value
        })
    }

    setLocation(value){
        this.setState({
           location : value
        })
    }

    setDescription(value){
        this.setState({
           description : value
        })
    }

    setImageSrc(value){
        this.setState({
          imageSrc : value
        })
    }


    render(){
        return (
            <>
        <Container fluid>
            <Row className="rowOne">
                <Col>
                    <div class="bio">
                        <Bio 
                            isBioEditable = {this.state.isBioEditable} 
                            firstName = {this.state.firstName}
                            lastName = {this.state.lastName}
                            description = {this.state.description}
                            location = {this.state.location}
                            imageSrc = {this.state.imageSrc}
                            setIsBioEditable = {this.setIsBioEditable}
                            setFirstName = {this.setFirstName}
                            setLastName = {this.setLastName}
                            setLocation = {this.setLocation}
                            setDescription = {this.setDescription}
                            setImageSrc = {this.setImageSrc}
                        />
                    </div>                
                </Col>
                
                <Col className="uploadButton">
                    { (this.state.isBioEditable) ? "" :
                     <Button className="uploadButton" variant="primary"  size="sm">
                         Upload resume
                     </Button> }
                </Col>
            </Row>

            <Row className="otherRow">
                <TechnicalSkills 
                            languages = {this.state.languages}
                            applications = {this.state.applications}
                            methods = {this.state.methods}
                            
                />
            </Row>
            
            <Row className="otherRow">
                <BusinessExperience 
                            delivery = {this.state.delivery}
                            impact = {this.state.impact}
                            communication = {this.state.communication}
                            
                />
            </Row>
            
            <Row className="otherRow">
                <Preferences 
                            oppType = {this.state.oppType}
                            targetAnnualSalary  = {this.state.targetAnnualSalary}
                            targetHourlyRate  = {this.state.targetHourlyRate}
                            relocation  = {this.state.relocation}
                            travel  = {this.state.travel}
                            mostImportant  = {this.state.mostImportant}
                            seniority  = {this.state.seniority}
                            idealLocation  = {this.state.idealLocation}
                            govtJobs  = {this.state.govtJobs}
                            industries  = {this.state.industries}
                            dataCulture  = {this.state.dataCulture}
                            prefCompanySize  = {this.state.prefCompanySize}
                            
                />            
            </Row>

        </Container>

            </>
        );
    }
}

export default Profile