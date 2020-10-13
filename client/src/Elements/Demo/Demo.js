import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import Img from '../../DemoImages/Samples/1.jpg'
import { useCanvas } from '../Universal/Canvas';

const tf = require('@tensorflow/tfjs')

export default function Demo(){
    const [ coordinates, setCoordinates, canvasRef, url, setUrl ] = useCanvas();
    const image = useRef(null);
    
    const handleSize = (image) => {
        console.log(image.offsetwidth)
    }

    const setCanvas = () => {
        setUrl(Img);
    }

    async function main() {
        // Load the model.
        const model = await blazeface.load();

        // Pass in an image or video to the model. The model returns an array of
        // bounding boxes, probabilities, and landmarks, one for each detected face.
        
        const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
        const predictions = await model.estimateFaces(document.querySelector("img"), returnTensors);
        console.log('ok')

        if (predictions.length > 0) {
            for (let i = 0; i < predictions.length; i++) {
            const start = predictions[i].topLeft;
            const end = predictions[i].bottomRight;
            const size = [end[0] - start[0], end[1] - start[1]];
        
            // Render a rectangle over each detected face.
            console.log(start[0], start[1], size[0], size[1])
            //ctx.fillRect(start[0], start[1], size[0], size[1]);

            }
        } else {
            console.log('no people identified')
            }
        }
        main();
    return (
    <>
        <h1>demo page</h1>
        <button onClick={() => setCanvas()}>click</button>
        <img ref={image => handleSize(image)} id='image' src={Img}></img>
        <canvas 
        className="App-canvas"
        ref={canvasRef}
        />
    </>
    )
}