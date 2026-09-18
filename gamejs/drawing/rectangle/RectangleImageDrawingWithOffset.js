import { context } from "./../../main.js";
import { BaseDrawing } from "../../base/BaseDrawing.js";

export class RectangleImageDrawingWithOffset extends BaseDrawing {
    constructor(parent, imageSrc, ix, iy, w, h, offsetX, offsetY) {
        super(parent);
        this.imageSrc = imageSrc;
        this.ix = ix;
        this.iy = iy;
        this.w = w;
        this.h = h;
        this.scale = 1;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    draw() {
        let ctx = context.getCtx();
        let percentW = this.getPercentW() * this.scale;
        let percentH = this.getPercentH() * this.scale;
        let percentOffsetW = (this.getPercentW() * (1 - this.scale)) / 2;
        let percentOffsetH = (this.getPercentH() * (1 - this.scale)) / 2;
        ctx.drawImage(
            context.getImage(this.imageSrc),
            this.ix,
            this.iy,
            this.w,
            this.h,
            context.getWidthPercent(this.getPercentX() + percentOffsetW) + this.offsetX,
            context.getHeightPercent(this.getPercentY() + percentOffsetH) + this.offsetY,
            context.getWidthPercent(percentW),
            context.getHeightPercent(percentH)
        );
    }
}