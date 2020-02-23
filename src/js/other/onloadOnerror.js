import React from 'react';

const OnloadOnerror = () => {

    function preloadImages(sources, callback) {
        /* your code */
        let promises = [];
        sources.forEach(image => {
            let img = document.createElement('img');
            img.src = image;
            promises.push(new Promise((resolve, reject) => {
                img.onload = () => {
                    resolve(img.src)
                };
                img.onerror = () => {
                    resolve(img.src)
                };
            }))
        });
        Promise.all(promises).then(callback)
    }

    // ---------- The test ----------

    let sources = [
        "https://en.js.cx/images-load/1.jpg",
        "https://en.js.cx/images-load/2.jpg",
        "https://en.js.cx/images-load/3.jpg"
    ];

    // add random characters to prevent browser caching
    for (let i = 0; i < sources.length; i++) {
        sources[i] += '?' + Math.random();
    }

    // for each image,
    // let's create another img with the same src and check that we have its width immediately
    function testLoaded() {
        let widthSum = 0;
        for (let i = 0; i < sources.length; i++) {
            let img = document.createElement('img');
            img.src = sources[i];
            widthSum += img.width;
        }
        alert(widthSum);
    }

    // every image is 100x100, the total width should be 300
    preloadImages(sources, testLoaded);

    return (
        <div>
            2
        </div>
    );
};

export default OnloadOnerror;