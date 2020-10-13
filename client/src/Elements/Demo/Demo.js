import React, { useEffect } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import Img from '../../DemoImages/Samples/1.jpg'

const tf = require('@tensorflow/tfjs')


var Clipper = require('image-clipper');

export default function Demo(){
    useEffect(() => {
        c = document.getElementById("canvas");
        ctx = c.getContext("2d");
        img = document.getElementById("img");
        ctx.canvas.width  = Img.width;
        ctx.canvas.height = Img.height;
        ctx.drawImage(img, 0, 0);    
        main();    
    })
    var c;
    var ctx;
    var img;

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
            ctx.fillRect(start[0], start[1], size[0], size[1]);
    
            /*   // Same cropped image
            Clipper(Img, function() {
                this.crop(start[0], start[1], size[0], size[1])
                .toDataURL(function(dataUrl) {
                    console.log('cropped!');
                    crop.src = dataUrl;
                });
            });
*/
            }
        } else {
            console.log('no people identified')
            }
        }
    return (
    <>
        <h1>demo page</h1>
        <img id='img' src={Img}/>
        <canvas id="canvas"></canvas>
        <img id="crop" className="test-images"></img>

    </>
    )
}