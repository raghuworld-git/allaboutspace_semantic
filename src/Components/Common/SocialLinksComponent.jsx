import React from 'react'

const SocialLinksComponent = ({ instagram = null, twitter = null, wiki = null, webLink = null }) => {
    return (
        <>
            {twitter &&
                <a className="ui twitter button" href={twitter} target='_blank' rel="noreferrer">
                    <i className="twitter icon"></i>
                Twitter
              </a>
            }
            {wiki &&

                <a className="ui  button" href={wiki} target='_blank' rel="noreferrer">
                    <i className="wikipedia w icon"></i>
                Wiki
         </a>
            }
            {instagram &&
                <a className="ui instagram button" href={instagram} target='_blank' rel="noreferrer">
                    <i className="instagram icon"></i>
             Instagram
                </a>
            }
            {webLink &&
                <a className="ui  button" href={webLink} target='_blank' rel="noreferrer">
                    <i className="linkify icon"></i>
                Website
                </a>

            }

            {twitter === null && wiki === null && instagram === null && webLink === null ? 'No social accounts. Please stay tuned' : ''}

        </>
    )
}

export default SocialLinksComponent
