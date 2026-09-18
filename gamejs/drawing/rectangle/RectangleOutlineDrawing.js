import { BaseDrawing } from "../../base/BaseDrawing.js";
import { context } from "./../../main.js";

export class RectangleOutlineDrawing extends BaseDrawing {
    constructor(parent, percentBorderSize, color) {
        super(parent);
        this.percentBorderSize = percentBorderSize;
        this.color = color;
    }

    draw() {
        let ctx = context.getCtx();
        ctx.beginPath();
        ctx.lineWidth = context.getHeightPercent(this.percentBorderSize);
        ctx.strokeStyle = this.color;
        ctx.rect(
            context.getWidthPercent(this.getPercentX()),
            context.getHeightPercent(this.getPercentY()),
            context.getWidthPercent(this.getPercentW()),
            context.getHeightPercent(this.getPercentH()));
        ctx.stroke();
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}

