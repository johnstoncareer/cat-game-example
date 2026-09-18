import { ALIGN_LEFT, VALIGN_TOP } from "../configuration/GameConstants.js";
import { sumArr } from "./../function/MathFunctions.js";
import { BaseCellComponent } from "./BaseCellComponent.js";
import { BaseComponent } from "./BaseComponent.js";

export class BaseTableComponent extends BaseComponent {
    constructor(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY, rowPercents, columnPercents) {
        super(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY);
        this.rowPercents = rowPercents;
        this.columnPercents = columnPercents;
        this.cells = [];
    }

    load() {
        for (let r = 0; r < this.getNumberOfRows(); r++) {
            let row = [];
            for (let c = 0; c < this.getNumberOfColumns(); c++) {
                row.push(
                    new BaseCellComponent(
                        this,
                        this.getCellPercentW(c),
                        this.getCellPercentH(r),
                        ALIGN_LEFT,
                        VALIGN_TOP,
                        this.getCellPercentX(c),
                        this.getCellPercentY(r)
                    )
                );
            }
            this.cells.push(row);
        }
    }

    draw() {
        if (!this.isVisible()) {
            return;
        }
        for (let r = 0; r < this.getNumberOfRows(); r++) {
            for (let c = 0; c < this.getNumberOfColumns(); c++) {
                this.getCell(r,c).update();
                this.getCell(r,c).draw();
            }
        }
        super.draw();
    }

    onMouseMove(x, y) {
        if (!this.visible) {
            return;
        }
        if (this.inside(x, y)) {
            this.components.forEach(e => e.onMouseMove(x, y));
            for (let r = 0; r < this.getNumberOfRows(); r++) {
                for (let c = 0; c < this.getNumberOfColumns(); c++) {
                    this.getCell(r,c).onMouseMove(x, y);
                }
            }
            this.move();
        }
    }

    onMouseClick(x, y) {
        if (!this.visible || this.clicked) {
            return;
        }
        if (this.inside(x, y)) {
            this.components.forEach(e => e.onMouseClick(x, y));
            for (let r = 0; r < this.getNumberOfRows(); r++) {
                for (let c = 0; c < this.getNumberOfColumns(); c++) {
                    this.getCell(r,c).onMouseClick(x, y);
                }
            }
            this.click();
        }
        this.clicked = true;
    }

    onMouseUnclick(x, y) {
        if (!this.visible || !this.clicked) {
            return;
        }
        if (this.inside(x, y)) {
            this.components.forEach(e => e.onMouseUnclick(x, y));
            for (let r = 0; r < this.getNumberOfRows(); r++) {
                for (let c = 0; c < this.getNumberOfColumns(); c++) {
                    this.getCell(r,c).onMouseUnclick(x, y);
                }
            }
            this.unclick();
        }
        this.clicked = false;
    }

    addBorderForAll(percentBorderSize, color) {
        for (let r = 0; r < this.getNumberOfRows(); r++) {
            for (let c = 0; c < this.getNumberOfColumns(); c++) {
                this.getCell(r,c).addRectangleOutlineDrawing(percentBorderSize, color);
            }
        }
        return this;
    }

    addBackgroundForAll(color) {
        for (let r = 0; r < this.getNumberOfRows(); r++) {
            for (let c = 0; c < this.getNumberOfColumns(); c++) {
                this.getCell(r,c).addRectangleSolidDrawing(color);
            }
        }
        return this;
    }

    addBackgroundColor(row, column, color) {
        this.getCell(row, column).addRectangleSolidDrawing(color);
        return this;
    }

    addCellRectangleImageDrawing(row, column, key) {
        this.getCell(row, column).addRectangleImageDrawing(key);
    }

    addCellRectangleImageDrawingWithOffset(row, column, key, pixelOffsetX, pixelOffsetY) {
        this.getCell(row, column).addCellRectangleImageDrawingWithOffset(key, pixelOffsetX, pixelOffsetY);
    }

    addSquareImageDrawing(row, column, key) {
        this.getCell(row, column).addSquareImageDrawing(key);
    }

    clearCellDrawings(row, column) {
        this.getCell(row, column).clearDrawings();
    }

    addText(row, column, text, size, color, offsetPercentX, offsetPercentY) {
        this.getCell(row, column).addTextDrawing(text, size, color, offsetPercentX, offsetPercentY);
        return this;
    }

    show() {
        for (let r = 0; r < this.getNumberOfRows(); r++) {
            for (let c = 0; c < this.getNumberOfColumns(); c++) {
                this.getCell(r,c).show();
            }
        }
        return super.show();
    }

    hide() {
        for (let r = 0; r < this.getNumberOfRows(); r++) {
            for (let c = 0; c < this.getNumberOfColumns(); c++) {
                this.getCell(r,c).hide();
            }
        }
        return super.hide();
    }

    getColumnPercents() {
        return this.columnPercents;
    }

    getRowPercents() {
        return this.rowPercents;
    }

    getNumberOfColumns() {
        return this.getColumnPercents().length;
    }

    getNumberOfRows() {
        return this.getRowPercents().length;
    }

    getCellPercentX(column) {
        return this.getPercentX() + sumArr(this.getColumnPercents(), column);
    }

    getCellPercentY(row) {
        return this.getPercentY() + sumArr(this.getRowPercents(), row);
    }

    getCellPercentW(column) {
        return this.columnPercents[column];
    }

    getCellPercentH(row) {
        return this.rowPercents[row];
    }

    getCell(row, column) {
        if(row > this.getNumberOfRows() - 1) {
            throw new Error("Row [" + row + "] exceeds total number of available rows [" + this.getNumberOfRows() + "]");
        }
        if(column > this.getNumberOfColumns() - 1) {
            throw new Error("Column [" + column + "] exceeds total number of available columns[" + this.getNumberOfColumns() + "]");
        }
        try {
            var cell = this.cells[row][column];
        } catch(e) {
            throw new Error("Exception while looking up [" + row + "," + column + "]: " + e.message);
        }
        if(!cell) {
            throw new Error("Map position [" + row + "," + column + "] is null!");
        }
        return cell;
    }
}