import React, { useEffect } from 'react';

import { getAstronautById } from '../../actions/astronautAction';
import LoaderComponent from '../Common/LoaderComponent';

import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Container, Grid, Segment, Table } from 'semantic-ui-react';
import SimpleAstronautCard from './SimpleAstronautCard';
import SocialLinksComponent from '../Common/SocialLinksComponent';
import './Astronaut.css';
import SmallCards from '../Common/SmallCards';

const AstronautDetails = ({ astronautDetails, getAstronautById }) => {

    const { id, name } = useParams();

    useEffect(() => {
        getAstronautById(id);
    }, [])

    if (!astronautDetails) {
        return <LoaderComponent loadingText={`Launching "${name}"`} />
    }

    const { profile_image, name: astroName, agency, date_of_birth, date_of_death: deceased, nationality, bio, status, type, instagram, twitter, wiki, flights } = astronautDetails;

    const flightDetailsFormated = flights.map(({ image, name, status, id }) => {
        return { id, image, name, status: status.abbrev }
    });

    console.log(flightDetailsFormated);
    console.log(astronautDetails);
    return (
        <Container>
            <Grid container centered stackable>
                <Grid.Row>
                    <Grid.Column computer={5} tablet={5} mobile={16}>
                        <SimpleAstronautCard imageURL={profile_image} text={astroName} />
                    </Grid.Column>

                    <Grid.Column computer={11} tablet={11} mobile={16}>
                        <Card fluid className='astronautDetails_detailsCard' color='black'>
                            <Card.Content textAlign='center'>
                                <h2>{astroName} <span style={{ fontSize: 'large' }}> ({status.name})</span></h2>
                                <Link to={`/agencies/${agency.id}`} className='ui black medium button'>Agency: {agency.name}</Link>
                                <br /><br />
                                <Table textAlign='center'>
                                    <Table.Body >
                                        <Table.Row>
                                            <Table.Cell>Nationality : {nationality}</Table.Cell>
                                            <Table.Cell>Date of Birth : {date_of_birth}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Deceased : {!deceased ? ' NA' : deceased}</Table.Cell>
                                            <Table.Cell>Type : {type.name}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>

                            </Card.Content>
                            <Card.Content textAlign='center'>
                                <h3 style={{ textAlign: 'center' }}>Social Links:</h3>

                                <SocialLinksComponent twitter={twitter} wiki={wiki} instagram={instagram} />
                            </Card.Content>
                        </Card>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Card fluid color='black'>
                            <Card.Content>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Segment>
                            <h3>Launches</h3>
                            <SmallCards items={flightDetailsFormated} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
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
