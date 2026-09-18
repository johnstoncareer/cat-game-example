import { BaseDrawing } from "../../base/BaseDrawing.js";
import { context } from "./../../main.js";

export class CircleOutlineDrawing extends BaseDrawing {
    constructor(parent, percentBorderSize, color) {
        super(parent);
        this.percentBorderSize = percentBorderSize;
        this.color = color;
    }

    draw() {
        let ctx = context.getCtx();
        ctx.beginPath();
        let r = context.getHeightPercent(this.getPercentH() / 2);
        ctx.arc(
            context.getWidthPercent(this.getPercentX()) + r,
            context.getHeightPercent(this.getPercentY()) + r,
            r,
            0,
            2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = context.getHeightPercent(this.percentBorderSize);
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