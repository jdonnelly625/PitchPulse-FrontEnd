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

const Visualizer = ({ team }) => {
    const bucketName = 'pitch-pulse-images'; 
    const imageName = `${team}_plot.png`;
    const textShadowStyle = { textShadow: teamTextShadows[team] };

    return (
        <div className="visualizer">
            <h1 className="visualizer--title" style={textShadowStyle}>{teamDisplayNames[team]} Hot Topic</h1>
            <ImageDisplay bucketName={bucketName} imageName={imageName} />
        </div>
    );
};

export default Visualizer;
