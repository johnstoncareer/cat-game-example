export var gameConfiguration = null;
export var layer0Array = null;
export const images = new Map();
export const imageDrawings = new Map();
export var totalImages = 0;
export var totalImagesLoaded = 0;
export var totalImageDrawingsLoaded = 0;
export var loaded = false;

export async function loadImage(url) {
    new Promise(
        response => {
            let image = new Image();
            image.onload = (() => response(image));
            image.src = url;
        }
    )
        .then(response => {
            console.log("Started loading image [" + url + "]...");
            images.set(url, response);
            console.log("Finished loading image [" + url + "]...");
            totalImagesLoaded++;
        })
        .catch(e => console.error(e));
}

export async function loadImages(cfgUrl) {
    console.log("Started loading images from [" + cfgUrl + "]...");
    for(let i = 0; i < gameConfiguration.game.images.length; i++) {
        await loadImage(gameConfiguration.game.images[i]);
        totalImages++;
    }
    console.log("Successfully loaded images from [" + cfgUrl + "]...");
}


export function loadImageDrawings() {
    for(let i = 0; i < gameConfiguration.game.drawings.length; i++) {
        console.log("Started loading drawing [" + gameConfiguration.game.drawings[i].key + "]...");
        imageDrawings.set(
            gameConfiguration.game.drawings[i].key,
            gameConfiguration.game.drawings[i]);
        console.log("Finished loading drawing [" + gameConfiguration.game.drawings[i].key + "]...");
        totalImageDrawingsLoaded++;
    }
}

export async function loadCSVFile(csvUrl) {
    try {
        console.log("Started loading CSV file from url [" + csvUrl + "]");
        const response = await fetch(csvUrl);
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvData = await response.text();
        const rows = csvData.split('\n');
        console.log("Read CVS File Lines: " + rows);
        layer0Array = rows.map(row => row.split(','));

        console.log("Successfully loaded CSV file [" + csvUrl + "] into memory as array");
    } catch (error) {
        console.error("Error loading [" + csvUrl + "]", error);
        throw error;
    }
}

export async function loadConfigurationFile(cfgUrl) {
    try {
        console.log("Started loading configuration file from url [" + cfgUrl + "]");
        const response = await fetch(cfgUrl)
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        gameConfiguration = await response.json();

        console.log("Successfully loaded file [" + cfgUrl + "] into memory as json");
        await loadImages(cfgUrl);
    } catch (error) {
        console.error("Error loading [" + cfgUrl + "]", error);
        throw error;
    }
}

export function setLoadedTrue() {
    loaded = true;
}

export function isLoaded() {
    return loaded;
}

export function getWorldRows() {
    return Number(gameConfiguration.game.grid.worldRows);
}

export function getWorldColumns() {
    return Number(gameConfiguration.game.grid.worldColumns);

}

export function getScreenRows() {
    return Number(gameConfiguration.game.grid.screenRows);
}

export function getScreenColumns() {
    return Number(gameConfiguration.game.grid.screenColumns);
}

export function getStartScreenRow() {
    return Number(gameConfiguration.game.grid.startScreenRow);
}

export function getStartScreenColumn() {
    return Number(gameConfiguration.game.grid.startScreenColumn);
}

export function getCellSize() {
    return Number(gameConfiguration.game.grid.cellSize);
}

export function getImageDrawing(key) {
    if(!loaded) {
        throw new Error("ERROR! Still images loading in progress!");
    }
    let imageDrawing = imageDrawings.get(key);
    if(!imageDrawing) {
        console.error(this);
        throw new Error("ERROR! No image found for key [" + key + "]! Map dump images: [" +
        images.toString + "] Map dump image drawns: [" + imageDrawings.toString() + "]", this);  
    }
    return imageDrawings.get(key);
}