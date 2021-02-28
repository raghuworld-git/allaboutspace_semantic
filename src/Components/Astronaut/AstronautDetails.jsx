import React, { useEffect } from 'react';

import { getAstronautById } from '../../actions/astronautAction';
import LoaderComponent from '../Common/LoaderComponent';

import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Container, Grid, GridColumn, Segment } from 'semantic-ui-react';
import SimpleAstronautCard from './SimpleAstronautCard';

const AstronautDetails = ({ astronautDetails, getAstronautById }) => {

    const { id, name } = useParams();

    useEffect(() => {
        getAstronautById(id);
    }, [])

    if (!astronautDetails) {
        return <LoaderComponent loadingText={`Launching "${name}"`} />
    }

    const { profile_image, name: astroName } = astronautDetails;
    console.log(astronautDetails);
    return (
        <Container>
            {/* <i className={`ae flag`}></i>
            Ausdetails {id} */}

            <Grid container centered stackable>
                <Grid.Column computer={5} tablet={5} mobile={16}>
                    <SimpleAstronautCard imageURL={profile_image} text={astroName} />
                </Grid.Column>
                <Grid.Column computer={11} tablet={11} mobile={16}>
                    <Card fluid></Card>
                </Grid.Column>
            </Grid>

        </Container>
    )
}


const mapStateToProps = (state) => {
    return {
        astronautDetails: state.astronautDetails
    }
}

export default connect(mapStateToProps, { getAstronautById })(AstronautDetails);
