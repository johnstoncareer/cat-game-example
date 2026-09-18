import { BaseDrawing } from "../../base/BaseDrawing.js";
import { context } from "./../../main.js";

export class CircleSolidDrawing extends BaseDrawing {
    constructor(parent, color) {
        super(parent);
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
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}