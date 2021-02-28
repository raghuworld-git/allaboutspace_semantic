import React, { useEffect } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

import SimpleAstronautCard from './SimpleAstronautCard';

import { connect } from 'react-redux';
import { getAstronauts } from '../../actions/astronautAction';
import LoaderComponent from '../Common/LoaderComponent';

import './Astronaut.css';


const itemsPerPage = 8;

const AstronautContainer = ({ getAstronauts, astronauts }) => {


    useEffect(() => {
        getAstronauts(itemsPerPage);
    }, []);

    const { data } = astronauts;

    if (!data) {
        return <LoaderComponent loadingText='Launching Astronauts for you' />;

    }

    return (<div>
        <Container>
            <Header dividing icon textAlign='center' as='h2'>
                Astronauts
            </Header>
            {/* <Grid container >
                <Grid.Column textAlign='center'>
                    <InputComponent placeholder='Search Astronauts...' searchHandler={searchHandler} />
                </Grid.Column>
            </Grid> */}
            <Grid container stretched doubling centered columns='4'>
                {data.map(({ id, name, profile_image, nationality }) => {
                    return <Grid.Column key={id} >
                        <SimpleAstronautCard imageURL={profile_image} text={name} href={`/astronaut/${id}/${name}`} />
                    </Grid.Column>
                })}
            </Grid>
        </Container>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        astronauts: state.astronauts
    }
}

export default connect(mapStateToProps, { getAstronauts })(AstronautContainer)
