import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';

import Img from '../../DemoImages/Samples/33.jpg'

const Clipper = require('image-clipper');
const Tensorset = require('tensorset');

export default function Demo() {
    const image = useRef(null);
    const test = useRef(null);
    const canvas = useRef(null);
    const [src, setSrc] = useState([]);



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
        main(ctx, img);
    }


    async function main(ctx, img) {
        // Load the model.
        const config = {
            maxFaces: 16,
            inputWidth: 128,
            inputHeight: 128,
            iouThreshold: 0.5,
            scoreThreshold: 0.1
        }

        const model = await blazeface.load(config);

        // Pass in an image or video to the model. The model returns an array of
        // bounding boxes, probabilities, and landmarks, one for each detected face.

        const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
        const predictions = await model.estimateFaces(document.querySelector("img"), returnTensors);
        console.log(predictions)
        if (predictions.length > 0) {
            for (let i = 0; i < predictions.length; i++) {
                const start = predictions[i].topLeft;
                const end = predictions[i].bottomRight;
                const size = [end[0] - start[0], end[1] - start[1]];
                ctx.beginPath();
                ctx.lineWidth = "6";
                ctx.strokeStyle = "red";
                ctx.font = '25px serif';
                ctx.fillText('Mask Detected', start[0], start[1] - 20);
                ctx.rect(start[0], start[1], size[0], size[0]);
                ctx.stroke();

                Clipper(img, function () {
                    this.crop(start[0], start[1], size[0], size[0])
                        .resize(50, 50)
                        .toDataURL(50, function (dataUrl) {
                            setSrc(src => [...src, dataUrl]);
                            getMask(dataUrl);
                        });
                });
            }
        } else {
            console.log('no people identified')
        }
    }

    async function getMask(dataUrl) {
        const testImageCount = 5;

        // Load mobilenet module
        const mobilenetModule = await mobilenet.load({ version: 2, alpha: 1 });
        // Add examples to the KNN Classifier
        load();
        let classifier = knnClassifier.create();


        async function load() {
            //can be change to other source
            let dataset = await require('./MaskNet/model.json');
            classifier.setClassifierDataset(Object.fromEntries((dataset).map(([label, data, shape]) => [label, tf.tensor(data, shape)])));
            console.log(classifier)

            // Predict class for the test image
            for (let i = 1; i <= testImageCount; i++) {
                const testImage = test.current;
                testImage.setAttribute('src', dataUrl);
                testImage.classList.add('test-img');
                const tfTestImage = tf.browser.fromPixels(testImage);
                const logits = mobilenetModule.infer(tfTestImage, 'conv_preds');
                const prediction = await classifier.predictClass(logits);
                console.log("num: " + i)
                console.log(prediction.label)
            }
        }
    }




    async function trainClassifier(mobilenetModule) {
        // Create a new KNN Classifier
        const classifier = knnClassifier.create();

        // Train using mask images
        const maskImages = document.querySelectorAll('.mask-img');
        maskImages.forEach(img => {
            const tfImg = tf.browser.fromPixels(img);
            const logits = mobilenetModule.infer(tfImg, 'conv_preds');
            classifier.addExample(logits, 0); // has mask
        });
        // Train using no mask images
        const noMaskImages = document.querySelectorAll('.no-mask-img');
        noMaskImages.forEach(img => {
            const tfImg = tf.browser.fromPixels(img);
            const logits = mobilenetModule.infer(tfImg, 'conv_preds');
            classifier.addExample(logits, 1); // no mask
        });

        return classifier;
    }

    return (
        <>
            <h1>demo page</h1>
            <img ref={image} onLoad={() => handleCanvas(image)} src={Img}></img>
            <canvas
                className="canvas"
                ref={canvas}
            />
            <div className="cropDiv">
                {src ? src.map((src, index) => <img key={index} src={src}></img>) : null}
                <img className="test-image" ref={test}></img>
            </div>
        </>
    )
}