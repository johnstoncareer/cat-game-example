import { context } from "./../../main.js";
import { BaseDrawing } from "./../../base/BaseDrawing.js";

export class RectangleSolidDrawing extends BaseDrawing {
    constructor(parent, color) {
        super(parent);
        this.color = color;
    }

    draw() {
        let ctx = context.getCtx();
        ctx.fillStyle = this.color;
        ctx.fillRect(
            context.getWidthPercent(this.getPercentX()),
            context.getHeightPercent(this.getPercentY()),
            context.getWidthPercent(this.getPercentW()),
            context.getHeightPercent(this.getPercentH()));
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}

