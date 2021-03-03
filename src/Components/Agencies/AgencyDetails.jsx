import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';

import PageTabTitle from '../Common/PageTabTitle';

import { getAgencyById } from '../../actions/agencyAction';

import { connect } from 'react-redux';
import SimpleAstronautCard from '../Astronaut/SimpleAstronautCard';


const AgencyDetails = ({ getAgencyById, agencyDetails }) => {

    const { id, name } = useParams();

    useEffect(() => {
        getAgencyById(id);
    }, [])

    //console.log(agencyDetails);

    return (
        <Container>
            <PageTabTitle title={`Agency | ${name}`} />

            <Grid container centered stackable>
                <Grid.Row>
                    <Grid.Column computer={5} tablet={5} mobile={16}>
                        <SimpleAstronautCard imageURL={agencyDetails.logo_url} text={agencyDetails.name} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        agencyDetails: state.agencyDetails
    }
}
export default connect(mapStateToProps, { getAgencyById })(AgencyDetails)
