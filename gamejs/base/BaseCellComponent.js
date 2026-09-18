import { BaseComponent } from "./BaseComponent.js";

export class BaseCellComponent extends BaseComponent {
    constructor(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY) {
        super(
            parent,
            percentW,
            percentH,
            align,
            valign,
            offsetPercentX,
            offsetPercentY - parent.getPercentY()
        );
    }

    getPercentX() {
        return this.getParentPercentX() + (this.getParentPercentW() * (this.getOffsetPercentX() / 100));
    }

    getPercentY() {
        return this.getParentPercentY() + (this.getParentPercentH() * (this.getOffsetPercentY() / 100));
    }
}