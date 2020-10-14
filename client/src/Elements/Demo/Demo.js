import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import Img from '../../DemoImages/Samples/1.jpg'

const tf = require('@tensorflow/tfjs')

export default function Demo() {
    const image = useRef(null);
    const canvas = useRef(null);


    const handleCanvas = (image) => {
        const canvasObj = canvas.current;
        const ctx = canvasObj.getContext('2d');
        ctx.canvas.width = image.current.naturalWidth;
        ctx.canvas.height = image.current.naturalHeight;
        var img = new Image();
        img.src = Img;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        }
        main(ctx);
    }

    async function main(ctx) {
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
                ctx.fillRect(start[0], start[1], size[0], size[0]);
            }
        } else {
            console.log('no people identified')
        }
    }
    return (
        <>
            <h1>demo page</h1>
            <img ref={image} onLoad={() => handleCanvas(image)} src={Img}></img>
            <canvas
                className="App-canvas"
                ref={canvas}
            />
        </>
    )
}