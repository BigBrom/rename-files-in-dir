const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'YOU PATH');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
files.forEach((file, i) => {
    const oldNmae = imageDirPath + `/${file}`;
    const newName = imageDirPath + 'NEW NAME.JPG';
    rename(oldNmae,newName,err => console.log(err));
});

