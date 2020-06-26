import React from "react"
import { Route, withRouter} from 'react-router-dom';
import Profile from './Profile/Profile'
import Dashboard from './Dashboard'
import ResumeBuilder from './ResumeBuilder'
import Community from './Community'
import Resources from './Resources'
import FAQ from './FAQ'
import Contact from './Contact'
import ReferralProgram from './ReferralProgram'

class Content extends React.Component{
    
    componentDidMount(){
    }

    render(){
        return( <>
            <main>
                <Route path="/" exact component={props => <Profile />} />
                <Route path="/profile"  component={props => <Profile />} />
                <Route path="/dashboard" component={props => <Dashboard />} />
                <Route path="/resumeBuilder" component={props => <ResumeBuilder />} />
                <Route path="/community"  component={props => <Community />} />
                <Route path="/resources" component={props => <Resources />} />
                <Route path="/faq" component={props => <FAQ />} />
                <Route path="/contact"  component={props => <Contact />} />
                <Route path="/referralProgram" component={props => <ReferralProgram />} />
            </main>
        </> );
    }
}

export default withRouter(Content)