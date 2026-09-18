import { BaseGridComponent } from "./../../../gamejs/base/BaseGridComponent.js";
import { getCellSize, layer0Array } from "./../../../gamejs/load/GameLoader.js";

export class WorldGridComponent extends BaseGridComponent {
    constructor(parent) {
        super(parent);
    }

    clear() {
        for (let r = 0; r < this.getNumberOfRows(); r++) {
            let row = this.cells[r];
            for (let c = 0; c < this.getNumberOfColumns(); c++) {
                row[c].clearDrawings();
            }
        }
        return this;
    }

    load() {
        super.load();
        this.loadLayer0();
        return this;
    }

    loadLayer0() {
        // Row 0
        // Column 0

        for (var r = 0; r < this.getNumberOfRows() + 1; r++) {
            var rowOffset = this.parent.getTileOffsetRows();
            var rowNumber = r + rowOffset;
            var row = layer0Array[rowNumber];
            for (var c = 0; c < this.getNumberOfColumns() + 1; c++) {
                var columnOffset = this.parent.getTileOffsetColumns();
                var columnNumber = c + columnOffset;
                var key = row[columnNumber];
                if(!key) {
                    console.log(this);
                    console.log("No tile key found at [" + rowOffset + "," + columnOffset + "]")
                    console.log("No tile key found at [" + rowNumber + "," + columnNumber + "]");
                    throw new Error("No tile key found at [" + rowNumber + "," + columnNumber + "]");
                }
                this.addCellRectangleImageDrawingWithOffset(r, c, key, 
                    this.parent.getOffsetX() - getCellSize(), this.parent.getOffsetY() - getCellSize());
            }
            this.cells.push(row);
        }

                // Row 21
        // Column 31
    }

    update(tick) {
        super.update(tick);
    }

    draw() {
        super.draw();
    }

    getCell(row, column) {
        if(row > this.getNumberOfRows() + 1) {
            throw new Error("Row [" + row + "] exceeds total number of available rows [" + this.getNumberOfRows() + "]");
        }
        if(column > this.getNumberOfColumns() + 1) {
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