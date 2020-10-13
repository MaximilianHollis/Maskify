import React, { useState, useEffect, useRef } from 'react';

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 80;
export const canvasWidth = window.innerWidth * .5;
export const canvasHeight = window.innerHeight * .5;

export function draw(ctx, location){
  console.log("attempting to draw")
};

export function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);
    const [url, setUrl] = useState('')

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        var img = new Image();
        img.src = url;
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
     }
        });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight, url, setUrl ];
}
