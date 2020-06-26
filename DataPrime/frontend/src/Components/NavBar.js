import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class NavBar extends React.Component{

render(){
    return(
        <>
        <SideNav

        expanded = {true}
        style = {{backgroundColor: "#111217", }}
        onSelect={(selected) => {
            const to = '/' + selected;
            if (window.location.pathname !== to) {
                this.props.history.push(to);
            }
        }}
        >
        {/* <SideNav.Toggle  /> */}
        <SideNav.Nav defaultSelected="profile">
            <NavItem eventKey="profile">
                <NavIcon>
                    <i className="fa fa-fw fa-profile" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Profile
                </NavText>
            </NavItem>
            <NavItem eventKey="dashboard">
                <NavIcon>
                    <i className="fa fa-fw fa-dashboard" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Dashboard
                </NavText>
            </NavItem>
            <NavItem eventKey="resumeBuilder">
                <NavIcon>
                    <i className="fa fa-fw fa-resumeBuilder" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Resume Builder
                </NavText>
            </NavItem>
            <NavItem eventKey="community">
                <NavIcon>
                    <i className="fa fa-fw fa-community" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Community
                </NavText>
            </NavItem>
            <NavItem eventKey="resources">
                <NavIcon>
                    <i className="fa fa-fw fa-resources" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Resources
                </NavText>
            </NavItem>
            <NavItem eventKey="faq">
                <NavIcon>
                    <i className="fa fa-fw fa-faq" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    FAQ
                </NavText>
            </NavItem>
            <NavItem eventKey="contact">
                <NavIcon>
                    <i className="fa fa-fw fa-contact" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Contact
                </NavText>
            </NavItem>
            <NavItem eventKey="referralProgram">
                <NavIcon>
                    <i className="fa fa-fw fa-referralProgram" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Referral Program
                </NavText>
            </NavItem>                                        
        </SideNav.Nav>
    </SideNav>
        </>
    );
}

}

export default NavBar