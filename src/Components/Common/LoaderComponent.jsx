import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderComponent = ({ loadingText }) => {
    return (

        <Dimmer active inverted>
            <Loader size='big' inverted content={loadingText} />
        </Dimmer>
    )
}

export default LoaderComponent
