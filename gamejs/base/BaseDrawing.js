export class BaseDrawing {
    constructor(parent) {
        this.parent = parent;
    }

    getParent() {
        return this.parent;
    }

    getPercentX() {
        return this.parent ? this.parent.getPercentX() : 0;
    }

    getPercentY() {
        return this.parent ? this.parent.getPercentY() : 0;
    }

    getPercentW() {
        return this.parent ? this.parent.getPercentW() : 100;
    }

    getPercentH() {
        return this.parent ? this.parent.getPercentH() : 100;
    }
}