import React, { useEffect } from 'react';

import { getAstronautById } from '../../actions/astronautAction';
import LoaderComponent from '../Common/LoaderComponent';

import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Container, Grid, Table } from 'semantic-ui-react';
import SimpleAstronautCard from './SimpleAstronautCard';
import SocialLinksComponent from '../Common/SocialLinksComponent';

const AstronautDetails = ({ astronautDetails, getAstronautById }) => {

    const { id, name } = useParams();

    useEffect(() => {
        getAstronautById(id);
    }, [])

    if (!astronautDetails) {
        return <LoaderComponent loadingText={`Launching "${name}"`} />
    }

    const { profile_image, name: astroName, agency, date_of_birth, date_of_death: deceased, nationality, bio, status, type, instagram, twitter, wiki } = astronautDetails;
    console.log(astronautDetails);
    return (
        <Container>
            <Grid container centered stackable>
                <Grid.Column computer={5} tablet={5} mobile={16}>
                    <SimpleAstronautCard imageURL={profile_image} text={astroName} />
                </Grid.Column>
                <Grid.Column computer={11} tablet={11} mobile={16}>
                    <Card fluid>
                        <Card.Content>
                            <h2 style={{ textAlign: 'center' }}>{astroName} <span style={{ fontSize: 'large' }}> ({status.name})</span></h2>

                            <h3 style={{ textAlign: 'center' }}>{agency.name}{' '}({agency.type})</h3>

                            <hr />
                            <Table textAlign='center'>
                                <Table.Body >
                                    <Table.Row>
                                        <Table.Cell>Nationality : {nationality}</Table.Cell>
                                        <Table.Cell>Date of Birth : {date_of_birth}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Deceased : {deceased}</Table.Cell>
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
