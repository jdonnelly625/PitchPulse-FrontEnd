import React, { useState, useEffect } from 'react';

const ImageDisplay = ({ bucketName, imageName }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [counter, setCounter] = useState(0);  // A counter to trigger updates

    useEffect(() => {
        // Function to update the image URL
        const updateImageUrl = () => {
            const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageName}?t=${Date.now()}`;
            setImageUrl(imageUrl);
        };

        updateImageUrl(); // Update immediately on component mount

        // Set up an interval to update the image URL every minute
        const interval = setInterval(() => {
            updateImageUrl();
            setCounter(prev => prev + 1);  // Increment the counter to trigger re-renders
        }, 60000);  // 60000 milliseconds = 1 minute

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [bucketName, imageName, counter]);

    return imageUrl ? <img className="visualizer--chart" src={imageUrl} alt="Plot" /> : null;
};

export default ImageDisplay;


