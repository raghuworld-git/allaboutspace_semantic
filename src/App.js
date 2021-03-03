import React from 'react';
import Header from './Components/Header/Header';
import AstronautContainer from './Components/Astronaut/AstronautContainer';
import AgencyDetails from './Components/Agencies/AgencyDetails';
import PageTabTitle from './Components/Common/PageTabTitle'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AstronautDetails from './Components/Astronaut/AstronautDetails';
import { Container } from 'semantic-ui-react';

const App = () => {
  return (
    <div className="app">
      <PageTabTitle title='All About Space' />
      <BrowserRouter>

        <Header />

        {/* <a href='/astronauts'>fdfsd</a> */}
        <Container>
          <Switch>

            <Route path='/astronaut/:id/:name' exact>
              <AstronautDetails />
            </Route>
            <Route path='/astronauts/:page?' exact>
              <AstronautContainer />
            </Route>

            <Route path='/agencies/:id/:name?' exact>
              <AgencyDetails />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
