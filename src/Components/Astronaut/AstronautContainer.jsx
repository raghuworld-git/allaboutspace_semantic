import React, { useEffect } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import { useParams, useHistory } from 'react-router-dom';

import SimpleAstronautCard from './SimpleAstronautCard';

import { connect } from 'react-redux';
import { getAstronauts } from '../../actions/astronautAction';
import LoaderComponent from '../Common/LoaderComponent';
import PaginationComponent from '../Common/PaginationComponent';
import PageTabTitle from '../Common/PageTabTitle';

import './Astronaut.css';



const itemsPerPage = 8;

const AstronautContainer = ({ getAstronauts, astronauts }) => {

    const history = useHistory();
    const { page } = useParams();


    const pageChangeHandler = (selectedPage) => {

        selectedPage = (selectedPage === null || selectedPage === undefined || selectedPage === 0 ? 1 : selectedPage);
        const offset = Math.ceil(selectedPage * itemsPerPage);
        getAstronauts(itemsPerPage, offset)

        history.push(`/astronauts/${selectedPage}`);

    }


    useEffect(() => {

        if (page) {
            const offset = Math.ceil(page * itemsPerPage);
            getAstronauts(itemsPerPage, offset);
        }
        else {
            getAstronauts(itemsPerPage);
        }
    }, []);

    const { data, count } = astronauts;

    if (!data) {
        return <LoaderComponent loadingText='Launching Astronauts' />;

    }

    return (<div>
        <PageTabTitle title='Astronauts' />
        <Container>
            <Header dividing icon textAlign='center' as='h2'>
                Astronauts
            </Header>
            {/* <AstronautFilterAccordian /> */}
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

            <Grid container>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <PaginationComponent itemsPerPage={itemsPerPage} totalCount={count} pageChangeHandler={pageChangeHandler} currentActivePage={page} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        astronauts: state.astronauts,
        astronautCurrentPage: state.astronautCurrentPage
    }
}

export default connect(mapStateToProps, { getAstronauts })(AstronautContainer)
