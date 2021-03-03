import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import AstronautDetails from '../Components/Astronaut/AstronautDetails';
import AstronautContainer from '../Components/Astronaut/AstronautContainer';
import AgencyDetails from '../Components/Agencies/AgencyDetails';

const AppRoute = ({children}) => {
  return <>
    <BrowserRouter>
    {children}
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
  </>;
};

export default AppRoute;
