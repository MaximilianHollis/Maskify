import React from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs';
var Clipper = require('image-clipper');

export default function Demo(){
    var c = document.getElementById("canvas");
    var ctx = c
    var img = document.getElementById("img");
    ctx.canvas.width  = img.width;
    ctx.canvas.height = img.height;
    ctx.drawImage(img, 0, 0);    

    async function main() {
        // Load the model.
        const model = await blazeface.load();
        
        // Pass in an image or video to the model. The model returns an array of
        // bounding boxes, probabilities, and landmarks, one for each detected face.
       
        const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
        const predictions = await model.estimateFaces(document.querySelector("img"), returnTensors);
       
        if (predictions.length > 0) {
          for (let i = 0; i < predictions.length; i++) {
            const start = predictions[i].topLeft;
            const end = predictions[i].bottomRight;
            const size = [end[0] - start[0], end[1] - start[1]];
       
            // Render a rectangle over each detected face.
            console.log(start[0], start[1], size[0], size[1])
            ctx.fillRect(start[0], start[1], size[0], size[1]);
    
            // Same cropped image
            Clipper("./DemoImages/samples/1.jpg", function() {
                this.crop(start[0], start[1], size[0], size[1])
                .toFile(`./cropped/${i}.jpg`, () => console.log('saved img: ' + i))
            });  
          }
        } else{
            console.log('no people identified')
        }
      }
      window.onload = main();

    return (
    <>
        <h1>demo page</h1>
        <img id='img' src='./DemoImages/Samples'/>
        <canvas id="canvas"></canvas>
        <img id="crop" class="test-images"></img>

    </>
    )
}