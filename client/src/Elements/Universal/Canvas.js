import React, { useState, useEffect, useRef } from 'react';
import Img from '../../DemoImages/Samples/1.jpg'

// Scaling Constants for Canvas

export function draw(ctx, location) {
    console.log("attempting to draw")
};

export function useCanvas() {
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);
    const [url, setUrl] = useState(Img);
    const [width, setWidth] = useState(400)
    const [height, setHeight] = useState(400)
  
    useEffect(() => {
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        ctx.canvas.width  = width;
        ctx.canvas.height = height;
        var img = new Image();
        img.src = url;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        }
    });

    return [coordinates, setCoordinates, canvasRef, url, setUrl];
}
