import { BaseTableComponent } from "./BaseTableComponent.js";
import { BaseCellComponent } from "./BaseCellComponent.js";
import { splitToEqualPartsArray } from "./../function/MathFunctions.js";
import { getScreenRows } from "./../load/GameLoader.js";
import { getScreenColumns } from "./../load/GameLoader.js";

export class BaseGridComponent extends BaseTableComponent {
    constructor(parent) {
        super(parent, 100, 100, "left", "top", 0, 0, [], []);
    }

    load() {
        this.rowPercents = splitToEqualPartsArray(109, getScreenRows() + 1);
        this.columnPercents = splitToEqualPartsArray(109, getScreenColumns() + 1);
        this.cells = [];
        for (let r = 0; r < getScreenRows() + 2; r++) {
            let row = [];
            for (let c = 0; c < getScreenColumns() + 2; c++) {
                row.push(
                    new BaseCellComponent(
                        this,
                        this.getCellPercentW(c),
                        this.getCellPercentH(r),
                        "left",
                        "top",
                        this.getCellPercentX(c),
                        this.getCellPercentY(r)
                    )
                );
            }
            this.cells.push(row);
        }
    }
    
    update(tick) {
        this.tick = tick;
        this.components.forEach(e => e.update(tick));
    }

}