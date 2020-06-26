import React from 'react'
import BioInfo from './BioInfo'
import BioEditor from './BioEditor'

class Bio extends React.Component{

    render(){

        return (
            <div>
                    {this.props.isBioEditable ? 
                        <BioEditor 
                            setIsBioEditable = {this.props.setIsBioEditable}
                            setFirstName = {this.props.setFirstName}
                            setLastName = {this.props.setLastName}
                            setLocation = {this.props.setLocation}
                            setDescription = {this.props.setDescription}
                            setImageSrc = {this.props.setImageSrc}
                        />
                    :
                        <BioInfo  
                            firstName = {this.props.firstName}
                            lastName = {this.props.lastName}
                            location = {this.props.location}
                            description = {this.props.description}
                            imageSrc = {this.props.imageSrc}
                            setIsBioEditable = {this.props.setIsBioEditable}
                        />
                    }
            </div>
        );
    }
}

export default Bio