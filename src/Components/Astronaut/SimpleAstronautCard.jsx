import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import './Astronaut.css';

const SimpleAstronautCard = ({ imageURL, text, nationality = null, href = '' }) => {

    const loadSimpleCard =
        (<Card className='link'>
            <Image className='astronautThumbNail' src={imageURL} wrapped ui={false} />
            <Card.Content textAlign='center' className='astronautContent'>
                {text} {nationality ? ` (${nationality})` : null}
            </Card.Content>
        </Card>
        );
    return (
        <>
            {href === '' || !href ? loadSimpleCard : <Link to={href}>
                {loadSimpleCard}
            </Link>}
        </>
    )
}

export default SimpleAstronautCard
