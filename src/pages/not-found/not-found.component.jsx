import React from 'react' 

import './not-found.styles.css'

const NotFound = () => { 
    document.title = 'Page not found'
    return(
        <div className="not-found">
            <h1 className="four-o-four">404</h1>
            <p className="not-found-p">Oops! Something is wrong.</p>
            <a className="not-found-button" href="/"><i className="icon-home"></i> Go back to home page</a>
        </div>
    )
}

export default NotFound 