import React from 'react'
import SuggestionList from './SuggestionList'
import VideoContainer from './VideoContainer'

function MainContainer() {
    return (
        <div className="col-span-11">
            <SuggestionList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer
