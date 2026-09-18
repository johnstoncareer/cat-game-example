import { TextDrawing } from "../../../gamejs/drawing/text/TextDrawing.js";

export class Compass {
    constructor(parent) {
        this.parent = parent;
    }

    update() {}

    draw() {
        new TextDrawing(
            this.parent,
            "Top Left Pixel [" + this.parent.getX() + ", " + this.parent.getY() + "]",
            "x-small",
            "white",
            1,
            3
        ).draw();
        
        new TextDrawing(
            this.parent,
            "Cursor Pixel [" + this.parent.getCursorX() + ", " + this.parent.getCursorY() + "]",
            "x-small",
            "white",
            1,
            6
        ).draw();

        new TextDrawing(
            this.parent,
            "Destination Pixel [" +  this.parent.getDX() + ", " +  this.parent.getDY() + "]",
            "x-small",
            "white",
            1,
            9
        ).draw();

        new TextDrawing(
            this.parent,
            "Tile Offsets [" +  this.parent.getTileOffsetColumns() + ", " +  this.parent.getTileOffsetRows() + "]",
            "x-small",
            "white",
            1,
            12
        ).draw();

        new TextDrawing(
            this.parent,
            "Offsets [" +  this.parent.getOffsetX() + ", " +  this.parent.getOffsetY() + "]",
            "x-small",
            "white",
            1,
            15
        ).draw();
    }
}