import { context } from "../../../gamejs/main.js";
import { BaseScreen } from "../../../gamejs/base/BaseScreen.js";
import { WorldGridComponent } from "./../component/WorldGridComponent.js";
import { getCellSize, totalImages, totalImagesLoaded } from "./../../../gamejs/load/GameLoader.js";
import { setLoadedTrue } from "./../../../gamejs/load/GameLoader.js";
import { isLoaded } from "./../../../gamejs/load/GameLoader.js";
import { Cat } from "./../model/Cat.js";
import { Compass } from "../model/Compass.js";
import { getStartScreenRow, getStartScreenColumn } from "./../../../gamejs/load/GameLoader.js";
import { getScreenColumns, getScreenRows } from "./../../../gamejs/load/GameLoader.js";
import { loadImageDrawings } from "./../../../gamejs/load/GameLoader.js";


window.addEventListener("load", function () {
    console.log("Welcome to Cat Life!");
    context.setScreen(new CatLifeScreen());
});

export class CatLifeScreen extends BaseScreen {
    constructor() {
        super("CatLifeScreen");

        this.tileOffsetColumns = 0;
        this.tileOffsetRows = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.screenW = 0;
        this.screenH = 0;
        this.speed = 1;
    }

    load() {
        console.log("Started loading main Cat Life Screen...");

        this.tileOffsetColumns = getStartScreenColumn();
        this.tileOffsetRows = getStartScreenRow();

        this.x = getStartScreenColumn() * getCellSize();
        this.y = getStartScreenRow() * getCellSize();

        this.screenW = (getScreenColumns() + 2) * getCellSize();
        this.screenH = (getScreenRows() + 2) * getCellSize();

        let percentCursorX = context.getMouseListener().mousePositionX / context.getWidth();
        let percentCursorY = context.getMouseListener().mousePositionY / context.getHeight();

        this.cursorX = this.x + (percentCursorX * this.screenW);
        this.cursorY = this.y + (percentCursorY * this.screenH);

        this.cat = new Cat(this);
        this.compass = new Compass(this);
        this.cat.load();
        this.worldGrid = new WorldGridComponent(this);

        this.worldGrid.load();
        this.worldGrid.show();
        this.cat.show();
        this.addChildComponent(this.worldGrid)
            .addChildComponent(this.cat)
            .addChildComponent(this.compass);

        console.log("Finished loading main Cat Life Screen...");
    }

    update(tick) {
        if(!isLoaded() && totalImagesLoaded > 0 && totalImagesLoaded == totalImages) {
            loadImageDrawings()
            setLoadedTrue();
            this.load();

        }
        if(!isLoaded()) {
            console.log("Loading... (" + totalImagesLoaded + "/" + totalImages + ")");
            return;
        }

        this.worldGrid.clear();
        this.moveDestination();
        this.worldGrid.loadLayer0();
        this.components.forEach(e => e.update(tick));
    }

    draw() {
        if(!isLoaded()) {
            return;
        }
        this.components.forEach(e => e.draw());
    }

    onMouseMove(mouseX, mouseY) {
        this.cursorX = this.x + ((mouseX / context.getWidth()) * this.screenW);
        this.cursorY = this.y + ((mouseY / context.getHeight()) * this.screenH);
    }

    onMouseClick(x, y) {
        if(y > context.getHeightPercent(50) && x > context.getWidthPercent(50)) { // SE
            console.log("Mouse clicked in SE Quad (" + x + ", " + y + ")");
            if(y > x) {
                this.cat.setDirection("S");
            } else {
                this.cat.setDirection("E");
            }
        } else if(y < context.getHeightPercent(50) && x < context.getWidthPercent(50)) { // NW
            console.log("Mouse clicked in NW Quad (" + x + ", " + y + ")");
            if(y > x) {
                this.cat.setDirection("W");
            } else {
                this.cat.setDirection("N");
            }
        } else if(y < context.getHeightPercent(50) && x > context.getWidthPercent(50)) { // NE
            console.log("Mouse clicked in NE Quad (" + x + ", " + y + ")");
            if(y < context.getWidth() - x) {
                this.cat.setDirection("N");
            } else {
                this.cat.setDirection("E");
            }
        } else { // SW
            console.log("Mouse clicked in SW Quad (" + x + ", " + y + ")");
            if(context.getHeight() - y < x) {
                this.cat.setDirection("S");
            } else {
                this.cat.setDirection("W");
            }
        }
        this.dx = Math.floor((x - context.getWidthPercent(50)) * (this.screenW / context.getWidth()));
        this.dy = Math.floor((y - context.getHeightPercent(50)) * (this.screenH / context.getHeight()));
    }

    moveDestination() {
        if(this.dx > this.speed) {
            this.x += this.speed;
            this.offsetX += this.speed;
            this.dx -= this.speed;
        } else if(this.dx > 0) {
            this.x += this.dx;
            this.offsetX += this.dx;
            this.dx = 0;
        }
        if(this.offsetX > getCellSize()) {
            this.offsetX -= getCellSize();
            this.tileOffsetColumns++;
        }

        if(this.dx < -this.speed) {
            this.x -= this.speed;
            this.offsetX -= this.speed;
            this.dx += this.speed;
        } else if(this.dx < 0) {
            this.x -= this.dx;
            this.offsetX -= this.dx;
            this.dx = 0;
        }
        if(this.offsetX <  -getCellSize()) {
            this.offsetX += getCellSize();
            this.tileOffsetColumns--;
        }

        if(this.dy > this.speed) {
            this.y += this.speed;
            this.offsetY += this.speed;
            this.dy -= this.speed;
        } else if(this.dy > 0) {
            this.y += this.dy;
            this.offsetY += this.dy;
            this.dy = 0;
        }
        if(this.offsetY > getCellSize()) {
            this.offsetY -= getCellSize();
            this.tileOffsetRows++;
        }

        if(this.dy < -this.speed) {
            this.y -= this.speed;
            this.offsetY -= this.speed;
            this.dy += this.speed;
        } else if(this.dy < 0) {
            this.y -= this.dy;
            this.offsetY -= this.dy;
            this.dy = 0;
        }
        if(this.offsetY < -getCellSize()) {
            this.offsetY += getCellSize();
            this.tileOffsetRows--;
        }
    }

    getCat() {
        return this.cat;
    }

    getCompass() {
        return this.compass;
    }

    getOffsetX() {
        return this.offsetX;
    }

    getOffsetY() {
        return this.offsetY;
    }

    getTileOffsetColumns() {
        return this.tileOffsetColumns;
    }

    getTileOffsetRows() {
        return this.tileOffsetRows;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getDX() {
        return this.dx;
    }

    getDY() {
        return this.dy;
    }

    getCursorX() {
        return this.cursorX;
    }

    getCursorY() {
        return this.cursorY;
    }
}