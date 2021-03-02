import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const AstronautFilterAccordian = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps

        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex);

    }

    return (
        <>
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                >
                    <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>
                        A dog is a type of domesticated animal. Known for its loyalty and
                        faithfulness, it can be found as a welcome guest in many households
                        across the world.
          </p>
                </Accordion.Content>
            </Accordion>
        </>
    )
}

export default AstronautFilterAccordian
