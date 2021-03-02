import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'

const SmallCards = ({ items, emptyMessage=null }) => {

    let cardItems = items.map(({ image, status, name, id }) => {
        const statusColor = status === 'Success' ? 'green' : (status === 'Failure' ? 'red' : 'yellow');

        return (
            <Card key={id}>
                <img src={image} style={{ maxHeight: '10em', objectFit: 'cover' }} alt={name} />
                <Card.Content>
                    <h4>{name}</h4>
                </Card.Content>
                <Link to={`/launch/${id}`} className={`ui bottom ${statusColor} attached button`}>
                    {status}
                </Link>
            </Card>
        )
    });

    if(items.length<=0 && emptyMessage){
        cardItems=emptyMessage;
    }

    return (
        <Card.Group doubling itemsPerRow='5' centered>
            {cardItems}
        </Card.Group>
    )
}

export default SmallCards
