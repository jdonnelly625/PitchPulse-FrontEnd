import React from 'react';
import ImageDisplay from './ImageDisplay';

const teamTextShadows = {
    Chelsea: '1px 1px 2px blue',
};

const teamDisplayNames = {
    'Liverpool': 'Liverpool',
    'Chelsea': 'Chelsea',
    'Manchester United': 'Man Utd',
    'Arsenal': 'Arsenal',
    // Add more teams as needed
};

const teamSubs = {
    'Liverpool': 'https://www.reddit.com/r/LiverpoolFC/',
    'Chelsea': 'https://www.reddit.com/r/chelseafc/',
    'Manchester United': 'https://www.reddit.com/r/reddevils/',
    'Arsenal': 'https://www.reddit.com/r/gunners/',
    // Add more teams as needed
};

const Visualizer = ({ team }) => {
    const bucketName = 'pitch-pulse-images'; 
    const imageName = `${team}_plot.png`;
    const textShadowStyle = { textShadow: teamTextShadows[team] };

    return (
        <div className="visualizer">
            <h1 className="visualizer--title" style={textShadowStyle}>{teamDisplayNames[team]} Hot Topic</h1>
            <ImageDisplay bucketName={bucketName} imageName={imageName} />
            <a href={teamSubs[team]} class="styled-link">Visit the Subreddit!</a>
        </div>
    );
};

export default Visualizer;
