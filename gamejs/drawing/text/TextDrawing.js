import { BaseDrawing } from "../../base/BaseDrawing.js";
import { context } from "./../../main.js";

export class TextDrawing extends BaseDrawing {
    constructor(parent, text, size, color, offsetPercentX, offsetPercentY) {
        super(parent);
        this.text = text;
        this.size = size;
        this.color = color;
        this.offsetPercentX = offsetPercentX;
        this.offsetPercentY = offsetPercentY;
    }

    draw() {
        let multiplier = context.getHeightPercent(1) / 10;
        switch (this.size) {
            case "x-large":
                var ptSize = 50;
                break;
            case "large":
                var ptSize = 40;
                break;
            case "medium":
                var ptSize = 26;
                break;
            case "small":
                var ptSize = 20;
                break;
            case "x-small":
                var ptSize = 16;
                break;
            case "xx-small":
                var ptSize = 12;
                break;
            case "micro":
                var ptSize = 8;
                break;
            default:
                var ptSize = 4;
                break;
        }
        let actualPtSize = ptSize * multiplier;
        let ctx = context.getCtx();
        ctx.font = actualPtSize + "pt Helvetica";
        ctx.fillStyle = this.color;
        ctx.fillText(
            this.text,
            context.getWidthPercent(this.getPercentX() + ((this.offsetPercentX / 100) * this.getPercentW())),
            context.getHeightPercent(this.getPercentY() + ((this.offsetPercentY / 100) * this.getPercentH())),
        );
    }

    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
        return this;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}