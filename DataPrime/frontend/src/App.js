import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Content from './Components/Content'
import NavBar from './Components/NavBar'

class App extends React.Component{
  
  render(){
    return(
      <Router>
          <Route render={({ location, history }) => (
          <React.Fragment>

          {/* <Container fluid>
            <Col>
              <NavBar history={history}  />
            </Col>

            <Col>
              <Content />
            </Col>
          </Container> */}

          <NavBar history={history}  />

          <Content />

      </React.Fragment>
    
    )}
/>
      </Router>
  );
  }

}

export default App;