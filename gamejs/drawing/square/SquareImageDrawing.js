import { BaseDrawing } from "../../base/BaseDrawing.js";
import { context } from "./../../main.js";

export class SquareImageDrawing extends BaseDrawing {
    constructor(parent, imageSrc, ix, iy, wh, scale) {
        super(parent);
        this.imageSrc = imageSrc;
        this.ix = ix;
        this.iy = iy;
        this.w = wh;
        this.h = wh;
        this.scale = scale;
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
            context.getWidthPercent(this.getPercentX() + percentOffsetW),
            context.getHeightPercent(this.getPercentY() + percentOffsetH),
            context.getWidthPercent(percentW),
            context.getHeightPercent(percentH)
        );
    }
}